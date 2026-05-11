import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./theme/index.ts";
import NavigationProvider from "./runtime/navigation/NavigationProvider.tsx";
import PresentationProvider from "./runtime/presentation/PresentationProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <NavigationProvider>
      <PresentationProvider>
        <App />
      </PresentationProvider>
    </NavigationProvider>
  </ThemeProvider>,
);
