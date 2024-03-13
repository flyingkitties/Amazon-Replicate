import { buffer } from 'micro';
import * as admin from 'firebase-admin';
import { getFirestore, Timestamp, FieldValue } from 'firebase-admin/firestore';

//Secure a connection to firebase from the backend
const serviceAccount = require('../../../permissions.json');

const app = !admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      // databaseURL: "https://rita--replicate-default-rtdb.firebaseio.com"
    })
  : admin.app();

//Establish connection to stripe
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const endpoitSecret = process.env.STRIPE_SIGNING_SECRET;

const fulfillOrder = async (session) => {
  console.log('Fulfilling order', session);

  return app
    .firestore()
    .collection('users')
    .doc(`session.matadata.email`)
    .collection('order')
    .doc(session.id)
    .set({
      amount: session.amount_total / 100,
      amount_shipping: session.total_details.amount_shipping / 100,
      images: JSON.parse(session.metadata.images),
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      console.log(`Success: order ${session.id} has been added to the BD`);
    })
    .catch((err) => {
      console.log('Firebase error', err);
    });
};

export default async (req, res) => {
  if (req.method === 'GET') {
    const data = await app.firestore().collection('test').get();
    const responseContent = data.docs.map((doc) => doc.data());
    console.log({ responseContent });
    return res.status(200).send({ responseContent });
  }
  if (req.method === 'POST') {
    console.log('inside Post');

    const requestBuffer = await buffer(req);
    const payload = requestBuffer.toString();
    const sig = req.headers['stripe-signature'];

    let event;

    // Verify that the event posted came from Stripe
    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpoitSecret);
    } catch (err) {
      console.log('ERROR', err.message);
      return res.status(400).send(`Webhook error: ${err.message}`);
    }
    console.log('from stripe only');
    // Handle the checkout session compleated event
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;

      console.log('fulfilling orders');
      // Fulfill the order
      return fulfillOrder(session)
        .then(() => res.status(200))
        .catch((err) => console.log('error in fulfilment', err));
    }
  }
};

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
