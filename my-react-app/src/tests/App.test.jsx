import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("App", () => {
  test("Verifica se o título 'Gerencie Tarefas e Projetos' aparece", () => {
    render(<App />);

    const titulo = screen.getByText("Gerencie Tarefas e Projetos");

    expect(titulo).toBeInTheDocument();
  });

  test("digita no input e adiciona item na lista", async () => {
    render(<App />);

    const input = screen.getByPlaceholderText(/tarefa/i);
    const botao = screen.getByText(/adicionar/i);

    await userEvent.type(input, "Estudar React");
    await userEvent.click(botao);

    const item = screen.getByText("Estudar React");

    expect(item).toBeInTheDocument();
  });
});
