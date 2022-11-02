import React from "react";
import Product from "./Product";

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

      <img
        className="md:col-span-full "
        src="https://links.papareact.com/dyz"
      />

      <div className="md:col-span-2 lg:mt-5  mx-auto">
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
