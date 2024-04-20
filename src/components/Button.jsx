/* eslint-disable react/prop-types */
function Button({ children, type, onClick, textColor = 'white' }) {
  const style = {
    base: `text-${textColor} font-bold px-4 py-2 border-2 border-pizzaOrange rounded-full`,
    btnType:
      type === 'primary' ? ' hover:bg-pizzaOrange hover:text-pizzaRed' : '',
    // primary: ""
  };
  if (type === 'primary')
    return (
      <button className={`${style.base} ${style.btnType}`} onClick={onClick}>
        {children}
      </button>
    );
}

export default Button;
