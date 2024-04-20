import { useState } from 'react';
import Button from './Button';

/* eslint-disable react/prop-types */
function SpecialItem({ header, text, image, id }) {
  const [showFullText, setShowfullText] = useState(true);
  console.log('Original text:', text);
  const handleSetText = () => {
    setShowfullText((showFullText) => !showFullText);
  };
  const handleFormat = (text, n) => {
    if (text.length > n) {
      const newText = text.substring(0, n).concat('...');
      return newText;
    }
    return text;
  };

  console.log('Truncated text:', handleFormat(text, 50));

  //   console.log('Truncated text:', handleFormat(text, 50));
  return (
    <div className="flex flex-col gap-2 items-center basis-[33%] shadow-lg py-3">
      <div className="w-[40%]">
        <img src={image} alt="pizza-image" className="w-[100%] aspect-[1]" />
      </div>
      <h3 className="font-bold font-pizzaText text-pizzaRed">{header}</h3>
      <p className="w-[90%] ">
        {showFullText ? handleFormat(text, 100) : text}
      </p>
      <Button onClick={handleSetText} type={'primary'} textColor={'pizzaRed'}>
        {showFullText ? 'Read more' : 'Read less'}
      </Button>
    </div>
  );
}

export default SpecialItem;
