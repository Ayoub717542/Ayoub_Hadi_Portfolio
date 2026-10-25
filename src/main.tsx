import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { LangProvider } from './i18n';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LangProvider>
      <App />
    </LangProvider>
  </StrictMode>,
);

// Tell the loading screen (public/loader.js) that the page and fonts are ready.
document.fonts.ready.then(() => document.dispatchEvent(new Event('app-ready')));
