import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { DataProvider } from "./components/contexts/DataContext.jsx";
import { ThemeProvider } from "./components/contexts/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <DataProvider>
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </DataProvider>

  // </StrictMode>,
);
