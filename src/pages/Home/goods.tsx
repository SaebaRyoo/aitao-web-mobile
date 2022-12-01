import React from 'react';
import { goodsList } from '@/src/service/goods';
import styles from './goods.m.less';
import Waterfall from '@/src/components/waterfall';
import fakeData from '@/src/components/waterfall/data';
import WaterfallItem from '@/src/components/waterfall/WaterfallItem';
import cx from 'classnames';

type GoodsProps = {
  data: string[];
};

const Goods: React.FC<GoodsProps> = ({ data }) => {
  return (
    <div className={cx(styles['aitao-home-goods-wrap'], 'pd-lr-12')}>
      <Waterfall
        data={fakeData}
        renderItem={(item, index) => <WaterfallItem key={index} data={item} />}
      />
    </div>
  );
};

export default Goods;
