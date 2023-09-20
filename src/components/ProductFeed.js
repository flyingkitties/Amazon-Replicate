import React from 'react';
import Product from './Product';
import Image from 'next/image';

function ProductFeed({ products }) {
  return (
    <div
      className="grid grid-flow-row-dense  md:grid-cols-2 lg:grid-cols-3
     xl:grid-cols-4 md:-mt-40 lg:-mt-52 mx-auto  "
    >
      {products
        .slice(0, 4)
        .map(({ id, title, price, description, category, image, rating }) => (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
            rating={rating}
          />
        ))}
      <div className="col-span-full">
        <Image
          width={1085 * 2}
          height={217 * 2}
          className=" "
          src="https://links.papareact.com/dyz"
          alt="Banner Add"
        />
      </div>
      <div className="md:col-span-2 mx-auto">
        {products
          .slice(4, 5)
          .map(({ id, title, price, description, category, image, rating }) => (
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
              rating={rating}
            />
          ))}
      </div>

      {products
        .slice(5, products.length)
        .map(({ id, title, price, description, category, image, rating }) => (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
            rating={rating}
          />
        ))}
    </div>
  );
}

export default ProductFeed;
