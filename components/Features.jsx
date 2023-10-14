'use client'
import { staggerContainer } from "@/utils/motion"
import { TypingText } from "./CustomTexts"
import { motion } from "framer-motion"
import Card from "./Card"

const Features = () => {
  return (
    <section className="w-10/12 mx-auto mt-20">
      
    <motion.div 
     variants={staggerContainer}
     initial='hidden'
     whileInView='show'
     viewport={{once: false, amount: 0.25}} >

      <TypingText title="| Services"  />

      <h1 className="text-3xl uppercase font-semibold mt-10"> What i do</h1>
      <div className="mt-10 ">
         <Card />
      </div>

        </motion.div>
    </section>
  )
}

export default Features