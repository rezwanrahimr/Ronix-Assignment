import React, { useEffect, useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import URL from "../../API";

const Review = () => {
  const [reviews, setReview] = useState([]);

  useEffect(() => {
    fetch(URL + "/review")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);

  return (
    <div>
      <h1 className="text-center font-bold text-2xl">Client Testimonials</h1>
      <small className="text-center">
        We have worked with hundreds of different clients around the globe.
        Check what a selection of them have to say about us.
      </small>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 p-10">
        {reviews.map((review) => (
          <>
            <div class="card  bg-base-100 shadow-xl">
              <div class="card-body">
                <p>{review.description}</p>
                <div class="card-actions justify-start items-center font-bold">
                  <small>
                    <BsFillPersonFill />
                  </small>
                  <small className=""> {review.name}</small>
                  <small className="ml-3">
                    Rating: {review.review}{" "}
                    <div class="rating rating-xs">
                      <input
                        type="radio"
                        name="rating-5"
                        class="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-5"
                        class="mask mask-star-2 bg-orange-400"
                        checked
                      />
                      <input
                        type="radio"
                        name="rating-5"
                        class="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-5"
                        class="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-5"
                        class="mask mask-star-2 bg-orange-400"
                      />
                    </div>
                  </small>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Review;
