import { StarIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import React from 'react';
import Currency from 'react-currency-formatter';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addToBasket, removeFromBasket } from '../slices/basketSlice';
import { TrashIcon, PlusIcon } from '@heroicons/react/24/solid';

function CheckoutProduct({
  id,
  title,
  price,
  rating,
  description,
  category,
  image,
  hasPrime,
}) {
  const { rate, count } = rating;
  const [stars] = useState(Math.floor(rate));

  const dispatch = useDispatch();

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
      count,
      stars,
    };
    dispatch(addToBasket(product));
  };

  const removeItemFromBasket = () => {
    // Remove from redux
    dispatch(removeFromBasket({ id }));
  };

  return (
    <div className="grid grid-cols-5">
      <Image
        src={image}
        height={200}
        width={200}
        objectFit="contain"
        alt="Checkout image"
      />

      {/*  Middle  */}
      <div className="col-span-3 mx-5">
        <p>{title}</p>

        <div className="inline-flex">
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
          <div className="text-blue text-xs font-extralight px-1 pt-1 text-center items-center">
            {count}
          </div>
        </div>

        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <Currency
          quantity={price}
          currency="GBP"
        />

        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              loading="lazy"
              className="w-12"
              src="https://links.papareact.com/fdw"
              alt="Free Next-day Delivery"
            />
            <p className="text-sm">Free Next-day Delivery</p>
          </div>
        )}
      </div>
      <div className="flex flex-col space-y-3 my-auto justify-end ">
        {/* Add and remove buttons */}
        {/* <button className="button mt-auto mx-auto" onClick={addItemToBasket}>
          <PlusIcon className="h-3" />{" "}
        </button> */}
        <select className="px-3 mx-auto my-auto border border-[6] bg-gray-200 focus:outline-none rounded-md cursor-pointer">
          <option>1</option>
        </select>

        <button
          className=" mt-auto mx-auto place-content-center "
          onClick={removeItemFromBasket}
        >
          <TrashIcon className=" py-auto h-4 text-gray-700  " />
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
