import { Nav } from './components'; 
import { AboutUs } from './sections';

export default function About() {
  return (
    <main className='relative bg-black h-screen w-full flex flex-col justify-between overflow-y-scroll'>
      <section className="fixed w-full">
        <Nav />
      </section>
      <section>
        <AboutUs />
      </section>
    </main>
  )
}