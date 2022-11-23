import React, { ReactElement } from 'react';
import { NavBar } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';

type HeaderBarProps = {
  header?: {
    [key: string]: string | ReactElement;
  };
};

const HeaderBar: React.FC<HeaderBarProps> = ({ header }) => {
  const navigate = useNavigate();
  return <NavBar onBack={() => navigate(-1)}>{header?.middle}</NavBar>;
};

export default HeaderBar;
