import Dashboard from './components/main/pages/dashboard_page/Dashboard';
import About from './components/main/pages/about_page/About';
import Account from './components/main/pages/account_page/Account';
import MessagesPage from './components/main/pages/messages_page/MessagesPage';
import Notifications from './components/main/pages/notifications_page/Notifications';

const routes = [
  {
    path: '/',
    component: Dashboard,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/account',
    component: Account,
  },
  {
    path: '/messages',
    component: MessagesPage,
  },
  {
    path: '/notifications',
    component: Notifications,
  },
];

export default routes;
