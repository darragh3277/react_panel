import React from 'react';
import { Home, HelpCircle } from 'react-feather';

export const sidebarLinks = [
    {
        label: "Dashboard",
        icon: <Home className="icon mr-1" />,
        path: "/"
    },
    {
        label: "About",
        icon: <HelpCircle className="icon mr-1" />,
        path: "/about"
    },
]