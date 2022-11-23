import * as React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import './styles.less';
import '@/src/assets/fonts/iconfont';
import './assets/fonts/iconfont.css';

const container: HTMLElement = document.getElementById('app') as HTMLElement;
createRoot(container).render(<App />);
