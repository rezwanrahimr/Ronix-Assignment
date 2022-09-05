import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import URL from "../../API";
import auth from "../../firebase.init";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  const [procStatus, setProcStatus] = useState(false);
  useEffect(() => {
    axios
      .get(URL + "/api/get-order?email=" + user.email)
      .then((res) => {
        if (res.data.status === 1) {
          setOrders(res.data.order);
        } else {
          toast.error("No Orders Found");
        }
      })
      .catch((err) => console.log(err));
  }, [user.email, procStatus]);

  const cancelOrder = (id, status) => {
    if (status === "cancelled" || status === "paid") {
      status === "cancelled"
        ? toast.error("Order Already Cancelled")
        : toast.error("Order Already Paid");
    } else {
      axios
        .post(
          URL +
          `/api/update-order-status?id=${id}&status=cancelled&email=${user.email}`
        )
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
    setProcStatus(!procStatus);
  };
  const handlePayment = (id, total) => {
    axios
      .post(URL + "/api/re-payment", {
        id,
        total,
      })
      .then((res) => {
        if (res.data.status === 1) {
          navigate(
            `/checkout/${res.data.client_secret}/${total}/${user.email}/${id}`
          );
        }
      })
      .catch((err) => toast.error("Order Amount is not valid"));
  };

  return (
    <div className="mt-10">
      <h1 className="my-5 text-2xl font-bold">MY ORDER</h1>
      <div class="overflow-x-auto w-full">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>SL No:</th>
              <th>TOOLS</th>
              <th>transaction id</th>
              <th>QUANTITY</th>
              <th>PRICE</th>
              <th>CANCLE</th>
              <th>PAY MENT</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {orders?.map((od, index) => (
              <tr key={index}>
                <th>
                  <div>{index + 1}</div>
                </th>
                <td>
                  <div class="flex items-center space-x-3">
                    <div class="avatar">
                      <div class="mask mask-squircle w-12 h-12">
                        <img
                          src={od.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div class="font-bold">{od.name}</div>
                    </div>
                  </div>
                </td>
                <td>{od.tnaxId}</td>
                <td>{od.quantity}</td>
                <td>${od.total}</td>
                <th>
                  <button
                    class="btn btn-error btn-xs"
                    onClick={() => cancelOrder(od._id, od.status)}
                    disabled={od.status === "cancelled" || od.status === "paid"}
                  >
                    {od.status === "cancelled"
                      ? "Cancelled"
                      : od.status === "paid"
                        ? "Paid"
                        : "Cancel"}
                  </button>
                </th>
                <th>
                  <button
                    class="btn btn-accent btn-xs"
                    onClick={() => handlePayment(od._id, od.total)}
                    disabled={od.status === "cancelled" || od.status === "paid"}
                  >
                    {od.status === "cancelled" || od.status === "paid"
                      ? "Not Possible"
                      : "Payment"}
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
          {/* <!-- foot --> */}
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
