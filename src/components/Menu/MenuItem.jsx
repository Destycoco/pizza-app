/* eslint-disable react/prop-types */
function MenuItem({ id, imageUrl, ingredients, name, soldOut, unitPrice }) {
  return (
    <div>
      <div>
        <img src={imageUrl} alt="" />
      </div>
    </div>
  );
}

export default MenuItem;
