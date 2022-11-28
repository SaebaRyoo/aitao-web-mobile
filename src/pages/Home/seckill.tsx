import React from 'react';
import { RightOutline } from 'antd-mobile-icons';
import styles from './seckill.m.less';
import { Space } from 'antd-mobile';
import cx from 'classnames';
import img1 from '@/src/assets/imgs/img1.jpeg';

const SecKill: React.FC = () => {
  return (
    <div className={cx(styles['aitao-home-seckill-wrap'], 'pd-lr-12')}>
      <Space
        block
        wrap
        align="center"
        justify="between"
        className={styles['aitao-home-seckill-header']}
      >
        <span>限时秒杀 8点场 07:13:55</span>
        <RightOutline />
      </Space>
      <Space className={styles['aitao-home-seckill-content']}>
        <div className={styles['aitao-home-seckill-content-cell']}>
          <img src={img1} />
          <span>name</span>
          <span>￥6299</span>
        </div>
        <div className={styles['aitao-home-seckill-content-cell']}>
          <img src={img1} />
          <span>name</span>
          <span>￥6299</span>
        </div>
        <div className={styles['aitao-home-seckill-content-cell']}>
          <img src={img1} />
          <span>name</span>
          <span>￥6299</span>
        </div>
      </Space>
    </div>
  );
};

export default SecKill;
