/* eslint-disable react/prop-types */
function Button({ children }) {
  const style = {
    base: 'text-white font-bold px-4 py-2 border-2 border-pizzaOrange rounded-full',
    // primary: ""
  };
  return <button className={style.base}>{children}</button>;
}

export default Button;
