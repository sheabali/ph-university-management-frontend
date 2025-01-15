import AcademicSemester from '../pages/admin/AcademicSemester/AcademicSemester';
import AdminDashboard from '../pages/admin/AdminDashboard';
import CreateAdmin from '../pages/admin/CreateAdmin';
import CreateFaculty from '../pages/admin/CreateFaculty';
import CreateStudent from '../pages/admin/CreateStudent';

const adminPaths = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    element: <AdminDashboard />,
  },
  {
    name: 'Academic Semester',
    children: [
      {
        name: 'Academic Semester',
        path: 'academic-emester',
        element: <AcademicSemester />,
      },
    ],
  },

  {
    name: 'User Management',
    children: [
      {
        name: 'Create Admin',
        path: 'create-admin',
        element: <CreateAdmin />,
      },

      {
        name: 'Create Faculty',
        path: 'create-faculty',
        element: <CreateFaculty />,
      },
      {
        name: 'Create Student',
        path: 'create-student',
        element: <CreateStudent />,
      },
      {
        name: 'Create Member',
        path: 'create-member',
        element: <CreateStudent />,
      },
    ],
  },
  {
    name: 'Offered Course',
    path: 'dashboard',
    element: <AdminDashboard />,
  },
];

export default adminPaths;
