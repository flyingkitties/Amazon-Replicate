import { buffer } from "micro";
import * as admin from "firebase-admin";
import { db } from "../../../Firebase";


//Secure a connection to firebase from the backend
const serviceAccount = require("../../../permissions.json");

const app = !admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    })
  : admin.app();

  

//Establish connection to stripe
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const endpoitSecret = process.env.STRIPE_SIGNING_SECRET;

const fulfillOrder = async (session) => {
  console.log("fulfilling order", session);

  return app
    .firestore()
    .collection("users")
    .doc(session.matadata.email)
    .collection("orders")
    .doc(session.id)
    .set({
      amount: session.amount_total / 100,
      amount_shipping: session.total_details.amount_shipping / 100,
      images: JSON.parse(session.metadata.images),
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      console.log(`Success: order ${session.id} has been added to the BD`);
    }).catch((error) => {
      console.error(error)
    })
    
};

export default async (req, res) => {
  if (req.method === "GET") {
    const data = await 
    db.collection("test")
    .get()
    .then((log) => {
      console.log("Test", log );
    }).catch((error) => {
      console.error(error)
    })
    console.log(data);
    return <h1>HEllo </h1>
  }
  if (req.method === "POST") {
    const requestBuffer = await buffer(req);
    const payload = requestBuffer.toString();
    const sig = req.headers["stripe-signature"];

    let event;

    // Verify that the event posted came from Stripe
    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpoitSecret);
    } catch (err) {
      console.log("Error", err.message);
      return res.status(400).send(`Webhook error: $(err.message)`);
    }

    // Handle the checkout session compleated event
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      // Fulfill the order
      return fulfillOrder(session)
        .then(() => res.status(200))
        .catch((err) => res.status(400).send(`Webhook Error: $(err.message)`));
    }
  }
};

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
