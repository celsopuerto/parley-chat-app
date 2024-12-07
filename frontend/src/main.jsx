import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { useThemeStore } from "../src/store/useThemeStore";

const theme = useThemeStore.getState().theme;
document.documentElement.setAttribute("data-theme", theme);

// Listen for theme changes and update the HTML attribute
useThemeStore.subscribe((state) => {
  document.documentElement.setAttribute("data-theme", state.theme);
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
