import Dashboard from "./components/main/dashboard/Dashboard"
import About from "./components/main/about/About"
import Account from "./components/main/account/Account"
import Messages from "./components/main/messages/Messages"
import Notifications from "./components/main/notifications/Notifications"

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