import React, { ReactElement } from 'react';
import HeaderBar from '../headerbar';
import BottomBar from '../bottombar';
import styles from './index.module.less';
import routes, { RouteType } from '@/src/core/routes';

type LayoutProps = {
  children: ReactElement;
};

function findRoute(
  routes: RouteType[],
  pathname: string
): RouteType | undefined {
  let route: RouteType | undefined;
  function dfs(routes: RouteType[]) {
    if (!routes || routes.length < 1) {
      console.log('没有数据了，推到上一个执行栈:');
      return;
    }
    for (let i = 0; i < routes.length; i++) {
      const item: RouteType = routes[i];

      if (item.path === pathname) {
        route = item;
      }

      dfs(item.children || []);
    }
  }

  dfs(routes);

  return route;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = window.location.pathname;

  const route: RouteType | undefined = findRoute(routes, pathname);

  const header = route?.header;
  const bottom = route?.bottom;

  return (
    <div className={styles['aitao-layout']}>
      {header && (
        <div className={styles['aitao-layout-header']}>
          <HeaderBar />
        </div>
      )}
      <div className={styles['aitao-layout-content']}>{children}</div>
      {bottom && (
        <div className={styles['aitao-layout-bottom']}>
          <BottomBar />
        </div>
      )}
    </div>
  );
};

export default Layout;
