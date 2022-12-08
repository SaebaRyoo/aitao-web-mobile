import * as React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import './styles.less';
import '@/src/assets/fonts/iconfont';
import './assets/fonts/iconfont.css';
// import VConsole from 'vconsole';

// // or init with options
// new VConsole({ theme: 'dark' });
const container: HTMLElement = document.getElementById('app') as HTMLElement;
createRoot(container).render(<App />);
