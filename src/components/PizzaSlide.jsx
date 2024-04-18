import { useState } from 'react';
import PizzaLeft from './PizzaLeft';

function PizzaSlide() {
  const pizzaList = [
    {
      header: 'MARGHERITA',
      title: 'EXTRA CHEEZY AND SPICY',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'pizza-1.png',
      id: 0,
    },
    {
      header: 'CHICKEN SUPREME',
      title: 'SEASONED CHICKEN AND SUCCULENT',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'pizza-2.png',
      id: 1,
    },
    {
      header: 'VEGGIE SUPREME',
      title: 'FRESHNESS AND VARIETY OF VEGETABLES',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'pizza-3.png',
      id: 2,
    },
    {
      header: 'CHICKEN SUYA',
      title: 'SEASONED CHICKEN AND SPICY',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'pizza-4.png',
      id: 3,
    },
    {
      header: 'NAIJA FIESTA',
      title: 'GRILLED CHICKEN AND SPICY',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'pizza-2.png',
      id: 4,
    },
  ];
  const [activeId, setactiveId] = useState(0);
  return (
    <div className="bg-pizzaRed h-screen w-screen px-10 ">
      <div className="text-red-600 flex items-center bg-pizzaRed w-[100%]">
        <div className="flex gap-3 flex-col w-[10%]">
          {pizzaList.map((pizza, i) => (
            <h2
              key={pizza.id}
              className="text-pizzaOrange font-bold"
            >{`0${i + 1}`}</h2>
          ))}
        </div>
        <div className="w-[70%] m-auto">
          {pizzaList.map(
            (pizza) =>
              pizza.id === activeId && <PizzaLeft {...pizza} key={pizza.id} />,
          )}
        </div>
      </div>
    </div>
  );
}

export default PizzaSlide;
