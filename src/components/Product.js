import { React, useEffect, useState } from 'react';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/solid';
import formatAsCurrency from '../components/Currency';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../slices/basketSlice';
import primeLogo from '../../public/prime.png';

function Product({ id, title, price, description, category, image, rating }) {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  const dispatch = useDispatch();

  const { rate, count } = rating;
  const [stars] = useState(Math.floor(rate));

  const [hasPrime] = useState(Math.random() < 0.5);

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      rating,
      description,
      category,
      image,
      hasPrime,
      rate,
      count,
      stars,
    };
    // Sending the product as an action to the REDUX store (in the basket Slice)
    dispatch(addToBasket(product));
  };

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 pt-10 p-3 sm:p-10 items-center place-content-between">
      <p className="absolute top-2 right-2 text-xs italic text-gray-500  ">
        {category}
      </p>

      <Image
        loading="lazy"
        src={image}
        height={200}
        width={200}
        className="h-[200px] w-auto  "
        // objectFit="contain"
        alt="Product Image"
      />
      <div>
        <h1 className="my-3">{title}</h1>
        <div className=" inline-flex">
          <div className="flex">
            {Array(stars)
              .fill()
              .map(() => (
                <StarIcon
                  key={id}
                  className="h-5 text-yellow-500"
                />
              ))}
          </div>
          <div className="text-xs font-extralight px-1 pt-1 text-center items-center">
            {count}
          </div>
        </div>
        <p className="text-xs my-2 line-clamp-2">{description}</p>

        <div className="mb-0 ">
          <formatAsCurrency
            value={price}
            currency="GBP"
          />
        </div>

        {!isSSR && (
          <div className="mt-0 ">
            {hasPrime && (
              <div className="flex space-x-1 my-2">
                <Image
                  height={15}
                  width={40}
                  className="w-12"
                  src={primeLogo}
                  alt="Free Next-day Delivery"
                />
                <p className="text-xs text-gray-500 pb-[0.15rem] ">
                  Free Next-day Delivery
                </p>
              </div>
            )}
          </div>
        )}
      </div>
      <button
        onClick={addItemToBasket}
        className="mt-auto button "
      >
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
