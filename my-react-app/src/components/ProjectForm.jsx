import { useContext, useState } from "react";
import { GlobalContext } from "../Contexts/GlobalContext";
import { v4 } from "uuid";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

function ProjectForm() {
  const { projects, setProjects } = useContext(GlobalContext);
  const [sucess, setSucess] = useState(false);

  const schema = z.object({
    titulo: z.string().min(3, "Mínimo 3 caracteres"),
    descricao: z
      .string()
      .min(1, "Descrição insuficiente")
      .max(200, "Máximo 200 caracteres"),
    categoria: z.enum(
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

  const onSubmit = (data) => onAddClick(data);

  //Adiciona novo Projeto e muda estado de projects
  function onAddClick(data) {
    const newProjectAdd = {
      id: v4(),
      title: data.titulo,
      description: data.descricao,
      category: data.categoria,
      isCompleted: false,
    };
    setProjects([...projects, newProjectAdd]);
    setSucess(true);
    reset();

    setTimeout(() => setSucess(false), 2000);
  }

  const descricaoValue = watch("descricao", ""); //diz qual o valor atual do campo descricao
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-amber-100 dark:bg-amber-500 flex flex-col gap-2 py-7 p-5"
    >
      <input
        {...register("titulo")}
        type="text"
        placeholder="Digite sua tarefa..."
        className={`border rounded-md px-4 py-2
          ${
            errors.titulo
              ? "border-red-500 focus:ring-2 focus:ring-red-400"
              : "border-black dark:border-slate-400"
          } `}
      />
      {errors.titulo && (
        <p className="text-red-500 bg-red-500/20">{errors.titulo.message}</p>
      )}

      <div className="flex justify-between text-sm text-gray-500">
        <span>Descrição</span>
        <span>{descricaoValue.length}/200</span>
      </div>
      <textarea
        {...register("descricao")}
        rows="3"
        cols="40"
        placeholder="Descrição"
        className={`border rounded-md px-4 py-2
          ${
            errors.descricao
              ? "border-red-500 focus:ring-2 focus:ring-red-400"
              : "border-black dark:border-slate-400"
          } `}
      />
      {errors.descricao && (
        <p className="text-red-500 bg-red-500/20">{errors.descricao.message}</p>
      )}
      <select
        {...register("categoria")}
        className={`border rounded-md px-4 py-2
          ${
            errors.categoria
              ? "border-red-500 focus:ring-2 focus:ring-red-400"
              : "border-black dark:border-slate-400"
          } `}
      >
        <option value=""></option>
        <option value="trabalho">Trabalho</option>
        <option value="pessoal">Pessoal</option>
        <option value="estudo">Estudo</option>
      </select>
      {errors.categoria && (
        <p className="text-red-500 bg-red-500/20">{errors.categoria.message}</p>
      )}

      {sucess && (
        <p className="text-green-600 bg-green-100 border border-green-300 rounded p-2 text-sm">
          Projeto criado com sucesso
        </p>
      )}
      <button className="border border-black dark:border-slate-400 bg-amber-300 dark:bg-amber-700 rounded-md py-1">
        Adicionar
      </button>
    </form>
  );
}

export default ProjectForm;
