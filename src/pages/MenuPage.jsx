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
  if (isLoading) return <div>Loading....</div>;
  if (error) return <div>Error: {}</div>;
  return (
    <div>
      {menuData?.map((pizza) => (
        <MenuItem key={pizza.id} {...pizza} />
      ))}
    </div>
  );
}

export default MenuPage;
