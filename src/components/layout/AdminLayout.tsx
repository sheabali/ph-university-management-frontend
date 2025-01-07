import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div>
      Admin <Outlet></Outlet>
    </div>
  );
};

export default AdminLayout;
