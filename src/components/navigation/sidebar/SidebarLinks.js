import React from 'react';
import { Home, HelpCircle, User, Bell, Mail } from 'react-feather';

export const mainContentLinks = [
  {
    label: 'Dashboard',
    icon: <Home className="icon mr-1" />,
    path: '/',
  },
  {
    label: 'About',
    icon: <HelpCircle className="icon mr-1" />,
    path: '/about',
  },
];

export const subContentLinks = [
  {
    label: 'Account',
    icon: <User className="icon mr-1" />,
    path: '/account',
  },
  {
    label: 'Messages',
    icon: <Mail className="icon mr-1" />,
    path: '/messages',
  },
  {
    label: 'Notifications',
    icon: <Bell className="icon mr-1" />,
    path: '/notifications',
  },
];
