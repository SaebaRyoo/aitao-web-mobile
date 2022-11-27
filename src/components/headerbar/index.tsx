import React, { ReactElement } from 'react';
import { NavBar } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.less';

type HeaderBarProps = {
  header?: {
    [key: string]: string | ReactElement;
  };
};

const HeaderBar: React.FC<HeaderBarProps> = ({ header }) => {
  const navigate = useNavigate();
  return (
    <NavBar
      className={styles['aitao-headerbar-wrap']}
      onBack={() => navigate(-1)}
    >
      {header?.middle}
    </NavBar>
  );
};

export default HeaderBar;
