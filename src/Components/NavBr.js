import React, { useState } from 'react';
import Link from './Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const NavBr = () => {
    const [open,setOpen]=useState(false)
    const routes=[
        {id:1,name:'Home', path:'/home'},
        {id:2,name:'Products', path:'/products'},
        {id:3,name:'About', path:'/about'},
        {id:4,name:'ContactS', path:'/contacts'},
        
    ]
    return (
        <nav className='bg-purple-400 w-full'>
           <div onClick={()=>setOpen(!open)} className="h-6 w-6 text-blue-500 md:hidden">
           {
                open ? <XMarkIcon/>:<Bars3Icon /> 
            }
        
           </div>
             <span>{open? 'open' :'close'}</span>
            <ul className={`bg-purple-400 w-full md:flex justify-center absolute md:static duration-500 ease-in  ${open? 'top-6':'top-[-120px]'}`}>
            {
                routes.map(route=> <Link route={route}></Link>)
            }
           
            </ul>
        </nav>
    );
};

export default NavBr;