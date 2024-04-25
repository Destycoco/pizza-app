/* eslint-disable react/prop-types */
// import { MdOutlineStarBorder } from 'react-icons/md';
import { FaStar } from 'react-icons/fa6';
import { FaRegStar } from 'react-icons/fa6';
function ReviewItem({ name, text, proffession, image, rating }) {
  return (
    <div className="px-7 py-8 mr-8 shadow-lg ">
      <div className="w-[4rem] h-[4rem] rounded-[50%] mb-4">
        <img src={image} alt="" className="w-[100%] h-[100%] rounded-[50%]" />
      </div>
      <p className="py-5">{text}</p>
      <h2>{name}</h2>
      <p>{proffession}</p>
      <div className="flex gap-2">
        {Array.from({ length: 5 }, (len, i) => (
          <p key={i}>
            {rating > i ? (
              <FaStar className="text-xl text-pizzaOrange" />
            ) : (
              <FaRegStar className="text-xl text-pizzaOrange" />
            )}
          </p>
        ))}
      </div>
    </div>
  );
}

export default ReviewItem;
