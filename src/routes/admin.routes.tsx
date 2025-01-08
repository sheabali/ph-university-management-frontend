import AdminDashboard from '../pages/admin/AdminDashboard';
import CreateAdmin from '../pages/admin/CreateAdmin';
import CreateFaculty from '../pages/admin/CreateFaculty';
import CreateStudent from '../pages/admin/CreateStudent';

const adminPaths = [
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
];

export default adminPaths;
