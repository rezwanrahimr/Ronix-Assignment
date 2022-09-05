import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const [review, setReview] = useState({
        rating: '', description: ''
    });
    const addReview = (e) => {
        e.preventDefault();
        const body = {
            ...review,
            status: "publish",
            email: user.email,
            name: user.displayName
        }
        fetch('https://enigmatic-ridge-01425.herokuapp.com/review', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 1) {
                    toast.success("Review Added Successfully")
                }
            })
    }
    // input value.
    const handleInput = (e) => {
        setReview(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }


    return (
        <div>
            <div className='flex h-screen justify-center items-center overflow-hidden'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold">Review</h2>
                        <form onSubmit={addReview}>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input
                                    name='review'
                                    type="text"
                                    onChange={handleInput}
                                    placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Your Opinion</span>
                                </label>
                                <textarea
                                    name='description'
                                    onChange={handleInput}
                                    class="textarea textarea-bordered" placeholder="type here"></textarea>
                                <label className="label">
                                </label>
                            </div>
                            <input className='btn w-full max-w-xs text-white' type="submit" value="submit" />
                        </form>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default AddReview;