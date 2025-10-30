import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
  console.warn("STRIPE_SECRET_KEY missing.");
}

// Let the SDK use the default version configured for your account
const key = process.env.STRIPE_SECRET_KEY || "sk_test_placeholder";
export const stripe = new Stripe(key);
