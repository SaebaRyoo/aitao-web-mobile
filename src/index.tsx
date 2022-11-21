import * as React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import './styles.css';

const container: HTMLElement = document.getElementById('app') as HTMLElement;
createRoot(container).render(<App />);
