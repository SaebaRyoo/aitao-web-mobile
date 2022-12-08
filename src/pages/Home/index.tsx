import React, { useState } from 'react';
import { goodsList } from '@/src/service/goods/goods';
import styles from './index.module.less';
import Goods from './goods';
import Channel from './channel';
import SecKill from './seckill';
import { InfiniteScroll, PullToRefresh } from 'antd-mobile';
import { PullStatus } from 'antd-mobile/es/components/pull-to-refresh';
import fakeData from '@/src/components/waterfall/data';
import { SingleEntryPlugin } from 'webpack';
import { sleep } from '@/src/utils/sleep';

const statusRecord: Record<PullStatus, string> = {
  pulling: '用力拉',
  canRelease: '松开吧',
  refreshing: '玩命加载中...',
  complete: '好啦',
};

const Home: React.FC = () => {
  const [data, setData] = useState(fakeData.slice(0, 20));
  const [hasMore, setHasMore] = useState(true);

  // 下拉刷新
  const handlePullDown = async () => {
    console.log('handlePullDown');
  };

  // 加载更多
  async function loadMore() {
    await sleep(1000);
    const append = await Promise.resolve(fakeData.slice(20, 30));
    setData((val: any) => [...val, ...append]);
    // setHasMore(append.length > 0);

    setHasMore(false);
  }

  return (
    <div className={styles['aitao-home-scroll-wrap']}>
      <PullToRefresh
        onRefresh={handlePullDown}
        renderText={(status) => {
          return <div>{statusRecord[status]}</div>;
        }}
      >
        <Channel />
        <SecKill />
        <Goods data={data} />
        <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
      </PullToRefresh>
    </div>
  );
};

export default Home;
