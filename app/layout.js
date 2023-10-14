import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './globals.css'


export const metadata = {
  title: 'Akinwale',
  description: 'Entrepreneur',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='font-bodyFont bg-primary-black text-white w-full'>
        
        <Navbar />
        
         {children}
         
       
        <Footer />
        
        </body>
    </html>
  )
}
