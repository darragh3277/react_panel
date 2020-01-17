import Dashboard from "./components/main/pages/dashboard_page/Dashboard"
import About from "./components/main/pages/about_page/About"
import Account from "./components/main/pages/account_page/Account"
import Messages from "./components/main/pages/messages_page/Messages"
import Notifications from "./components/main/pages/notifications_page/Notifications"

export const routes = [
    {
      path: "/",
      component: Dashboard
    },
    {
      path: "/about",
      component: About
    },
    {
      path: "/account",
      component: Account
    },
    {
      path: "/messages",
      component: Messages
    },
    {
      path: "/notifications",
      component: Notifications
    },
]