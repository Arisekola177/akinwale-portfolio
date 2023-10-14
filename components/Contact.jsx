
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const Contact = () => {

    const onSubmit = (data) => {
        console.log('Form Submitted', data)
        reset();
    }
   
  return (
    <div className='w-full mt-28 sm:mb-20 lg:mb-36'>
         <h1 className= 'text-center uppercase text-3xl font-semibold'>Contact </h1>
        <div className='md:w-9/12 md:mx-auto sm:w-full lg:mt-20 sm:mt-10 grid grid-cols-1 md:grid-cols-2'>
              <div className='hidden md:block mt-10 '>
                  
                  <img src='/bannerImg.png' alt='bannerImg' className='w-[50%] h-[40%] bg-white border rounded-md' />
                   
                      <div className='flex flex-col mt-5 mb-5'>
                            <h1 className='text-xl font-semibold leading-3'>Bakare Akinwale John</h1>
                            <h2 className='font-bold mt-5 text-2xl uppercaase'>Entrepreneur</h2>
                            <p className='max-w-sm text-sm mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, vitae iure</p>
                            <p className='text-sm mt-5'>Phone: +2348064272889</p>
                            <p className='text-sm mt-5'>Email: shuaibazeez14@gmail.com</p>
                      </div>
                       <p className='text-base text-primeColor mb-2 '>Find me in</p>
                       <div className='flex items-center gap-4'>
                       <FaInstagram />
                        <FaTwitter />
                        <FaFacebook/>
                        <FaLinkedin />
                       </div>
              </div>
              <div className='w-full shadow-2xl border border-none rounded-md'>
                <div className='px-20 py-10'>
                <h1 className='text-primeColor text-xl font-semibold mb-1 '>Questions or need assistance?</h1>
                   <h1 className='text-primeColor text-xl font-semibold mb-2'> Let us know  about it!</h1>
                   <p className='block text-xs md:hidden'>Email us below to any question related 
                         to our services</p>
                    <div className='mt-5 '>
                           <div>
                            <div className='mb-5 w-full'>
                                 <input className='w-full px-5 bg-secColor border-white border text-sm py-2 outline-none text-black' placeholder='First Name' type='text' id='First Name'/>
                            </div>
                            <div className='block mb-5 md:hidden'>
                                <input className='w-full px-5 bg-secColor border-white border text-sm py-2 outline-none text-black' placeholder='Topic' />
                            </div>
                            <div className='mb-5'>
                                <input className='block w-full px-5 bg-secColor border-white border text-sm py-2 outline-none text-black' placeholder='Mail' />
                              
                            </div>
                            <div>
                                <textarea className='w-full h-32 px-5 bg-secColor border-white border text-sm py-2 outline-none text-black' placeholder='Message'  />
                            </div>
                            <div className='w-32 mt-10 mx-auto bg-gradient-to-r from-fthColor to-primeColor rounded-sm shadow-md'>
                             <button className='text-xs cursor-pointer py-3 px-8 hover:bg-black hover:text-white'>Submit</button>
                            </div>
                            </div>
                          
                            <div className='block mt-5 md:hidden'>
                            <p className='text-base text-center text-primeColor mb-5 '>Find me on</p>
                             <div className='flex items-center gap-4 justify-center'>
                              <FaInstagram />
                              <FaTwitter />
                               <FaFacebook/>
                               <FaLinkedin />
                             </div>  
                            </div>
                       
                    </div>

              </div>

                </div>
               
        </div>
    </div>
  )
}

export default Contact