const isDev =
  process.env.REACT_APP_ENV === 'dev' || process.env.REACT_APP_ENV === 'test';

export default isDev;
