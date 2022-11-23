import React, { LazyExoticComponent, ReactElement } from 'react';

export type RouteType = {
  path: string;
  header?: {
    [key: string]: string | ReactElement;
  };
  headerName?: string;
  bottom?: boolean;
  component: LazyExoticComponent<React.FC>;
  children?: RouteType[];
};

const routes: RouteType[] = [
  {
    path: '/',
    header: {
      left: '',
      middle: 'search',
      right: 'chat',
    },
    bottom: true,
    component: React.lazy(() => import('@/src/pages/Home/index')),
  },
  {
    path: '/mine',
    header: {
      left: '',
      middle: 'search',
      right: 'chat',
    },
    bottom: true,
    component: React.lazy(() => import('@/src/pages/Mine/index')),
    children: [
      {
        path: '/mine/bus',
        component: React.lazy(() => import('@/src/pages/Mine/Bus/index')),
      },
      {
        path: '/mine/cart',
        component: React.lazy(() => import('@/src/pages/Mine/Cart/index')),
      },
    ],
  },
];

export default routes;
