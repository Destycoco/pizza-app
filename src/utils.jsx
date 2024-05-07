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

export const createNewOrder = async (newOrder) => {
  try {
    const res = await axios.post(`${URL}/order`, newOrder);
    return res.data.data;
  } catch (error) {
    console.error('Error creating new order:', error);
    throw error; // Re-throw error for caller to handle
  }
};
export const getNewOrder = async (id) => {
  try {
    const res = await axios.get(`${URL}/order/${id}`);
    return res.data.data;
  } catch (error) {
    console.error('Error creating new order:', error);
    throw error;
  }
};
export const formatCurrency = (cur) => {
  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD',
  }).format(cur);
};
export const getTimeRemaining = (deliveryDate) => {
  const deliveryMinutes = new Date(deliveryDate).getTime() / 60000;
  const currentMinutes = new Date().getTime() / 60000;
  const timeRemaining = deliveryMinutes - currentMinutes;
  return timeRemaining;
};
export const formatDate = (date) => {
  return new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  }).format(date);
};
