'use client'
import Link from "next/link";
import { FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="w-10/12 mx-auto mt-10 flex  py-3 flex-col md:flex-row justify-between items-center">
    <div 
      className="flex flex-col lg:max-w-x w-fulll"
     >
      <Link href='/'>
      <h2 className="text-3xl font-semibold">Akinwale</h2>
      <img 
       src="line.png"
       alt="vector"
       className="w-[120px]"
      />
     </Link>
     <div
              >
            <h2 className="text-2xl font-semibold mb-5 mt-10">Find me in</h2>
            <div className='flex items-center gap-5 mt-10'>
               <FaFacebookF />
               <FaYoutube   />
               <FaLinkedinIn/>
            </div>
        </div>
      </div>
      <div className='flex flex-col gap-5 mt-10 md:mt-0 text-center '> 
        <h1>Useful Links</h1>
        <Link href='/'>
          Home
        </Link>
        <Link href='/about'>
          About
        </Link>
        <Link href='/features'>
          Features
        </Link>
      

      </div>
      <div className="mt-10 text-center"> 
        <h1 className=" mb-6">Subscribe to my Newsletter</h1>
        <input className="py-2 px-4  rounded-lg" type="email"  placeholder='Enter your email' />
        <div className="mt-5 bg-blue-500  text-center  rounded-lg hover:bg-blue-900">
        <button className="px-4 py-2 ">Submit</button>
        </div>
        
      </div>
    </section>
  )
}

export default Footer