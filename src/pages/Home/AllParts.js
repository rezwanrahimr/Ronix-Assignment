import React from "react";
import { useNavigate } from "react-router-dom";

const AllParts = ({ Tools }) => {
  const { _id, name, img, description, min_order, in_stock, price } = Tools;
  const navigate = useNavigate();
  const handlePurchase = (id) => {
    navigate(`/purchase/${id}`);
  };

  return (
    <div>
      <div className="card  h-screen bg-base-100 shadow-xl ">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl h-40" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>Mininum Order: {min_order}</p>
          <p>Available : {in_stock}</p>
          <p>Price : ${price}</p>
          <p>{description}</p>
          <div className="card-actions">
            <button
              className="btn btn-primary"
              onClick={() => handlePurchase(_id)}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllParts;
