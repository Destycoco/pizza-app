/* eslint-disable react/prop-types */
function OrderItem({ name, quantity, totalPrice }) {
  return (
    <div className="flex justify-between">
      <div className="flex gap-4">
        <p>{quantity}X</p>
        <p>{name}</p>
      </div>
      <p>{totalPrice}</p>
    </div>
  );
}

export default OrderItem;
