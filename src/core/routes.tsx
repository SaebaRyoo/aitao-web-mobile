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

const Search = () => <div>test</div>;

const routes: RouteType[] = [
  {
    path: '/',
    header: {
      left: '',
      middle: <Search />,
      right: 'chat',
    },
    bottom: true,
    component: React.lazy(() => import('@/src/pages/Home/index')),
  },
  {
    path: '/classify',
    header: {
      middle: '分类',
    },
    bottom: true,
    component: React.lazy(() => import('@/src/pages/Classify')),
  },
  {
    path: '/shopping-cart',
    header: {
      middle: '购物车',
    },
    bottom: true,
    component: React.lazy(() => import('@/src/pages/ShoppingCart')),
  },
  {
    path: '/mine',
    header: {
      left: '',
      middle: '我的',
      right: 'chat',
    },
    bottom: true,
    component: React.lazy(() => import('@/src/pages/Mine/index')),
    children: [
      {
        path: '/mine/bus',
        header: {
          middle: '汽车',
        },
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
