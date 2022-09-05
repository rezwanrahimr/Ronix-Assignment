import React, { useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { Link } from "react-router-dom";
import axios from "axios";
import URL from "../../../API";

const Checkout = ({ price, email, id }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [process, setProcess] = useState(false);
  const [error, setError] = useState({
    message: "",
    is: false,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError({
      message: "",
      is: false,
    });

    if (!stripe || !elements) return;

    const updateStatus = await axios.post(
      URL + `/api/update-order-status?id=${id}&status=paid&email=${email}`
    );
    console.log(updateStatus);
    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: window.location.origin + "/order_confirmation",
      },
    });

    setProcess(false);

    if (result.error) {
      setError({
        message: result.error.message,
        is: true,
      });
      axios.post(
        URL + `/api/update-order-status?id=${id}&status=failed&email=${email}`
      );
    } else {
      setError({
        message: "",
        is: false,
      });
    }
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="col-md-6">
          <form
            onSubmit={(e) => {
              handleSubmit(e);
              setProcess(true);
            }}
          >
            <PaymentElement />
            <button
              type="submit"
              disabled={!stripe || process}
              className="btn stripe_pay_button text-white"
            >
              {process ? (
                <div className="d-flex align-items-center justify-content-center">
                  Processing
                  <div
                    class="spinner-border spinner-border-sm text-light ms-2"
                    role="status"
                  >
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : (
                <>Pay ${price} now</>
              )}
            </button>
          </form>
          {error.is && <p className="text-danger mt-3 mb-0">{error.message}</p>}
          <Link to="/dashboard" className="my-5">
            Pay Later
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Checkout;
