'use client'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { TitleText, TypingText } from "./CustomTexts";
import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "@/utils/motion";
import { FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";

const Hero = () => {
    const [text] = useTypewriter({
        words: ["I am an Entrepreneur", "Real Estate Agent", "Also in Tech Sales"],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
      });
  return (
    <section className="w-10/12 mx-auto mt-10 flex flex-col-reverse md:flex-row justify-between items-center">
    <motion.div 
     variants={staggerContainer}
     initial='hidden'
     whileInView='show'
     viewport={{once: false, amount: 0.25}} 
      className="flex flex-col lg:max-w-x w-fulll"
     >

     <TypingText 
      title=" | Welcome to my world"
     />
     <TitleText 
      title={<>Hi, I'm <span className="text-purple-400">Bakare Akinwale John</span></>}
     />
     <h2 className="text-4xl font-bold text-white">
           <span>{text}</span>
          <Cursor cursorStyle="|" cursorColor="#ff014f" />
        </h2>
        <motion.div 
       variants={textVariant(1.2)}>
        <p className="mt-5 max-w-md text-sm leading-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, vitae iure. 
            Sunt esse consectetur mollitia cupiditate doloremque, quae culpa quos id dolorem error recusandae magnam, 
            optio ipsam incidunt corporis temporibus!</p>
            </motion.div>
            <motion.div
              variants={textVariant(1.5)}
              className="mt-10 flex flex-col"
              >
            <h2 className="uppercase text-2xl font-semibold mb-5 ">Find me on</h2>
            <motion.div   
            variants={textVariant(1.8)}
             className="flex gap-5 items-center"
            >
               <FaFacebookF className=" w-16 h-10  cursor-pointer hover:text-red-400 hover:border hover:shadow-2xl hover:rounded-full p-2 " />
               <FaYoutube className=" w-16 h-10  cursor-pointer hover:text-red-400 hover:border hover:shadow-2xl hover:rounded-full p-2 "  />
               <FaLinkedinIn className=" w-16 h-10  cursor-pointer hover:text-red-400 hover:border hover:shadow-2xl hover:rounded-full p-2 "  />
            </motion.div>
        </motion.div>
     </motion.div>
     <div className="mb-20 md:mb-0"
    
     >
    <img  
     src="/bannerImg.png"
     alt="banner"
     className="object-contain"
    />
     </div>
     <p className="border-b-[2px] border-slate-600"></p>
     </section>
  )
}

export default Hero