export default [
  {
    path: '/user',
    layout: false,
    routes: [
      { path: '/user/login', component: './User/Login' },
      { path: '/user/register', component: './User/Register' },
    ],
  },
  { path: '/', redirect: '/add' },
  { name: '分析数据', path: '/add', icon: 'barChart', component: './AddChart' },
  { name: '分析数据（异步）', path: '/add_async', icon: 'barChart', component: './AddChartAsync' },
  { name: '我的图表', path: '/myChart', icon: 'pieChart', component: './MyChart' },

  { path: '/welcome', icon: 'smile', name: '欢迎', component: './Welcome' },
  {
    path: '/admin',
    icon: 'crown',
    name: '管理页面',
    access: 'canAdmin',
    routes: [
      { path: '/admin', redirect: '/admin/sub-page' },
      { path: '/admin/sub-page', name: '二级菜单页', component: './Admin' },
    ],
  },
  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
