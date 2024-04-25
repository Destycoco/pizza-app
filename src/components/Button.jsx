/* eslint-disable react/prop-types */
function Button({
  children,
  type,
  onClick,
  baseColor = 'white',
  bgColor = 'pizzaOrange',
}) {
  const style = {
    base: `text-${baseColor} font-bold px-4 py-2 border-2 border-${bgColor} rounded-full`,
    btnType: type === 'primary' ? ` hover:bg-${bgColor} hover:text-white ` : '',
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
