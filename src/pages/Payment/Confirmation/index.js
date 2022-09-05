import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import StatusPage from "./StatusPage";

const stripePromise = loadStripe(
  "pk_test_51L3kgcEqztdnHcgkUsXiWYSY6FbMuSHdZZClWIhjPy0iIImfSHwqB2hvviOxQ007ZVmCehbNoiTgFlb0qnhEpmfb00Ah7bte9H"
);

const ConfirmationWraper = () => {
  const options = {};
  return (
    <React.Fragment>
      <Elements stripe={stripePromise} options={options}>
        <StatusPage />
      </Elements>
    </React.Fragment>
  );
};

export default ConfirmationWraper;
