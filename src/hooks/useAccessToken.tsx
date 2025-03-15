import { useState, useEffect } from 'react';

const useAccessToken = () => {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      setAccessToken(token);
    }
  }, []);

  const saveAccessToken = (token: string) => {
    localStorage.setItem('accessToken', token);
    setAccessToken(token);
  };

  const clearAccessToken = () => {
    localStorage.removeItem('accessToken');
    setAccessToken(null);
  };

  return {
    accessToken,
    saveAccessToken,
    clearAccessToken,
  };
};

export default useAccessToken;