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
   className="flex justify-between items-center w-10/12 mx-auto py-6"
  >

    
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

     <div  className={` absolute left-0 pb-3 flex flex-col w-[50%] h-screen gap-5 mt-10 items-start bg-primary-black px-4 mb-4 z-[1] font-titleFont md:hidden ${isOpen ?'top-20 ':'top-[-490px]' }`}>
        {
                    NavLinks.map((link) => (
                        <div className='lg:mt-5 xs:mt-2  ' key={link.name}>
                           <Link className='xs:text-xs px-6' href={link.path}>{link.name}</Link>
                          </div>
                    ))
                   }
                   </div>
  </motion.nav>
  )
}

export default Navbar