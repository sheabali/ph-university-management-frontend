import AcademicDepartment from '../pages/admin/AcademicDepartment/AcademicDepartment';
import CreateAcademicDepartment from '../pages/admin/AcademicDepartment/CreateAcademicDepartment';
import AcademicFaculty from '../pages/admin/AcademicFaculty/AcademicFaculty';
import CreateAcademicFaculty from '../pages/admin/AcademicFaculty/CreateAcademicFaculty';
import AcademicSemester from '../pages/admin/AcademicSemester/AcademicSemester';
import CreateAcademicSemester from '../pages/admin/AcademicSemester/CreateAcademicSemester';
import AdminDashboard from '../pages/admin/AdminDashboard';
import Courses from '../pages/admin/courseManagement/Courses';
import CreateCourse from '../pages/admin/courseManagement/CreateCourse';
import OfferCourse from '../pages/admin/courseManagement/OfferCourse';
import RegisteredSemesters from '../pages/admin/courseManagement/RegisteredSemesters';
import SemesterRegistration from '../pages/admin/courseManagement/SemesterRegistration';
import CreateAdmin from '../pages/admin/userManagement/CreateAdmin';
import CreateFaculty from '../pages/admin/userManagement/CreateFaculty';
import CreateStudent from '../pages/admin/userManagement/CreateStudent';
import StudentData from '../pages/admin/userManagement/StudentData';
import StudentDetails from '../pages/admin/userManagement/StudentDetails';
import OfferedCourse from '../pages/faculty/OfferedCourse';

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
        name: 'Students',
        path: 'students-data',
        element: <StudentData />,
      },
      {
        path: 'students-data/:studentId',
        element: <StudentDetails />,
      },
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
    children: [
      {
        name: 'Semester Registration',
        path: 'semester-registration',
        element: <SemesterRegistration />,
      },
      {
        name: 'Registered Semesters',
        path: 'registered-semesters',
        element: <RegisteredSemesters />,
      },
      {
        name: 'Create Course',
        path: 'create-course',
        element: <CreateCourse />,
      },
      {
        name: 'Courses',
        path: 'courses',
        element: <Courses />,
      },
      {
        name: 'Offer Course',
        path: 'offer-course',
        element: <OfferCourse />,
      },
      {
        name: 'Offered Courses',
        path: 'offered-courses',
        element: <OfferedCourse />,
      },
    ],
  },
];

export default adminPaths;
