import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
const links = [
  { title: 'Home', route: 'home', id: 1 },
  { title: 'About', route: 'home', id: 2 },
  { title: 'Menu', route: 'menu', id: 3 },
  { title: <FaShoppingCart />, route: 'cart', id: 4 },
];

function Navbar() {
  const cartLength = useSelector((store) =>
    store.cart.cart.reduce((acc, cur) => acc + cur.quantity, 0),
  );
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
          <ul className="flex space-x-4 font-pizzaLarge2 items-center">
            <div></div>
            {links.map((link) => (
              <Link
                to={link.route}
                key={link.id}
                onMouseEnter={() => handleSetHover(link.title)}
                onMouseLeave={() => setHoverTab('')}
                className={`${hoverTab && hoverTab === link.title ? 'text-pizzaRed' : activeTab && activeTab === link.title ? 'text-pizzaRed' : 'text-white'} text-xl transition duration-500 ease-in-out relative`}
                onClick={() => handleSetActive(link.title)}
              >
                {link.id === 4 && (
                  <p
                    className={`${hoverTab && hoverTab === link.title ? 'text-white' : activeTab && activeTab === link.title ? 'text-white' : 'text-white'} absolute -top-3 -right-4 text-sm bg-pizzaRed rounded-[50%] w-5 h-5 flex items-center justify-center p-[4px] hover:text-white`}
                  >
                    {cartLength}
                  </p>
                )}
                {link.title}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
