import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import ReactHooks from './components/ReactHooks/home.jsx';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
     {/*<App />*/}
    <ReactHooks/>
    {/* Example usage of Contact component, if needed */}
    {/* <Contact /> */}
  </StrictMode>
);
