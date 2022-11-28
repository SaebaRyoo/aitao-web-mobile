import React, { useEffect, useState } from 'react';
import { goodsList } from '@/src/service/goods';
import styles from './index.module.less';
import Scroll from '@/src/components/scroll';
import Goods from './goods';
import Channel from './channel';
import SecKill from './seckill';

function getNextData() {
  const ret: string[] = [];
  for (let i = 0; i < 18; i++) {
    ret.push(
      ['张三', '李四', '王五', '小明', '小红'][Math.floor(Math.random() * 5)]
    );
  }
  return ret;
}

const Home: React.FC = () => {
  const [data, setData] = useState(() => getNextData());

  // 下拉刷新
  const handlePullDown = () => {
    console.log('handlePullDown');
  };

  // 上拉加载
  const handlePullUp = () => {
    console.log('handlePullUp');
    setData((old) => old.concat(getNextData()));
  };

  return (
    <div>
      <Scroll
        onPullup={handlePullUp}
        onPulldown={handlePullDown}
        wrapClassName={styles['aitao-home-scroll-wrap']}
      >
        <>
          <Channel />
          <SecKill />
          <Goods data={data} />
        </>
      </Scroll>
    </div>
  );
};

export default Home;
