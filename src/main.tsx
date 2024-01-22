import ReactDOM from 'react-dom/client'
import App from '@App.tsx'
import '@scss/_reset.scss'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee, faBars } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faCheckSquare, faCoffee, faBars)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <App />
)
