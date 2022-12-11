import { useState, useEffect } from 'react';

const useLoading = (fn: () => Promise<any>, deps: any[]) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const request = () => {
    setLoading(true);
    fn()
      .then(setData)
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    request();
  }, deps);

  return { data, loading };
};

export default useLoading;
