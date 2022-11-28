import React from 'react';
import { goodsList } from '@/src/service/goods';
import { List } from 'antd-mobile';
import styles from './goods.m.less';

type GoodsProps = {
  data: string[];
};

const Goods: React.FC<GoodsProps> = ({ data }) => {
  return (
    <div className={styles['aitao-home-goods-wrap']}>
      <List>
        {data.map((item, index) => (
          <List.Item key={index}>{item}</List.Item>
        ))}
      </List>
    </div>
  );
};

export default Goods;
