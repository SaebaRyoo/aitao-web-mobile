import React from 'react';
import { Badge, TabBar } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';
import styles from './index.m.less';

const BottomBar = () => {
  const navigate = useNavigate();
  const pathname = window.location.pathname;

  const tabs = [
    {
      key: '/',
      title: '首页',
      icon: <i className="iconfont icon-home icon-size" />,
      badge: Badge.dot,
    },
    {
      key: '/classify',
      title: '分类',
      icon: <i className="iconfont icon-fenleiclassify icon-size" />,
    },
    {
      key: '/shopping-cart',
      title: '购物车',
      icon: <i className="iconfont icon-publishgoods_fill icon-size" />,
      badge: '99+',
    },
    {
      key: '/mine',
      title: '我的',
      icon: <i className="iconfont icon-mine2 icon-size" />,
    },
  ];

  return (
    <TabBar
      activeKey={pathname}
      className={styles['aitao-component-bottombar-wrap']}
      onChange={(key: string) => {
        navigate(key);
      }}
    >
      {tabs.map((item) => (
        <TabBar.Item
          key={item.key}
          icon={item.icon}
          title={item.title}
          badge={item.badge}
        />
      ))}
    </TabBar>
  );
};

export default BottomBar;
