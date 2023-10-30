import NavBar from '@/Components/NavBar'
import '../public/assets/style/app.scss'
import { Inter } from 'next/font/google'
import Footer from "@/Components/Footer"
import '@fontsource/alegreya-sans-sc/400.css';
import '@fontsource/alegreya-sans-sc/700.css';
import '@fontsource-variable/raleway';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Quranic Edu',
  description: 'Learn Quran for better life',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <NavBar/>

              
       {children}
 
      
       <Footer/>
       
      </body>
    </html>
  )
}
