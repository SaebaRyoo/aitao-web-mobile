import React, { ReactElement, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes, { RouteType } from '@/src/core/routes';

const Loading: React.FC = () => <div>loading.....</div>;

// 创建一个有字节点的Route
const CreateHasChildrenRoute = (route: RouteType) => {
  return (
    <Route key={route.path} path={route.path}>
      <Route
        index
        element={
          <Suspense fallback={<Loading />}>
            <route.component />
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
          <route.component />
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
