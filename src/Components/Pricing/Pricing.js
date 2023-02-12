import React from 'react';
import Priceoption from '../Priceoption/Priceoption';


const Pricing = () => {
    const pricingOption=[
        {id: 1, name:'free' ,price:0,features:[
            'Awesome feature1',
            'Very good ',
            'high rated',
            'will never use']},
        {id: 2, name:'Medium' ,price:1222,features:[
            'Awesome feature2',
            'Very good ',
            'high rated',
            'will never use'


        ]},
        {id: 3, name:'Premium' ,price:15222,features:[
            'Awesome feature3',
            'Very good ',
            'high rated',
            'will never use'


        ]},


    ]
    return (
        <div>
            <h2 className='text-5xl font-bold bg-slate-500 p-12 text-white'> Best deal of town!</h2>
          <div className='grid md:grid-cols-3 gap-3 mt-4'>
          {
                pricingOption.map(option=><Priceoption key={option.id} option={option}></Priceoption>)
            }

          </div>
          <div>
     
          
          </div>
</div>
    );
};

export default Pricing;