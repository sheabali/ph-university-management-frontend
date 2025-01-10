import { Layout, Menu } from 'antd';
import { Outlet } from 'react-router-dom';
import adminPaths from '../../routes/admin.routes';
import { sidebarItemsGenerator } from '../../utils/sidebarItemGenerator';

const { Header, Content, Sider } = Layout;
// const items: MenuProps['items'] = [
//   {
//     key: 'Dashboard',
//     label: <NavLink to="/admin/dashboard">Dashboard</NavLink>,
//   },
//   {
//     key: 'User Management',
//     label: 'User Management',
//     children: [
//       {
//         key: 'Create Admin',
//         label: <NavLink to="/admin/create-admin">Create Admin </NavLink>,
//       },
//       {
//         key: 'Create Faculty',
//         label: <NavLink to="/admin/create-faculty">Create Faculty </NavLink>,
//       },
//       {
//         key: 'Create Student',
//         label: <NavLink to="/admin/create-student">Create Student </NavLink>,
//       },
//     ],
//   },
// ];
const MainLayout = () => {
  return (
    <Layout style={{ height: '100vh' }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div
          style={{
            color: 'white',
            height: '4rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h1> Ph Uni</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['4']}
          items={sidebarItemsGenerator(adminPaths)}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
