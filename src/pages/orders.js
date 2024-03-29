import db from '../../Firebase';
import { getSession, useSession } from 'next-auth/react';
import React from 'react';
import Header from '../components/Header';
import moment from 'moment';
import Order from '../components/Order';

export async function getServerSideProps(context) {
  const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

  //Get users logged in credentials
  const session = await getSession(context);

  if (!session) {
    return {
      props: {},
    };
  }

  //Firebase dataBase
  const stripeOrders = await db
    .collection('users')
    .doc(`session.matadata.email`)
    .collection('order')
    .orderBy('timestamp', 'desc')
    .get();

  console.log('stripeOrders:', stripeOrders);
  //Stripe Orders
  const ordersA = await Promise.all(
    stripeOrders.docs.map(async (order) => ({
      id: order.id,
      amount: order.data().amount,
      amountShipping: order.data().amount_Shipping,
      images: order.data().images,
      timestamp: moment(order.data().timestamp.toDate()).unix(),
      items: (
        await stripe.checkout.sessions.listLineItems(order.id, {
          limit: 100,
        })
      ).data,
    })),
  );

  console.log('ordersA:', ordersA);

  const orders = JSON.parse(JSON.stringify(ordersA));
  console.log('orders:', orders);
  return {
    props: {
      orders,
    },
  };
}

function orders({ orders }) {
  const { data: session, status } = useSession();

  console.log('inside orders:', orders);

  return (
    <div>
      <Header />

      <main className="max-w-screen-lg mx-auto p-10 bg-gray-100 ">
        <h1 className="text-3xl border-b mb-2 pb-1 border-yellow-400">
          Your orders{' '}
        </h1>

        {session ? (
          <h2>{orders?.length} orders </h2>
        ) : (
          <h2>Please sign in to see your orders</h2>
        )}

        <div className="mt-5 space-y-4">
          {orders?.map(
            ({ id, amount, amountShipping, items, timestamp, images }) => (
              <Order
                key={id}
                id={id}
                amount={amount}
                amountShipping={amountShipping}
                items={items}
                timestamp={timestamp}
                images={images}
              />
            ),
          )}
        </div>
      </main>
    </div>
  );
}

export default orders;
