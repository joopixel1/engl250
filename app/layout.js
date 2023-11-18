import { Crimson_Pro } from 'next/font/google'
import './globals.css'


const crimson_pro = Crimson_Pro({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={crimson_pro.className}>
        <div className="absolute left-0 right-0 top-0">
          <div className="absolute left-16 top-0 overflow-visible opacity-50">
            <div className="circle-obj absolute h-[900px] w-[700px] rounded-[40rem] mix-blend-multiply"></div>
          </div>
          <div className="absolute left-82 top-28 overflow-visible opacity-50">
            <div className="circle-obj2 absolute h-[600px] w-[600px] rounded-[40rem] mix-blend-multiply"></div>
          </div>
          <div className="absolute left-50 top-32 overflow-visible opacity-50">
            <div className="circle-obj3 absolute h-[600px] w-[600px] rounded-[40rem] mix-blend-multiply"></div>
          </div>
        </div>
        
        {children}
      </body>
    </html>
  )
}