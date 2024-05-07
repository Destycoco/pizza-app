import { useParams } from 'react-router';
import {
  formatCurrency,
  // formatDate,
  getNewOrder,
  getTimeRemaining,
} from '../utils';
import { useEffect, useState } from 'react';
import OrderItem from '../components/Order/OrderItem';
const formatDate = (date) => {
  return new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  }).format(date);
};
function Order() {
  const [newOrder, setNewOrder] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  // const [date, setDate] = useState('');

  // useEffect(() => {
  //   const showDate = () => {
  //     const date = formatDate(new Date());
  //     console.log(newOrder?.estimatedDelivery);
  //     return date;
  //   };
  //   setDate(showDate());
  // }, []);
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
  const { estimatedDelivery } = newOrder;
  if (isLoading) {
    return <div className="h-[75vh]">Loading...</div>;
  }
  return (
    <div className="bg-[#f0f1f3] min-h-[70vh] py-10">
      <div className="w-[40%] m-auto bg-[#fff] shadow-md min-h-[100%] px-10 py-8 rounded-md">
        <h2 className="font-bold mb-4 text-xl">ORDER DETAILS</h2>
        <div className="flex justify-between bg-[#dee2e6] py-4 px-3">
          <h2>
            Order Id: <span className="font-bold">#{newOrder.id}</span>
          </h2>
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
        <div className="flex flex-col mt-3 gap-2 bg-red-200 px-2 py-2">
          <p>
            Time Remaining:{' '}
            {getTimeRemaining(newOrder.estimatedDelivery).toFixed(0)} mins
          </p>
          <p>
            Estimated Delivery:{' '}
            {estimatedDelivery ? formatDate(new Date(estimatedDelivery)) : ''}{' '}
          </p>
        </div>
        <div className="mt-4">
          <h2 className="font-bold mb-2">ORDER LIST</h2>
          <div className="bg-[#e9ecef] divide-y divide-[#6c757d]">
            {newOrder?.cart?.map((order) => (
              <OrderItem key={order.pizzaId} {...order} />
            ))}
          </div>
        </div>
        <div className="my-4 flex flex-col gap-2 px-2 py-2 bg-red-200">
          <div className="flex justify-between">
            <p>Price Pizza: </p>
            <p>{formatCurrency(newOrder?.orderPrice)}</p>
          </div>
          <div className="flex justify-between">
            <p>Priority Pizza:</p>
            <p>{formatCurrency(newOrder?.priorityPrice)}</p>
          </div>
        </div>
        <div className="flex justify-between bg-green-500 px-2 py-3 mt-2 text-white font-bold">
          <p className="">To pay on delivery: </p>
          <p>
            {formatCurrency(newOrder?.orderPrice + newOrder?.priorityPrice)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Order;
