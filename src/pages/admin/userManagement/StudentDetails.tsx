import { useParams } from 'react-router-dom';

const StudentDetails = () => {
  const { studentId } = useParams();

  return <div>Student ID: {studentId}</div>;
};

export default StudentDetails;
