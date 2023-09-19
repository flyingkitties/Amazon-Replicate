import { React, useEffect, useState } from 'react';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/solid';
import Currency from 'react-currency-formatter';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../slices/basketSlice';

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
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400  ">
        {category}
      </p>

      <Image
        loading="lazy"
        src={image}
        height={200}
        width={200}
        objectFit="contain"
      />

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
        <Currency
          quantity={price}
          currency="GBP"
        />
      </div>

      {!isSSR && (
        <div className="mt-0 ">
          {hasPrime && (
            <div className="flex items-center space-x-2 mt-0">
              <Image
                width={1}
                height={50}
                src="https://links.papareact.com/fdw"
                alt="Free Next-day Delivery image"
              />
              <p className="text-xs text-gray-500 ">Free Next-day Delivery</p>
            </div>
          )}
        </div>
      )}
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
