import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Render into Shadow DOM to discourage Reader View
const host = document.getElementById('root')
const shadow = host && (host.shadowRoot || (host.attachShadow ? host.attachShadow({ mode: 'open' }) : null))
const container = shadow || host


createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Block printing and Reader View related keys
window.addEventListener('keydown', (e) => {
  const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
  if ((isMac && e.metaKey && e.key.toLowerCase() === 'p') || (!isMac && e.ctrlKey && e.key.toLowerCase() === 'p')) {
    e.preventDefault();
    e.stopPropagation();
  }
});

// Prevent print dialogs triggered via window.print or browser UI hooks
window.addEventListener('beforeprint', (e) => {
  // Attempt to cancel and hide content just in case
  try { e.preventDefault?.(); } catch {}
  const el = document.getElementById('root');
  if (el) el.style.display = 'none';
  setTimeout(() => { if (el) el.style.display = ''; }, 1000);
});