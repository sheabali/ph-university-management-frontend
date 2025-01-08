import { createBrowserRouter } from 'react-router-dom';
import App from '../App';

import Login from '../pages/Login';
import Register from '../pages/Register';
import AdminDashboard from '../pages/admin/AdminDashboard';
import CreateStudent from '../pages/admin/CreateStudent';
import CreateFaculty from '../pages/admin/CreateFaculty';
import CreateAdmin from '../pages/admin/CreateAdmin';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/admin',
    element: <App />,
    children: [
      {
        path: 'dashboard',
        element: <AdminDashboard />,
      },

      {
        path: 'create-admin',
        element: <CreateAdmin />,
      },

      {
        path: 'create-faculty',
        element: <CreateFaculty />,
      },
      {
        path: 'create-student',
        element: <CreateStudent />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);

export default routes;
