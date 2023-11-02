'use client';
import Link from "next/link";
import Image from "next/image";
import { navVariants } from "../utils/motion";
import { motion } from "framer-motion";
import { useState } from "react";


const Navbar = () => {

   const [isOpen, setOpen] = useState(false);

   const toggleNavbar = () => {
       setOpen(!isOpen);
     };

   const NavLinks = [
    {name: 'Home', path: '/'},
    {name: 'Features', path: '/features'},
    {name: 'Resume', path: '/resume'},
    {name: 'Contact', path: '/contact'},
   ]
  return (
   <motion.nav
   variants={navVariants}
   initial= 'hidden'
   whileInView='show'
   className="w-full h-20 sticky top-0 z-50 backdrop-blur-2xl transition-colors mx-auto  border-b-[1px] border-b-gray-600 px-4 py-6"
  >
    <div className="w-10/12 mx-auto flex justify-between items-center">
    <Link href='/'>
      <h2 className="text-3xl font-semibold">Akinwale</h2>
      <img 
       src="line.png"
       alt="vector"
       className="w-[120px]"
      />
     </Link>
     <div className="hidden md:flex gap-[26px] justify-between items-center">
        {
            NavLinks.map((Links) => (
                <div key={Links.name}>
                    <Link className="text-sm hover:text-purple-500 hover:underline hover:underline-offset-8" href={Links.path}>{Links.name}</Link>
                    </div>
            ))
        }
     </div>
     <div className="block md:hidden">
   
                 <button  onClick={toggleNavbar}>
                  {
                    isOpen ? ( <img className='cursor-pointer' src='/close.png' alt='vector' /> )
                     : ( <img className='cursor-pointer' src='/vector.png' alt='vector' />)
                    
                  }
                 </button>
                
              
     </div>

    </div>
    
  </motion.nav>
  )
}

export default Navbar