import React from 'react';
import map from '../../Image/world-map.jpg';
import { BsFillGearFill } from "react-icons/bs";

const GlobalCustomer = () => {
    return (
        <div className='my-16'>
            <h1 className='text-2xl font-bold'>Our Global Customer Base</h1>
            <div class="divider yellow-400"><BsFillGearFill/></div>
            <img src={map} alt="" />
        </div>
    );
};

export default GlobalCustomer;