import axios from "axios";
import React, { useEffect, useState } from "react";
import URL from "../../API";
import { toast } from "react-toastify";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(URL + "/api/products")
      .then((res) => {
        if (res.data.status === 1) {
          setProducts(res.data.products);
        } else {
          toast.error("Failed to get products");
        }
      })
      .catch((err) => {
        toast.error("Failed to get products");
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .post(URL + "/api/delete-product?id=" + id, {})
      .then((res) => {
        if (res.data.status === 1) {
          toast.success("Product deleted successfully");
          setProducts(products.filter((product) => product._id !== id));
        } else {
          toast.error("Failed to delete product");
        }
      })
      .catch((err) => console.log(err));
  }; console.log(products)
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
              <th>PRICE</th>
              <th>IN STOKE</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {products?.map((item, index) => (
              <tr key={index}>
                <th>
                  <div>{index + 1}</div>
                </th>
                <td>
                  <div class="flex items-center space-x-3">
                    <div class="avatar">
                      <div class="mask mask-squircle w-12 h-12">
                        <img
                          src={item.img}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div class="font-bold">{item.name}</div>
                    </div>
                  </div>
                </td>
                <td>{item.price}</td>
                <td>{item.in_stock}</td>

                <th>
                  <button
                    class="btn btn-error btn-xs"
                    onClick={() => handleDelete(item._id)}
                  >
                    DELETE
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

export default ManageProducts;
