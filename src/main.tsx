import ReactDOM from 'react-dom/client';
import './assets/index.scss';
import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  //TODO: add strict mode back when finished
  // <React.StrictMode>
    <App />
  // </React.StrictMode>,
);
