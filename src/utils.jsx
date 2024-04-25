import axios from 'axios';
import { useCallback, useState } from 'react';

const URL = 'https://react-fast-pizza-api.onrender.com/api';

export const useGetPizza = () => {
  const [menu, setMenu] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const getPizzaMenu = useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(`${URL}/menu`);
      const data = await res.data;
      console.log(data);
      setMenu(data);
      setIsLoading(false);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { menu, error, isLoading, getPizzaMenu };
};
