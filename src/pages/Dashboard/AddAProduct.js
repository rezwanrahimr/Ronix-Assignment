import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";
import axios from "axios";
import URL from "../../API";

const AddAProduct = () => {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const [user] = useAuthState(auth);

  const onSubmit = (data) => {
    setLoading(true);
    axios
      .post(URL + "/api/add-product", {
        ...data,
        email: user?.email,
      })
      .then((res) => {
        if (res.data.status === 1) {
          toast.success("Product Added Successfully");
        }
        setLoading(false);
      })
      .catch((err) => {
        if (err) {
          toast.error("Product Added Failed");
        }
        setLoading(false);
      });
  };
  return (
    <div className="">
      <h1 className="my-4 text-2xl font-bold">ADD NEW TOOLS</h1>
      <div className="flex h-screen justify-center items-center overflow-hidden">
        <div className="flex justify-center card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <form className="" onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                placeholder="Name"
                class="input form-control input-bordered w-full max-w-xs"
                {...register("name")}
              />
              <input
                type="text"
                placeholder="Photo Url"
                class="input my-2 form-control input-bordered w-full max-w-xs"
                {...register("img")}
              />
              <input
                type="text"
                placeholder="Description"
                class="input form-control input-bordered w-full max-w-xs"
                {...register("description")}
              />
              <input
                type="text"
                placeholder="Minimum Order"
                class="input form-control my-2 input-bordered w-full max-w-xs"
                {...register("min_order")}
              />
              <input
                type="text"
                placeholder="In Stock"
                class="input form-control input-bordered w-full max-w-xs"
                {...register("in_stock")}
              />
              <input
                type="text"
                placeholder="Price"
                class="input form-control input-bordered my-2 w-full max-w-xs"
                {...register("price")}
              />
              <button type="submit" class="btn mt-2" disabled={loading}>
                {loading ? "Adding Product..." : "Add Product"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAProduct;
