const adminPaths = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    element: 'AdminDashboard',
  },

  {
    name: 'User Management',
    children: [
      {
        name: 'Create Admin',
        path: 'create-admin',
        element: 'CreateAdmin',
      },

      {
        name: 'Create Faculty',
        path: 'create-faculty',
        element: 'CreateFaculty',
      },
      {
        name: 'Create Student',
        path: 'create-student',
        element: 'CreateFaculty',
      },
    ],
  },
  {
    name: 'Offered Course',
    path: 'dashboard',
    element: 'AdminDashboard',
  },
];

const adminSidebarItem = adminPaths.reduce((acc, item) => {
  if (item.path && item.name) {
    acc.push({
      name: item.name,
      label: 'navlink',
    });
  }

  if (item.children) {
    acc.push({
      key: item.name,
      label: item.name,
      children: item.children.map((child) => ({
        name: child.name,
        label: 'navlink',
      })),
    });
  }

  return acc;
}, []);

console.log(paths);
