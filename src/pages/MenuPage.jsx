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
  if (error) return <div>Error: {}</div>;
  return (
    <div className="w-[80%] m-auto  py-10">
      <h1 className="text-center font-pizzaHeader font-bold text-3xl mb-6">
        OUR MENU
      </h1>
      <div className="flex gap-8 flex-wrap ">
        {menuData?.map((pizza) => (
          <MenuItem key={pizza.id} {...pizza} />
        ))}
      </div>
    </div>
  );
}

export default MenuPage;
