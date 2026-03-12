import { render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { BrowserRouter } from "react-router-dom";
import { ThemeContext } from "../Contexts/ThemeContext";

describe("Header", () => {
  test("deve mostrar o título Gerencie tarefas e projetos", () => {
    render(
      <ThemeContext.Provider value={{ theme: "light", setTheme: () => {} }}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </ThemeContext.Provider>,
    );

    const title = screen.getByText("Gerencie tarefas e projetos");

    expect(title).toBeInTheDocument();
  });
});
