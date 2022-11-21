import Header from '@/src/components/header';
import { sum } from '@/src/utils/sum';
import React from 'react';
import { goodsList } from '@/src/service/goods';
import house from '@/src/assets/imgs/house.jpeg';
import img1 from '@/src/assets/imgs/img1.jpeg';
import styles from './index.module.less';

const Home: React.FC = () => {
  const handleClick = async () => {
    const data = await goodsList({ current: 1, pageSize: 10 });
    console.log(data);
  };
  return (
    <div>
      Home
      <Header title="header" />
      <div>Hello william 1 + 2 = {sum(1, 2)}</div>
      <img className={styles.img} src={house} alt="" />
      <img src={img1} alt="" />
      <button onClick={handleClick}>请求数据</button>
      <i className="iconfont icon-goods" style={{ color: '#ff0000' }}></i>
    </div>
  );
};

export default Home;
