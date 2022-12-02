import React, { ReactElement, useEffect, useState } from 'react';
import styles from './index.m.less';
import { WaterFallItemProps } from './WaterfallItem';

type dataType = {
  data: {
    [key: string]: any;
  };
};
interface WaterfallProps {
  data: dataType[];
  renderItem: (item: dataType, index?: number) => ReactElement;
}

const Waterfall: React.FC<WaterfallProps> = ({
  data,
  renderItem,
}): ReactElement => {
  const [column1, setColumn1] = useState<dataType[]>([]);
  const [column2, setColumn2] = useState<dataType[]>([]);

  const separateData = (data: dataType[]) => {
    let i = 0;
    const column1 = [],
      column2 = [];
    while (i < data.length) {
      column1.push(data[i++]);
      if (i < data.length) {
        column2.push(data[i++]);
      }
    }
    setColumn1(column1);
    setColumn2(column2);
  };

  useEffect(() => {
    separateData(data);
  }, [data.length]);

  return (
    <div className={styles['aitao-component-waterfall-wrap']}>
      <div className={styles['aitao-component-waterfall-column']}>
        {column1.map((item, index) => renderItem(item, index))}
      </div>
      <div className={styles['aitao-component-waterfall-column']}>
        {column2.map((item, index) => renderItem(item, index))}
      </div>
    </div>
  );
};

export default Waterfall;
