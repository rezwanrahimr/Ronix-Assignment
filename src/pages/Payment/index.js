import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "react-router-dom";
import Checkout from "./Checkout";

const stripePromise = loadStripe(
  "pk_test_51L3kgcEqztdnHcgkUsXiWYSY6FbMuSHdZZClWIhjPy0iIImfSHwqB2hvviOxQ007ZVmCehbNoiTgFlb0qnhEpmfb00Ah7bte9H"
);

const Payments = () => {
  const { client_secret, price, email, id } = useParams();
  const options = {
    clientSecret: client_secret,
  };
  return (
    <React.Fragment>
      <Elements stripe={stripePromise} options={options}>
        <Checkout price={price} email={email} id={id} />
      </Elements>
    </React.Fragment>
  );
};

export default Payments;
