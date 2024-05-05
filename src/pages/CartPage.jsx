import { useSelector, useDispatch } from 'react-redux';
import { BiArrowBack } from 'react-icons/bi';
import { useNavigate } from 'react-router';
import { formatCurrency } from '../utils';
import { setPriority } from '../features/cartSlice';
import { useEffect, useState, useMemo } from 'react';
import CartItem from '../components/Cart/cartItem';
const promoCodes = ['Destiny500', 'Pizza500', 'Order500'];

function CartPage() {
  const [promoCode, setPromoCode] = useState('');
  const [promoCodeError, setPromoCodeError] = useState('');
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart.cart);
  const priority = useSelector((store) => store.cart.priority);

  const totalCartPrice = useMemo(
    () => cart.reduce((acc, cur) => acc + cur.totalPrice, 0),
    [cart],
  );

  const priorityPrice = useMemo(
    () => (priority ? 0.2 * totalCartPrice : 0),
    [priority, totalCartPrice],
  );

  const amount = totalCartPrice + priorityPrice;
  const [totalPrice, setTotalPrice] = useState(amount);

  useEffect(() => {
    setTotalPrice(totalCartPrice + priorityPrice);
  }, [totalCartPrice, priorityPrice]);

  const cartLength = cart.length;
  const navigate = useNavigate();

  const handleApplyCode = () => {
    const codeValid = promoCodes.includes(promoCode);
    if (codeValid) {
      setTotalPrice((totalPrice) => totalPrice * 0.7);
      setPromoCodeError('');
      setPromoCode('');
    } else {
      setPromoCodeError('The code you used does not exist');
    }
  };

  return (
    <div className="flex w-[90%] m-auto">
      {/* Left Section */}
      <div className="basis-[60%] pt-6 px-12 pb-6 ">
        {/* Cart Items */}
        {cartLength > 0 ? (
          <>
            {/* Cart Item Header */}
            <div className="flex justify-between border-b-slate-400 border-b-2 py-6">
              <h2 className="font-bold text-2xl">Shopping Cart</h2>
              <p className="justify-self-end text-right font-semibold text-xl">
                {cartLength ? `${cartLength} Items` : ''}
              </p>
            </div>

            {/* Cart Items List */}
            <div className="flex pt-6 pb-4">
              <p className="basis-[40%] font-semibold">Pizza details</p>
              <p className="basis-[20%] pl-3 m-auto font-semibold">Quantity</p>
              <p className="basis-[20%] text-center font-semibold">Price</p>
              <p className="basis-[20%] text-right font-semibold">Total</p>
            </div>
            <div className="flex flex-col gap-8 mb-4 h-[500px] overflow-y-auto">
              {cart.map((pizza) => (
                <CartItem key={pizza.pizzaId} {...pizza} />
              ))}
            </div>
            <div className="flex items-center gap-1 text-green-600 cursor-pointer hover:text-green-800  w-[35%]">
              <div>
                <BiArrowBack className="" />
              </div>
              <button
                className="flex items-center font-semibold"
                onClick={() => navigate('/menu')}
              >
                Continue Shopping
              </button>
            </div>
          </>
        ) : (
          <div>
            <h1>
              Your Cart Is Currently Empty, Go Back To The Menu To Start
              Shopping
            </h1>
          </div>
        )}
      </div>

      {/* Right Section */}
      <div className="basis-[40%] pt-6 px-8 bg-[#f1f1f5]">
        <h2 className="py-6 border-b-slate-400 border-b-2 font-bold text-2xl ">
          Order Summary
        </h2>

        {/* Total Items */}
        <div className="flex justify-between pt-6 font-bold">
          <p>ITEMS {cartLength}</p>
          <p>{formatCurrency(totalCartPrice)}</p>
        </div>

        {/* Priority Checkbox */}
        <div className="mt-8 ">
          <div className="flex gap-4 items-center">
            <input
              type="checkbox"
              checked={priority}
              onChange={(e) => dispatch(setPriority(e.target.checked))}
              id="priority"
              name="priority"
              className="rounded-sm w-4 h-4 cursor-pointer accent-pizzaOrange"
            />
            <p className="font-bold text-green-600">Place Priority</p>
          </div>
          <p className="text-sm">
            N/B: A 20% service fee will be added to your total amount
          </p>
        </div>

        {/* Promo Code */}
        <div className="flex flex-col gap-2 mt-6 pb-8">
          <div className="flex justify-between">
            <label htmlFor="promo" className="font-bold">
              PROMO CODE
            </label>
            <p className="text-sm">eg:(Order500, Destiny500)</p>
          </div>

          <input
            type="text"
            id="promo"
            name="promo"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            placeholder="Enter your promo code"
            className="px-2 py-3 rounded-md outline-none border-2 border-pizzaOrange bg-white"
          />
          {promoCodeError && (
            <p className="text-red-600 text-sm">{promoCodeError}</p>
          )}
          <button
            className="text-center border-2 w-24 py-1 bg-pizzaRed text-white"
            onClick={handleApplyCode}
          >
            Apply
          </button>
        </div>

        {/* Total Cost */}
        <div className="flex justify-between py-4 font-bold">
          <h2>Total Cost</h2>
          <p>{formatCurrency(totalPrice)}</p>
        </div>

        {/* Place Order Button */}
        <button
          className="bg-pizzaRed w-[100%] py-2 text-white rounded-md mb-8"
          onClick={() => navigate('/create')}
        >
          Place Order
        </button>
      </div>
    </div>
  );
}

export default CartPage;
