import { useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, setPriority } from '../features/cartSlice';
import Button from '../components/Button';
import { createNewOrder, formatCurrency } from '../utils';
import { useNavigate } from 'react-router';

function CreateOrder() {
  const customerName = useRef(null); // Initialize with null
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isValidNumber = (number) => /^\d{11}$/.test(number);
  const [isLoading, setIsLoading] = useState(false);
  const [credentials, setCredentials] = useState({
    customer: '',
    phone: '',
    address: '',
  });

  const [errors, setErrors] = useState({
    address: '',
    customer: '',
    phone: '',
  });

  const priority = useSelector((store) => store.cart.priority);
  const cart = useSelector((store) => store.cart.cart);

  const totalCartPrice = useMemo(
    () => cart.reduce((acc, cur) => acc + cur.totalPrice, 0),
    [cart],
  );
  const priorityPrice = useMemo(
    () => (priority ? 0.2 * totalCartPrice : 0),
    [priority, totalCartPrice],
  );
  const totalPrice = totalCartPrice + priorityPrice;

  useEffect(() => {
    // Focus on customerName input when component is rendered
    if (customerName.current) {
      customerName.current.focus();
    }
  }, []); // Empty dependency array ensures it only runs once, similar to componentDidMount

  useEffect(() => {
    setErrors({
      address: '',
      customer: '',
      phone: '',
    });
  }, [credentials]);

  const handleSetCredential = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleSubmitOrder = async (e) => {
    e.preventDefault();

    const newErrors = {
      address: !credentials.address ? 'Please Input A Valid address' : '',
      customer: !credentials.customer ? 'Please Input your FullName' : '',
      phone: !isValidNumber(credentials.phone)
        ? 'Please Input your Valid Phone Number'
        : '',
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error)) {
      return;
    }

    const order = {
      customer: credentials.customer,
      phone: credentials.phone,
      address: credentials.address,
      priority,
      cart,
    };

    try {
      setIsLoading(true);
      const newOrder = await createNewOrder(order);
      navigate(`/order/${newOrder.id}`);
    } catch (error) {
      console.error('Error submitting order:', error);
      // You might want to handle this error, e.g., show a message to the user
    } finally {
      setIsLoading(false);
    }
    dispatch(clearCart());
    dispatch(setPriority(false));
  };

  return (
    <div className=" flex ">
      <div className="basis-[50%] flex items-center  py-10 bg-[#f0f1f3]">
        <div className="w-[70%] m-auto px-8 py-4  bg-[#fff] rounded-md">
          <h2 className=" font-semibold text-2xl font-pizzaMukta text-pizzaRed mb-3">
            Ready to Order, Let&apos;s go!
          </h2>
          <form
            action=""
            className="space-y-4"
            onSubmit={(e) => handleSubmitOrder(e)}
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="customer" className="font-semibold text-lg">
                Name
              </label>
              <input
                type="text"
                id="customer"
                name="customer"
                ref={customerName}
                onChange={(e) => handleSetCredential(e)}
                className={`${errors.customer ? 'border-2 border-red-600' : ''} outline-none border-2 focus:border-green-800 py-2 rounded-md px-2`}
              />
              {errors.customer && (
                <p className="text-sm text-red-600">{errors.customer}</p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="font-semibold text-lg">
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className={`${errors.phone ? 'border-2 border-red-600' : ''} outline-none border-2 focus:border-green-800 py-2 rounded-md px-2`}
                onChange={(e) => handleSetCredential(e)}
              />
              {errors.phone && (
                <p className="text-sm text-red-600">{errors.phone}</p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="address" className="font-semibold text-lg">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                onChange={(e) => handleSetCredential(e)}
                className={`${errors.address ? 'border-2 border-red-600' : ''} outline-none border-2 focus:border-green-800 py-2 rounded-md px-2`}
              />
              {errors.address && (
                <p className="text-sm text-red-600">{errors.address}</p>
              )}
            </div>

            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                id="priority"
                name="priority"
                value={priority}
                checked={priority}
                onChange={(e) => dispatch(setPriority(e.target.checked))}
                className="rounded-sm w-4 h-4 cursor-pointer accent-pizzaOrange"
              />
              <label
                htmlFor="priority"
                className="text-green-600 font-semibold"
              >
                Priority
              </label>
            </div>
            <Button
              type="primary"
              bgColor="pizzaOrange"
              hoverColor={'pizzaRed'}
            >
              {isLoading
                ? 'Placing Order...'
                : `Order Now ${formatCurrency(totalPrice)}`}
            </Button>
          </form>
        </div>
      </div>
      <div className="basis-[50%] bg-[url('manPizza.jpg')] bg-cover"></div>
    </div>
  );
}

export default CreateOrder;
