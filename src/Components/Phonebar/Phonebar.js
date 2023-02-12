import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar, BarChart,Tooltip,XAxis, YAxis } from 'recharts';

const Phonebar = () => {
    const [phones,setPhones]=useState([]);
    useEffect(()=>{
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res =>res.json())
        // .then(data=>console.log(data));
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data=>{
            const phoneLoaded= data.data.data;
            const phonedata=phoneLoaded.map( phone=> {
                const parts=phone.slug.split('-')
                const price=parseInt(parts[1])
                const singlephone={
                    name: phone.phone_name,
                    price: price

                }
                return singlephone;

            })
            setPhones(phonedata);
            console.log(phonedata);

        })

    },[])
    return (
        <div>
            <BarChart width={400} height={200} data={phones}>
          <Bar dataKey="price" fill="#8884d8" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip></Tooltip>
        </BarChart>
        </div>
    );
};

export default Phonebar;