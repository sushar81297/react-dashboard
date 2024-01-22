
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from '@App.tsx'
import '@style/_variable.scss'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee, faBars } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faCheckSquare, faCoffee, faBars)

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

