import { useSelector } from 'react-redux';
import CartItem from '../components/Cart/cartItem';

function CartPage() {
  const cart = useSelector((store) => store.cart.cart);
  return (
    <div className="flex w-[90%] m-auto">
      <div className="basis-[60%] pt-6 px-12 pb-6 border-2 border-purple-800">
        <div className="flex justify-between border-green-600 border-2 py-6">
          <h2 className="">Shopping Cart</h2>
          <p className="justify-self-end text-right">3 Items</p>
        </div>
        <div className="flex border-red-600 border-2 pt-6">
          <p className="basis-[40%]">Pizza details</p>
          <p className="basis-[20%] pl-3 m-auto">Quantity</p>
          <p className="basis-[20%] text-center">Price</p>
          <p className="basis-[20%] text-right">Total</p>
        </div>
        <div className="flex flex-col gap-8">
          {cart.map((pizza) => (
            <CartItem key={pizza.pizzaId} {...pizza} />
          ))}
        </div>
      </div>
      <div className="basis-[40%] pt-6 px-8 bg-[#f1f1f5]">
        <h2 className="py-6 border-2 border-yellow-500">Order Summary</h2>
        <div className="flex justify-between border-2 border-red-950 pt-6">
          <p>ITEMS 3</p>
          <p>$56</p>
        </div>
        <div className="flex gap-4 mt-8 items-center">
          <input
            type="checkbox"
            className="rounded-sm w-4 h-4 cursor-pointer accent-pizzaOrange"
          />
          <p>Place Priority</p>
        </div>
        <div className="flex flex-col gap-4 mt-6 border-2 border-blue-500 pb-8">
          <label htmlFor="promo">Promo Code</label>
          <input
            type="text"
            id="promo"
            name="promo"
            placeholder="Enter your promo code"
            className=" px-2 py-3 rounded-md outline-none border-2 border-pizzaOrange bg-white"
          />
          <button className="text-center border-2 w-24 py-1 border-red-600 bg-pizzaRed text-white">
            Apply
          </button>
        </div>
        <div className="flex justify-between py-4">
          <h2>Total Cost</h2>
          <p>$543</p>
        </div>
        <button className="bg-pizzaRed w-[100%] py-2 text-white rounded-md">
          Place Order
        </button>
      </div>
    </div>
  );
}

export default CartPage;
