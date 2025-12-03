import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/global.css';
import './i18n/config';

createRoot(document.getElementById("root")!).render(
    <App />
);