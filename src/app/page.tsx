import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
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