import { formatCurrency } from '../../utils';

/* eslint-disable react/prop-types */
function OrderItem({ name, quantity, totalPrice }) {
  return (
    <div className="flex justify-between px-2 py-2">
      <div className="flex gap-4">
        <p>{quantity}X</p>
        <p>{name}</p>
      </div>
      <p>{formatCurrency(totalPrice)}</p>
    </div>
  );
}

export default OrderItem;
