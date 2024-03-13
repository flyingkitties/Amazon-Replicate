import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { useSelector } from 'react-redux';
import CheckoutProduct from '../components/CheckoutProduct';
import Header from '../components/Header';
import { selectItems, selectTotal } from '../slices/basketSlice';
import { signIn, signOut, useSession } from 'next-auth/react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
const stripePromise = loadStripe(process.env.stripe_public_key);

// const stripe = require('stripe')('pk_test_51LuFRYJTek5iFVM1D2CPXwHPx0pVYfHBLpkxAUTwFAmNkX1NdlbrYBq9YtM2O7gc6O2J4lSYQFqloqYrQ6wWtmmU00LUO1IbXd');

function CheckOut() {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const { data: session, status } = useSession();

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;
    // Call the backend to create a checkout session
    const checkoutSession = await axios.post('/api/create-checkout-session', {
      items: items,
      email: session.user.email,
    });
    //Redirect user/customer to stripe Checkout
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result.error) alert(result.error.data);
  };

  return (
    <div className="bg-gray-100 ">
      <Header />

      <main className="lg:flex max-w-screen-2xl mx-auto ">
        {/* Left  */}
        <div className="flex-grow p-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
            alt="Checkout Image"
          />

          <div className=" justify-center">
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0
                ? 'Your Amazon Basket is Empty'
                : 'Shopping Basket'}
            </h1>

            <div className="flex-col p-5 space-y-10 bg-white ">
              {items.map((item, i) => (
                <CheckoutProduct
                  key={i}
                  id={item.id}
                  title={item.title}
                  rating={item.rating}
                  price={item.price}
                  description={item.description}
                  category={item.category}
                  image={item.image}
                  hasPrime={item.hasPrime}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col bg-white p-10 px-20 shadow-md">
          {items.length > 0 && (
            <React.Fragment>
              <h2 className="whitespace-nowrap ">
                Subtotal ({items.length} items):{' '}
                <span className="font-bold ">
                  <CurrencyFormated price={total} />
                </span>
              </h2>
              <button
                role="link"
                onClick={createCheckoutSession}
                disabled={!session}
                className={`button mt-2 
      ${
        !session &&
        'from-gray-300 to-gray-500 border-gray-200 text-gray-200 cursor-pointer '
      }`}
              >
                {!session ? 'Sign in to checkout' : 'Proceed to checkout'}
              </button>
            </React.Fragment>
          )}
        </div>
      </main>
    </div>
  );
}

export default CheckOut;
