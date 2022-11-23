import React from 'react';
import { Badge, TabBar } from 'antd-mobile';

import {
  AppOutline,
  MessageOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons';

const BottomBar = () => {
  const tabs = [
    {
      key: 'home',
      title: '首页',
      icon: <AppOutline />,
      badge: Badge.dot,
    },
    {
      key: 'todo',
      title: '分类',
      icon: <UnorderedListOutline />,
      badge: '5',
    },
    {
      key: 'message',
      title: '购物车',
      icon: (active: boolean) =>
        active ? <MessageFill /> : <MessageOutline />,
      badge: '99+',
    },
    {
      key: 'personalCenter',
      title: '我的',
      icon: <UserOutline />,
    },
  ];

  return (
    <TabBar>
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
