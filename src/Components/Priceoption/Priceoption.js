import React from 'react';
import Feature from '../Feature/Feature';

const Priceoption = ({option}) => {
    const {features}=option;
    return (
        <div className='bg-indigo-200 m-4 rounded-md p-4'>
           <div>
           <h1><span className='text-5xl font-bold text-white'>{option.price}</span>
            <span className='text-2xl'>/mon</span>
            </h1> 
            <p>{option.name}</p>
           </div>
           {
            features.map((feature,idx)=><Feature key={idx} feature={feature}></Feature>)
           }
           <button className='bg-green-500 mt-2 w-full p-2 rounded-md font-bold'>Buy Now</button>
        </div>
    );
};

export default Priceoption;