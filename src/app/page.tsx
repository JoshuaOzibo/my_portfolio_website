import Hero from '@/components/Hero'
import AboutSlide from '@/components/AboutSlide'
import ApproachSlide from '@/components/ApproachSlide'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className=''>
      <Hero />
      <AboutSlide />
      <ApproachSlide />
      <Experience />
      <Contact />
    </main>
  )
}