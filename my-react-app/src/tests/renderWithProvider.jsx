import { render } from "@testing-library/react";
import ThemeProvider from "../Contexts/ThemeProvider";
import GlobalProvider from "../Contexts/GlobalProvider";

export function renderWithProvider(ui) {
  return render(
    <ThemeProvider>
      <GlobalProvider>{ui}</GlobalProvider>
    </ThemeProvider>,
  );
}
