/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { useGetPizza } from '../utils';
import MenuItem from '../components/Menu/MenuItem';

function MenuPage() {
  const { menu, error, isLoading, getPizzaMenu } = useGetPizza();
  useEffect(() => {
    getPizzaMenu(); // Fetch pizza menu data when component mounts
  }, [getPizzaMenu]);
  const menuData = menu.data;
  console.log(menuData);
  if (isLoading) return <div className="h-[70vh]">Loading....</div>;
  if (error)
    return (
      <div className="h-[70vh] text-center font-bold">
        Error: {error.message}
      </div>
    );
  return (
    <div className="w-[92%] m-auto  py-10">
      <h1 className="text-center font-pizzaHeader font-bold text-3xl mb-6">
        OUR MENU
      </h1>
      <div className="flex gap-6 flex-wrap ">
        {menuData?.map((pizza) => (
          <MenuItem key={pizza.id} {...pizza} />
        ))}
      </div>
    </div>
  );
}

export default MenuPage;
