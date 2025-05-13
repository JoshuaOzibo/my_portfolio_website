import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Skill from '@/components/Skill'
import Experience from '@/components/Experience'

export default function Home() {
  return (
    <main className=''>
      <Hero />
      <Projects />
      <Experience />
      <Skill />
      <Contact />
    </main>
  )
} 