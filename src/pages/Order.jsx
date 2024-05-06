import { useParams } from 'react-router';
import { getNewOrder } from '../utils';
import { useEffect, useState } from 'react';
import OrderItem from '../components/Order/OrderItem';

function Order() {
  const [newOrder, setNewOrder] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    const getOrder = async () => {
      try {
        setIsLoading(true);
        const order = await getNewOrder(id);
        setNewOrder(order);
        // console.log(newOrder);
      } catch (error) {
        console.error('Error submitting order:', error);
      } finally {
        setIsLoading(false);
      }
    };
    getOrder();
  }, [id]);

  console.log(newOrder);
  if (isLoading) {
    return <div className="h-[75vh]">Loading...</div>;
  }
  return (
    <div>
      <div className="w-[70%] border-2 border-red-500 m-auto">
        <div className="flex justify-between">
          <h2>Order Id: #{newOrder.id}</h2>
          <div className="flex gap-4 items-center">
            {newOrder.priority && (
              <p className="bg-red-500 px-4 py-1 text-white rounded-3xl font-bold">
                PRIORITY
              </p>
            )}
            {newOrder.status === 'preparing' && (
              <p className="bg-green-500 px-4 py-1 text-white rounded-3xl font-bold">
                PREPARING
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col mt-3 gap-2">
          <p>Time Remaining: X</p>
          <p>Estimated Delivery: X</p>
        </div>
        <div className="mt-4">
          <h2 className="font-bold mb-2">ORDER LIST</h2>
          {newOrder?.cart?.map((order) => (
            <OrderItem key={order.pizzaId} {...order} />
          ))}
        </div>
        <div className="mt-4">
          <p>Price Pizza: {newOrder?.orderPrice}</p>
          <p>Priority Pizza: {newOrder?.priorityPrice}</p>
          <p>
            To pay on delivery: {newOrder?.orderPrice + newOrder?.priorityPrice}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Order;
