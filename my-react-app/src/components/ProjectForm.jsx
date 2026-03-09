import { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../Contexts/GlobalContext";
import { v4 } from "uuid";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

function ProjectForm({ mode, projectId }) {
  const { projects, setProjects } = useContext(GlobalContext);
  const [message, setMessage] = useState("");

  const schema = z.object({
    title: z.string().min(3, "Mínimo 3 caracteres"),
    description: z
      .string()
      .min(1, "Descrição insuficiente")
      .max(200, "Máximo 200 caracteres"),
    category: z.enum(
      ["trabalho", "pessoal", "estudo"],
      "Escolha uma das opções válidas",
    ),
  });

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onBlur",
    reValidateMode: "onChange",
  }); //valida quando o usuário sai do campo

  const onSubmit = (data) =>
    mode === "edit" ? editProject(data) : onAddClick(data);

  //Adiciona novo Projeto e muda estado de projects
  function onAddClick(data) {
    const newProjectAdd = {
      id: v4(),
      title: data.title,
      description: data.description,
      category: data.category,
      isCompleted: false,
      createdAt: new Date(),
      completedAt: null,
    };
    setProjects([...projects, newProjectAdd]);
    setMessage("Projeto criado com sucesso");
    reset();

    setTimeout(() => {
      setMessage("");
    }, 2000);
  }

  const descriptionValue = watch("description", ""); //diz qual o valor atual do campo descricao

  //ATUALIZAR PROJETO
  function editProject(data) {
    const editedProject = projects.map((project) => {
      if (project.id === projectId) {
        const title = data.title;
        const description = data.description;
        const category = data.category;
        return { ...project, title, description, category };
      } else return project;
    });
    setProjects(editedProject);
    setMessage("Tarefa atualizada com sucesso");
    reset(); //navigate(-1)

    setTimeout(() => {
      setMessage("");
    }, 2000);
  }

  useEffect(() => {
    if (mode === "edit") {
      const project = projects.find((project) => project.id === projectId);

      console.log("TASK ENCONTRADA:", project);
      if (project) {
        reset({
          title: project.title,
          description: project.description,
          category: project.category,
        });
      }
    }
  }, [mode, projectId, projects, reset]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-amber-100 dark:bg-amber-500 flex flex-col gap-2 py-7 p-5"
    >
      <input
        {...register("title")}
        type="text"
        placeholder="Digite sua tarefa..."
        className={`border rounded-md px-4 py-2
          ${
            errors.title
              ? "border-red-500 focus:ring-2 focus:ring-red-400"
              : "border-black dark:border-slate-400"
          } `}
      />
      {errors.title && (
        <p className="text-red-500 bg-red-500/20">{errors.title.message}</p>
      )}

      <div className="flex justify-between text-sm text-gray-500">
        <span>Descrição</span>
        <span>{descriptionValue.length}/200</span>
      </div>
      <textarea
        {...register("description")}
        rows="3"
        cols="40"
        placeholder="Descrição"
        className={`border rounded-md px-4 py-2
          ${
            errors.description
              ? "border-red-500 focus:ring-2 focus:ring-red-400"
              : "border-black dark:border-slate-400"
          } `}
      />
      {errors.description && (
        <p className="text-red-500 bg-red-500/20">
          {errors.description.message}
        </p>
      )}
      <select
        {...register("category")}
        className={`border rounded-md px-4 py-2
          ${
            errors.category
              ? "border-red-500 focus:ring-2 focus:ring-red-400"
              : "border-black dark:border-slate-400"
          } `}
      >
        <option value=""></option>
        <option value="trabalho">Trabalho</option>
        <option value="pessoal">Pessoal</option>
        <option value="estudo">Estudo</option>
      </select>
      {errors.category && (
        <p className="text-red-500 bg-red-500/20">{errors.category.message}</p>
      )}

      {message && (
        <p className="text-green-600 bg-green-100 border border-green-300 rounded p-2 text-sm">
          {message}
        </p>
      )}
      <button className="border border-black dark:border-slate-400 bg-amber-300 dark:bg-amber-700 rounded-md py-1">
        {mode === "edit" ? <p>Atualizar</p> : <p>Adicionar</p>}
      </button>
    </form>
  );
}

export default ProjectForm;
