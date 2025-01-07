import { Layout, Menu, MenuProps } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const items: MenuProps['items'] = [
  {
    key: '1',
    label: 'Dashboard',
    children: [
      {
        key: '11',
        label: 'Create Admin',
      },
    ],
  },
  {
    key: '2',
    label: 'Profile',
  },
];
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
          Ph Uni
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['4']}
          items={items}
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
            content
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>@Amr Iccha </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
