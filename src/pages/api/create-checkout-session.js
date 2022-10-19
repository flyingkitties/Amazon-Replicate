const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
import CheckOut from '../checkOut';


export default async (req, res) => {

const {items, email} = req.body;

const transformedItems = items.map((item) => ({
    
    
    price: item.price,
   
    quantity: 1,
    
}))

const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"], 
    shipping_rates: ['shr_1LuHuYJTek5iFVM1RwxGOr68'],
    shipping_address_collection: {
        allowed_countries: ["GB","US", "CA"],
    },
    line_items: transformedItems, 
    mode: "payment", 
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/checkout`,
    metadata: {
        email, 
        images: JSON.stringify(items.map((item) => item.image))

    },

});
res.status(200).json({id: session.id})
};
