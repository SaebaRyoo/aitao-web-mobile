import React from 'react';
import { Badge, TabBar } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';

const BottomBar = () => {
  const navigate = useNavigate();
  const pathname = window.location.pathname;

  const tabs = [
    {
      key: '/',
      title: '首页',
      icon: <i className="iconfont icon-home icon-fz" />,
      badge: Badge.dot,
    },
    {
      key: '/classify',
      title: '分类',
      icon: <i className="iconfont icon-fenleiclassify icon-fz" />,
    },
    {
      key: '/shopping-cart',
      title: '购物车',
      icon: <i className="iconfont icon-publishgoods_fill icon-fz" />,
      badge: '99+',
    },
    {
      key: '/mine',
      title: '我的',
      icon: <i className="iconfont icon-mine2 icon-fz" />,
    },
  ];

  return (
    <TabBar
      activeKey={pathname}
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
