/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router';
import Button from '../Button';

function PizzaPair({ header, title, text, image }) {
  const navigate = useNavigate();
  return (
    <div className="flex gap-4 items-center text-center">
      <div className="basis-[50%] space-y-3">
        <h1 className="font-normal text-pizzaOrange font-pizzaLarge2 text-6xl">
          {header}
        </h1>
        <h3 className="font-bold text-white font-pizzaText text-xl tracking-widest">
          {title}
        </h3>
        <p className="text-white w-[70%] text-xs font-normal m-auto">{text}</p>
        <Button
          type="primary"
          hoverColor={'pizzaOrange'}
          onClick={() => navigate('/menu')}
        >
          Order Now
        </Button>
      </div>
      <div className="basis-[50%] ">
        <img
          src={image}
          alt="pizza-image"
          className="w-[80%] h-[25rem] aspect-[1]"
        />
      </div>
    </div>
  );
}

export default PizzaPair;
