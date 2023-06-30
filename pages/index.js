import Image from 'next/image'
import { Inter } from 'next/font/google'
import Landing from '@/Components/Home/Landing'
import Clients from '@/Components/Home/Clients'
import Features from '@/Components/Home/Features'
import Who from '@/Components/Home/Who'
import Services from '@/Components/Home/Services'
import Projects from '@/Components/Home/Projects'
import Seo from '@/Components/Home/Seo'
import Fact from '@/Components/Home/Fact'
import Say from '@/Components/Home/Say'
import Contact from '@/Components/Home/Contact'
import NavBar from '@/Components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="md:min-w-screen bg-white">
    
      <section className='md:min-w-screen md:min-h-[127vh] max-w-screen'>
        <Landing/>
      </section>
        <Clients />
        <Features />
        <Who />
        <Services />
        <Projects />
        <Seo/>
        <Fact/>
        <Say/>
        <Contact/>
    </main>
  )
}
