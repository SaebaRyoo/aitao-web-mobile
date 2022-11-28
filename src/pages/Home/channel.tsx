import React, { ReactElement } from 'react';
import { Space } from 'antd-mobile';
import styles from './channel.m.less';
import { useNavigate } from 'react-router-dom';

type channelTypes = {
  name: string;
  icon: ReactElement;
  path: string;
};
const channels: channelTypes[] = [
  {
    name: '今日爆款',
    icon: <i className="iconfont icon-home icon-size" />,
    path: '/',
  },
  {
    name: '美味零食',
    icon: <i className="iconfont icon-home icon-size" />,
    path: '/',
  },
  {
    name: '个护美妆',
    icon: <i className="iconfont icon-home icon-size" />,
    path: '/',
  },
  {
    name: '素食生鲜',
    icon: <i className="iconfont icon-home icon-size" />,
    path: '/mine',
  },
];

const Channel: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Space
      className={styles['aitao-home-channel-wrap']}
      block
      wrap
      align="center"
      justify="around"
    >
      {channels.map((channel, index) => (
        <Space
          className={styles['aitao-home-channel-cell']}
          key={index}
          block
          wrap
          direction="vertical"
          align="center"
          justify="center"
          onClick={() => navigate(channel.path)}
        >
          {channel.icon}
          <span>{channel.name}</span>
        </Space>
      ))}
    </Space>
  );
};

export default Channel;
