import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ColorChanger from './components/ColorChanger.jsx';
import { ThemeProvider } from './components/ThemeContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
    <ColorChanger/>
    <App />
    </ThemeProvider>
  </StrictMode>,
)
