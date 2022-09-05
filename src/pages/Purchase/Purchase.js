import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import URL from "../../API";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useNavigate } from "react-router-dom";
import UUID from "../../Helper/UUID";

const Purchase = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [cart, setCart] = useState({
    ...product,
    quantity: 0,
  });

  useEffect(() => {
    axios
      .get(URL + "/api/product/" + id)
      .then((res) => {
        if (res.data.status === 1) {
          setProduct(res.data.product);
          setCart({
            ...res.data.product,
            quantity: res.data.product.min_order,
          });
        } else {
          toast.error("Failed to get product");
        }
      })
      .catch((err) => {
        toast.error("Failed to get product");
      });
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "add" && cart.quantity < cart.in_stock) {
      setCart({ ...cart, quantity: Number(cart.quantity) + 1 });
      return;
    }
    if (type === "add" && cart.quantity >= cart.in_stock) {
      toast.error("Maximum Order Quantity is " + cart.in_stock);
      return;
    }

    if (type === "remove" && Number(cart.quantity) > cart.min_order) {
      setCart({ ...cart, quantity: Number(cart.quantity) - 1 });
    } else {
      toast.error("Minimum Order Quantity is " + cart.min_order);
    }
  };

  const handleInput = (e) => {
    setCart({
      ...cart,
      [e.target.name]:
        e.target.value > cart.min_order ? e.target.value : cart.min_order,
    });
  };

  const purchaseProduct = () => {
    const data = {
      email: user.email,
      name: cart.name,
      price: cart.price,
      quantity: cart.quantity,
      image: cart.img,
      tnaxId: UUID(8),
      total: cart.price * cart.quantity,
    };
    axios
      .post(URL + "/api/process-order", data)
      .then((res) => {
        if (res.data.status === 1) {
          navigate(
            `/checkout/${res.data.client_secret}/${cart.price}/${user.email}/${res.data.orderId}`
          );
        }
      })
      .catch((err) => toast.error("Order Amount is not valid"));
  };

  return (
    <div className="">
      <h1 className="text-2xl font-bold text-center">PURCHASE YOUR PRODUCT</h1>
      <div className="flex justify-center">
        <div className="  grid md:grid-cols-1 grid-cols-1 gap-4 my-5 p-10">
          {Object.keys(product).length > 0 ? (
            <>
              {console.log(product)}
              <div className="card  h-screen bg-base-100 shadow-xl ">
                <figure className="px-10 pt-10">
                  <img
                    src={product.img}
                    alt="Shoes"
                    className="rounded-xl h-40"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{product.name}</h2>
                  <p>Mininum Order: {product.min_order}</p>
                  <p>Avilabe : {product.in_stock}</p>
                  <p>Price : ${product.price}</p>
                  <p>{product.description}</p>
                  <div className="card-actions">
                    <button
                      class="btn btn-sm"
                      onClick={() => handleQuantity("remove")}
                      
                    >
                     quantity decrease -
                    </button>
                    <div>
                      <input
                        type="number"
                        name="quantity"
                        className="form-control mb-1"
                        placeholder="Add Quantity"
                        value={cart.quantity || 0}
                        onChange={handleInput}
                      />
                      <button
                        class="btn btn-sm"
                        onClick={() => handleQuantity("add")}
                      >
                      quantity increase +
                      </button>
                    </div>

                    <button
                      class="btn btn-outline btn-accent"
                      onClick={purchaseProduct}
                      disabled={cart.quantity < product.min_order || cart.quantity > product.in_stock }
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>Loading...</>
          )}
        </div>
      </div>
    </div>
  );
};

export default Purchase;
