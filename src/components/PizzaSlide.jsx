import { useEffect, useState } from 'react';
import PizzaLeft from './PizzaLeft';
import { FaAngleUp } from 'react-icons/fa6';
import { FaAngleDown } from 'react-icons/fa6';
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
  const handleNumber = (num) => {
    setactiveId(num);
  };
  useEffect(() => {
    const timer = setInterval(() => {
      setactiveId((activeId) =>
        activeId >= 4 ? (activeId = 0) : activeId + 1,
      );
    }, [3000]);
    return () => clearInterval(timer);
  }, [activeId]);
  return (
    <div className="bg-pizzaRed w-screen px-10 py-10">
      <div className="text-red-600 flex items-center bg-pizzaRed w-[100%] mb-4">
        <div className="flex gap-3 flex-col items-center w-[2%] ">
          <FaAngleUp
            className="text-pizzaOrange text-xl cursor-pointer"
            onClick={() =>
              setactiveId((activeId) =>
                activeId >= 4 ? (activeId = 0) : activeId + 1,
              )
            }
          />
          {pizzaList.map((pizza, i) => (
            <h2
              key={pizza.id}
              className="text-pizzaOrange font-normal text-xl cursor-pointer hover:bg-pizzaOrange hover:font-bold hover:text-pizzaRed hover:rounded-[50%] hover:px-1"
              onClick={() => handleNumber(pizza.id)}
            >{`0${i + 1}`}</h2>
          ))}
          <FaAngleDown
            className="text-pizzaOrange text-xl cursor-pointer"
            onClick={() =>
              setactiveId((activeId) =>
                activeId <= 0 ? (activeId = 4) : activeId - 1,
              )
            }
          />
        </div>
        <div className="w-[70%] m-auto">
          {pizzaList.map(
            (pizza) =>
              pizza.id === activeId && <PizzaLeft {...pizza} key={pizza.id} />,
          )}
        </div>
      </div>
      <div className="flex gap-2 justify-center">
        {pizzaList.map((pizza) => (
          <p
            key={pizza.id}
            className={`${activeId === pizza.id ? 'bg-white' : ''} w-2 h-2 rounded-[50%] border-2 border-white`}
          ></p>
        ))}
      </div>
    </div>
  );
}

export default PizzaSlide;
