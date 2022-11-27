import React, { ReactElement, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Space, SpinLoading } from 'antd-mobile';

import routes, { RouteType } from '@/src/core/routes';
import Layout from '@/src/components/layout';

const Loading: React.FC = () => (
  <Space
    direction="horizontal"
    wrap
    block
    style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      marginTop: '64px',
    }}
  >
    <SpinLoading color="primary" style={{ '--size': '48px' }} />
  </Space>
);

// 创建一个有字节点的Route
const CreateHasChildrenRoute = (route: RouteType) => {
  return (
    <Route key={route.path} path={route.path}>
      <Route
        index
        element={
          <Suspense fallback={<Loading />}>
            <Layout>
              <route.component />
            </Layout>
          </Suspense>
        }
      />
      {RouteCreator(route.children ? route.children : [])}
    </Route>
  );
};

// 创建一个没有子节点的Route
const CreateNoChildrenRoute = (route: RouteType) => {
  return (
    <Route
      key={route.path}
      path={route.path}
      element={
        <Suspense fallback={<Loading />}>
          <Layout>
            <route.component />
          </Layout>
        </Suspense>
      }
    />
  );
};

const RouteCreator = (routes: RouteType[]) => {
  return routes?.map((route: RouteType) => {
    let element: ReactElement | null = null;
    if (route.children && !!route.children.length) {
      element = CreateHasChildrenRoute(route);
    } else {
      element = CreateNoChildrenRoute(route);
    }
    return element;
  });
};

const Root: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>{RouteCreator(routes)}</Routes>

      {/* <Routes>
        <Route path="/mine">
          <Route index element={<Mine />} />
          <Route path="/mine/bus" element={<Bus />} />
          <Route path="/mine/cart" element={<Cart />} />
        </Route>
      </Routes> */}
    </BrowserRouter>
  );
};

export default Root;
