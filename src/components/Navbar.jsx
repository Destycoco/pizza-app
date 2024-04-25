import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { title: 'Home', route: 'home', id: 1 },
  { title: 'About', route: 'home', id: 2 },
  { title: 'Menu', route: 'menu', id: 3 },
  { title: 'Cart', route: 'cart', id: 4 },
];

function Navbar() {
  const [activeTab, setActiveTab] = useState('Home');
  const [hoverTab, setHoverTab] = useState('');

  const handleSetActive = (title) => {
    setActiveTab(title);
    setHoverTab(title); // Ensure hoverTab is set when NavLink is active
  };

  const handleSetHover = (title) => {
    if (activeTab !== title) {
      setHoverTab(title);
      // setActiveTab(null);
    }
  };

  return (
    <div className="w-screen bg-pizzaOrange font-pizzaLarge py-8">
      <div className="flex justify-between w-[85%] m-auto items-center">
        <div className="flex space-x-2 items-center">
          <div className="w-[3rem]">
            <img
              src="/pizza-logo.png"
              alt="Pizza_Logo"
              className="w-[100%] aspect-[1]"
            />
          </div>
          <h1 className="text-pizzaRed text-5xl">9JA Pizza</h1>
        </div>
        <div>
          <ul className="flex space-x-4 font-pizzaLarge2">
            {links.map((link) => (
              <NavLink
                to={link.route}
                key={link.id}
                onMouseEnter={() => handleSetHover(link.title)}
                onMouseLeave={() => setHoverTab('')}
                className={`${hoverTab && hoverTab === link.title ? 'text-pizzaRed' : activeTab && activeTab === link.title ? 'text-pizzaRed' : 'text-white'} text-xl transition duration-500 ease-in-out`}
                onClick={() => handleSetActive(link.title)}
              >
                {link.title}
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
