import * as React from 'react';
import Root from './pages/root';
import store from './core/store';
import { Provider } from 'react-redux';
import Layout from '@/src/components/layout';

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Root />
      </Provider>
    </React.StrictMode>
  );
};

export default App;
