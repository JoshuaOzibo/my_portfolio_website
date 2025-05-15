import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skill from '@/components/Skill'
import Experience from '@/components/Experience'
import OverView from '@/components/OverView'

export default function Home() {
  return (
    <main className=''>
      <Hero />
      <OverView />
      <Projects />
      <Experience />
      <Skill />
       {/* <Contact /> */}
    </main>
  )
} 