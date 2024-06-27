import ReactDOM from 'react-dom/client';
import './styles/global.css';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './routes';
import DataProvider from './pages/cart/DataProvider';
import { AuthProvider } from './pages/login/AuthProvider';
import UsersProvider from './clients/UsersProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AuthProvider>
    <DataProvider>
      <UsersProvider>
        <BrowserRouter>
          <MainRoutes />
        </BrowserRouter>
      </UsersProvider>
    </DataProvider>
  </AuthProvider>
);
