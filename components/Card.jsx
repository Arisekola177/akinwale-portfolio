
import { FaMobile } from "react-icons/fa"
import { FaSalesforce } from "react-icons/fa"
import { FaBuilding } from "react-icons/fa"
import { FaArrowAltCircleRight } from "react-icons/fa"


const Card = () => {
  return (
    <div className="flex flex-col items-center  md:flex-row md:flex-wrap gap-10"> 
    <div className="border-[2px] w-[300px] rounded-md h-auto shadow-2xl border-none p-5">
        <FaMobile className="text-purple-600 text-6xl  mb-2" />
        <h1 className="text-lg uppercase font-semibold mb-2">Tech Sales</h1>
        <p className="text-sm mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <FaArrowAltCircleRight className="text-xl  cursor-pointer hover:translate-x-7 hover:ease-out hover:duration-300" />
    </div>
    <div className="border-[2px] w-[300px] rounded-md h-auto shadow-2xl border-none p-5">
        <FaBuilding className="text-purple-600 text-6xl  mb-2" />
        <h1 className="text-lg uppercase font-semibold mb-2">Real Estate Agent</h1>
        <p className="text-sm mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <FaArrowAltCircleRight className="text-xl  cursor-pointer hover:translate-x-7 hover:ease-out hover:duration-300" />
    </div>
    <div className="border-[2px] w-[300px] rounded-md h-auto shadow-2xl border-none p-5">
        <FaSalesforce className="text-purple-600 text-6xl  mb-2" />
        <h1 className="text-lg uppercase font-semibold mb-2">Business Development</h1>
        <p className="text-sm mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <FaArrowAltCircleRight className="text-xl  cursor-pointer hover:translate-x-7 hover:ease-out hover:duration-300" />
    </div>
    <div className="border-[2px] w-[300px] rounded-md h-auto shadow-2xl border-none p-5">
        <FaMobile className="text-purple-600 text-6xl  mb-2" />
        <h1 className="text-lg uppercase font-semibold mb-2">Tech Sales</h1>
        <p className="text-sm mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <FaArrowAltCircleRight className="text-xl  cursor-pointer hover:translate-x-7 hover:ease-out hover:duration-300" />
    </div>
    <div className="border-[2px] w-[300px] rounded-md h-auto shadow-2xl border-none p-5">
        <FaBuilding className="text-purple-600 text-6xl  mb-2" />
        <h1 className="text-lg uppercase font-semibold mb-2">Real Estate Agent</h1>
        <p className="text-sm mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <FaArrowAltCircleRight className="text-xl  cursor-pointer hover:translate-x-7 hover:ease-out hover:duration-300" />
    </div>
    <div className="border-[2px] w-[300px] rounded-md h-auto shadow-2xl border-none p-5">
        <FaSalesforce className="text-purple-600 text-6xl  mb-2" />
        <h1 className="text-lg uppercase font-semibold mb-2">Business Development</h1>
        <p className="text-sm mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <FaArrowAltCircleRight className="text-xl  cursor-pointer hover:translate-x-7 hover:ease-out hover:duration-300" />
    </div>
    </div>
  
  )
}

export default Card