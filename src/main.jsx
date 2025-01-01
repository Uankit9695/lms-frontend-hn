// compnent import
import { Toaster } from 'react-hot-toast';
import App from './App.jsx';
//CSS import
import './index.css';
//Library import
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
  <Provider>
      <BrowserRouter>
         <App />
         <Toaster/>
      </BrowserRouter>
  </Provider>
  
)
