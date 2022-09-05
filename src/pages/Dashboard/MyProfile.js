import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import URL from '../../API';


const MyProfile = () => {
    const navigate = useNavigate();
    const [profileData, setProfileData] = useState([]);
    useEffect(() => {
        fetch(URL + "/api/profile")
            .then((res) => res.json())
            .then((data) => setProfileData(data.profile));
    }, []);
    console.log(profileData)
    return (
        <div>
            <h1 className='my-5 text-2xl font-bold'>MY PROFILE</h1>
            {
                profileData.map(profile => <>
                    <div>
                        {/* image */}
                        <div class="avatar my-5">
                            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={profile.img} />
                            </div>
                        </div>
                        <div className='font-bold text-1xl'>
                            <h1 >Name:{profile.name} </h1>
                            <h1 >Email:{profile.email} </h1>
                            <h1 >Phone:{profile.phone} </h1>
                            <h1 >Address:{profile.address} </h1>
                            <h1 >Education:{profile.education} </h1>
                            <h1 >Social Media</h1>
                            <h1 >LinkdIn:{profile.linkdin}</h1>
                            <h1 >Facebook: {profile.facebook}</h1>
                        </div>
                        <button class="btn btn-active mt-10" onClick={() => navigate("/updateProfile")}>update</button>
                    </div>
                </>)
            }
        </div>
    );
};

export default MyProfile;