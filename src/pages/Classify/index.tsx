import React, { useEffect, useState } from 'react';
import { SideBar } from 'antd-mobile';
import styles from './index.m.less';
import { findAll } from '@/src/service/goods/category';

const findByParentId = (data: API.Category[], pid: number) => {
  return data.filter((item) => item.parentId === pid);
};

const Classify: React.FC = () => {
  const [activeKey, setActiveKey] = useState<string>();
  const [categoryList, setCategory] = useState<API.Category[]>([]);
  const [level1Data, setLevel1] = useState<API.Category[]>([]);
  const [level2Data, setLevel2] = useState<API.Category[]>([]);

  const fetchClassify = async () => {
    const data = await findAll();
    const level1Data = findByParentId(data, 0);
    setCategory(data);
    setLevel1(level1Data);
  };

  useEffect(() => {
    fetchClassify();
  }, []);

  const toggleLevel1Classify = (pid: string) => {
    setActiveKey(pid);
    const level2Data = findByParentId(categoryList, parseInt(pid));
    setLevel2(level2Data);
  };

  return (
    <div className={styles.container}>
      <div className={styles.side}>
        <SideBar activeKey={activeKey} onChange={toggleLevel1Classify}>
          {level1Data.map((item) => (
            <SideBar.Item key={item.id} title={item.name} />
          ))}
        </SideBar>
      </div>
      <div className={styles.content}>
        {level2Data.map((item) => (
          <div key={item.id} className={styles.block}>
            <div className={styles.title}>{item.name}</div>
            <div className={styles.main}>
              {findByParentId(categoryList, item.id).map((d) => (
                <div key={d.id}>{d.name}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classify;
