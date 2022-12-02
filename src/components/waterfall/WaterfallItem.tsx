import React, { ReactElement, useState } from 'react';
import styles from './index.m.less';
import { Image } from 'antd-mobile';

export interface WaterFallItemProps {
  data: {
    [key: string]: any;
  };
}

const WaterFallItem: React.FC<WaterFallItemProps> = ({
  data,
}): ReactElement => {
  return (
    <div key={data.key} className={styles['aitao-component-waterfall-card']}>
      <Image
        className={styles['aitao-component-waterfall-card-img']}
        src={data.img}
        lazy={true}
      />
      <div className={styles['aitao-component-waterfall-card-info']}>
        <p className={styles['aitao-component-waterfall-card-text-title']}>
          Product title
        </p>
        <p className={styles['aitao-component-waterfall-card-body']}>
          Product description and details
        </p>
      </div>
      <div className={styles['aitao-component-waterfall-card-footer']}>
        <span className={styles['aitao-component-waterfall-card-text-title']}>
          $499.49
        </span>
        <div className={styles['aitao-component-waterfall-card-btn']}>
          <i className="iconfont icon-publishgoods_fill icon-size" />
        </div>
      </div>
    </div>
  );
};

export default WaterFallItem;
