import AcademicDepartment from '../pages/admin/AcademicDepartment/AcademicDepartment';
import CreateAcademicDepartment from '../pages/admin/AcademicDepartment/CreateAcademicDepartment';
import AcademicFaculty from '../pages/admin/AcademicFaculty/AcademicFaculty';
import CreateAcademicFaculty from '../pages/admin/AcademicFaculty/CreateAcademicFaculty';
import AcademicSemester from '../pages/admin/AcademicSemester/AcademicSemester';
import CreateAcademicSemester from '../pages/admin/AcademicSemester/CreateAcademicSemester';
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
    name: 'Academic Management',
    children: [
      {
        name: 'Academic Semester',
        path: 'academic-semester',
        element: <AcademicSemester />,
      },
      {
        name: 'Create A. Semester',
        path: 'create-academic-semester',
        element: <CreateAcademicSemester />,
      },
      {
        name: 'Create A. Faculty',
        path: 'create-academic-faculty',
        element: <CreateAcademicFaculty />,
      },
      {
        name: 'Academic Faculty',
        path: 'academic-faculty',
        element: <AcademicFaculty />,
      },
      {
        name: 'Create A. Department',
        path: 'create-academic-department',
        element: <CreateAcademicDepartment />,
      },
      {
        name: 'Academic Department',
        path: 'academic-department',
        element: <AcademicDepartment />,
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
