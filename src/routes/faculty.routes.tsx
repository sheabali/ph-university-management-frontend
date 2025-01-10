import OfferedCourse from '../pages/faculty/OfferedCourse';
import FacultyDashboard from '../pages/student/StudentDashboard';

export const facultyPaths = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    element: <FacultyDashboard />,
  },
  {
    name: 'Offered Course',
    path: 'offered-course',
    element: <OfferedCourse />,
  },
];
