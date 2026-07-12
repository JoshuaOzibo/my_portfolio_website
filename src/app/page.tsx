import Hero from '@/components/Hero'
import AboutSlide from '@/components/AboutSlide'
import ApproachSlide from '@/components/ApproachSlide'
import Projects from '@/components/Projects'
import Skill from '@/components/Skill'
import Experience from '@/components/Experience'
import OverView from '@/components/OverView'

export default function Home() {
  return (
    <main className=''>
      <Hero />
      <AboutSlide />
      <ApproachSlide />
      <OverView />
      <Projects />
      <Experience />
      <Skill />
       {/* <Contact /> */}
    </main>
  )
} 