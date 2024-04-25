/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { GoArrowRight } from 'react-icons/go';
function BlogItem({ link, title, text, image }) {
  return (
    <div className=" rounded-lg basis-[30%]">
      <div className="w-[100%] h-[50%]">
        <img src={image} alt="pizza-image" className="w-[100%] h-[100%]" />
      </div>
      <div className=" bg-pizzaRed h-[50%] py-3 px-3">
        <h2 className="text-left text text-lg font-bold text-white">{title}</h2>
        <p className="text-left text-white">{text}</p>
        <div className="flex justify-end items-center ">
          <Link
            to={link}
            target="_blank"
            className="flex items-center gap-1  hover:font-bold transition-all text-pizzaOrange"
          >
            Read more{' '}
            <span className="">
              <GoArrowRight />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogItem;
