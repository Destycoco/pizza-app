/* eslint-disable react/prop-types */
import Button from './Button';

function PizzaLeft({ header, title, text, image }) {
  return (
    <div className="flex border-2 gap-4 items-center text-center border-red-700">
      <div className="basis-[50%] space-y-2">
        <h1 className="font-normal text-pizzaOrange font-pizzaLarge2 text-6xl">
          {header}
        </h1>
        <h3 className="font-bold text-white font-pizzaText text-xl tracking-widest">
          {title}
        </h3>
        <p className="text-white w-[70%] text-xs font-normal m-auto">{text}</p>
        <Button>Order Now</Button>
      </div>
      <div className="basis-[50%] ">
        <img
          src={image}
          alt="pizza-image"
          className="w-[80%] h-[25rem] border-green-700 border-2 aspect-[1]"
        />
      </div>
    </div>
  );
}

export default PizzaLeft;
