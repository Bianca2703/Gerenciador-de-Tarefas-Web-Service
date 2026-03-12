import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TaskForm from "../components/TaskForm";
import { GlobalContext } from "../Contexts/GlobalContext";

describe("TaskForm", () => {
  test("deve adicionar uma tarefa ao clicar em adicionar", async () => {
    const setTasks = vi.fn();

    render(
      <GlobalContext.Provider value={{ tasks: [], setTasks }}>
        <TaskForm mode="create" />
      </GlobalContext.Provider>,
    );

    const input = screen.getByPlaceholderText("Digite sua tarefa...");
    const textarea = screen.getByPlaceholderText("Descrição");
    const select = screen.getByRole("combobox");
    const button = screen.getByText("Adicionar");

    await userEvent.type(input, "Estudar React");
    await userEvent.type(textarea, "Aprender testes");
    await userEvent.selectOptions(select, "estudo");

    await userEvent.click(button);

    expect(setTasks).toHaveBeenCalled();
  });
});
