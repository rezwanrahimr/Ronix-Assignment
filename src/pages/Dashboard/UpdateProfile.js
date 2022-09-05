import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import URL from "../../API";

const UpdateProfile = () => {
    const { register, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false);
    const [user] = useAuthState(auth);
    const onSubmit = (data) => {
        setLoading(true);
        axios
            .post(URL + "/api/update-profile", {
                ...data,
                email: user?.email,
            })
            .then((res) => {
                if (res.data.status === 1) {
                    toast.success("Your Profile Update Successfully");
                }
                setLoading(false);
            })
            .catch((err) => {
                if (err) {
                    toast.error("Profile Update Failed");
                }
                setLoading(false);
            });
    };

    return (
        <div>
            <div className='flex h-screen justify-center items-center overflow-hidden'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold">Update Your Profile</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full max-w-xs">
                                <input
                                    name='name'
                                    type="text"
                                    placeholder="Name" class="input input-bordered w-full max-w-xs"
                                    {...register("name")} />
                            </div>
                            <div className="form-control w-full max-w-xs my-2">
                                <input
                                    name='email'
                                    type="text"
                                    placeholder="Email" class="input input-bordered w-full max-w-xs"
                                    {...register("email")} />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <input
                                    name='phone'
                                    type="text"
                                    placeholder="Phone" class="input input-bordered w-full max-w-xs"
                                    {...register("phone")} />
                            </div>
                            <div className="form-control w-full max-w-xs my-2">
                                <input
                                    name='address'
                                    type="text"
                                    placeholder="Address" class="input input-bordered w-full max-w-xs"
                                    {...register("address")} />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <input
                                    name='linkdin'
                                    type="text"
                                    placeholder="LinkdIn" class="input input-bordered w-full max-w-xs"
                                    {...register("linkdin")} />
                            </div>
                            <div className="form-control w-full max-w-xs my-2">
                                <input
                                    name='facebook'
                                    type="text"
                                    placeholder="Facebook" class="input input-bordered w-full max-w-xs"
                                    {...register("facebook")} />
                            </div>
                            <button type="submit" class="btn mt-2" disabled={loading}>
                                {loading ? "updaing profile..." : "update profile"}
                            </button>
                        </form>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default UpdateProfile;