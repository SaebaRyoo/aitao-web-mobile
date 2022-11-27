import React, { useEffect, useState } from 'react';
import { goodsList } from '@/src/service/goods';
import { List } from 'antd-mobile';
import styles from './index.module.less';
import Scroll from '@/src/components/scroll';

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
        <List>
          {data.map((item, index) => (
            <List.Item key={index}>{item}</List.Item>
          ))}
        </List>
      </Scroll>
    </div>
  );
};

export default Home;
