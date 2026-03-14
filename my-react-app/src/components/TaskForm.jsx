import { useEffect, useState } from "react";
import { v4 } from "uuid";
import { useContext } from "react";
import { GlobalContext } from "../Contexts/GlobalContext";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createTask, updateTask } from "../api/tasksApi";

function TaskForm({ mode, projectId, taskId }) {
  const { tasks, setTasks } = useContext(GlobalContext);
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
    mode === "edit" ? editTask(data) : onSubmitTask(data);

  //Cria nova tarefa e muda o estado
  function onSubmitTask(data) {
    //chamada dentro do hanldesubmit
    const newTaskAdd = {
      //Aqui a tarefa é montada
      id: v4(),
      title: data.title,
      description: data.description,
      category: data.category,
      isCompleted: false,
      isDeleted: false,
      createdAt: new Date(),
      completedAt: null,
      ...(projectId && { projectId }), //Só adiciona projectId se existir
    };

    createTask(newTaskAdd).then((taskCreated) => {
      setTasks((prev) => [...prev, taskCreated]);
    });

    setMessage("Tarefa criada com sucesso");
    reset();

    setTimeout(() => {
      setMessage("");
    }, 2000);
  }

  const descriptionValue = watch("description", "");

  //Quantidade de tarefas pendentes
  const pendingTasks = tasks.filter(
    (task) => task.isCompleted === false,
  ).length;

  //Responsável por mudar o título da página cada vez que pendingTasks mudar
  useEffect(() => {
    document.title = `TaskMaster (${pendingTasks} pendentes)`;
  }, [pendingTasks]);

  //ATUALIZAR TAREFA
  function editTask(data) {
    const updatedTask = {
      title: data.title,
      description: data.description,
      category: data.category,
    };

    updateTask(taskId, updatedTask).then((taskUpdated) => {
      const newTasks = tasks.map((task) =>
        task.id === taskId ? taskUpdated : task,
      );

      setTasks(newTasks);
    });

    setMessage("Tarefa atualizada com sucesso");
    reset();

    setTimeout(() => {
      setMessage("");
    }, 2000);
  }

  useEffect(() => {
    if (mode === "edit") {
      const task = tasks.find((task) => task.id === taskId);

      if (task) {
        reset({
          //reseta o formulário para esses valores:
          title: task.title,
          description: task.description,
          category: task.category,
        });
      }
    }
  }, [mode, taskId, tasks, reset]);

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

      <button
        type="submit"
        className="border border-black dark:border-slate-400 bg-amber-300 dark:bg-amber-700 rounded-md py-1"
      >
        {mode === "edit" ? <p>Atualizar</p> : <p>Adicionar</p>}
        {/*Não precisa do onClick com a função por que quem está controlando o envio é o form*/}
        {/*Ao clicar, o form é submetido e handleSubmit roda */}
      </button>
    </form>
  );
}

export default TaskForm;
