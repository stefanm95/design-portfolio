import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./theme/index.ts";
import ExperienceProvider from "./runtime/ExperienceProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <ExperienceProvider>
      <App />
    </ExperienceProvider>
  </ThemeProvider>,
);
