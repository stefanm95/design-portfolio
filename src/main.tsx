import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./theme/index.ts";
import ExperienceProvider from "./runtime/experience/ExperienceProvider.tsx";
import NavigationProvider from "./runtime/navigation/NavigationProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <ExperienceProvider>
      <NavigationProvider>
        <App />
      </NavigationProvider>
    </ExperienceProvider>
  </ThemeProvider>,
);
