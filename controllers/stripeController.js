import stripe from "stripe";

const stripeInstance = stripe("sk_test_51OJbPcCdErrEIe7la3nKTnyJj5HuskWp2pm3hO36qYMBe3o6ImSIJ7PS12KVKtBenCi4c1NaDYAvedZSy0SAYtuW00yoDfjIex");

export const processPayment = (req, res) => {
  const { tokenId, amount } = req.body;

  stripeInstance.charges.create(
    {
      source: tokenId,
      amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
};
