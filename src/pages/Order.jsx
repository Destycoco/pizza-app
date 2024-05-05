import { useParams } from 'react-router';
import { getNewOrder } from '../utils';
import { useEffect, useState } from 'react';

function Order() {
  const [newOrder, setNewOrder] = useState('');
  const { id } = useParams();
  useEffect(() => {
    const getOrder = async () => {
      try {
        const order = await getNewOrder(id);
        setNewOrder(order);
        console.log(newOrder);
      } catch (error) {
        console.error('Error submitting order:', error);
      }
    };
    getOrder();
  }, [id]);

  console.log(newOrder);
  return <div>Order {newOrder.id}</div>;
}

export default Order;
