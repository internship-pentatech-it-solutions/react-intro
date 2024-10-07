import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Contact from './components/Contact.jsx'; // Only include if you're directly using it

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <App />
    {/* Example usage of Contact component, if needed */}
    {/* <Contact /> */}
  </StrictMode>
);
