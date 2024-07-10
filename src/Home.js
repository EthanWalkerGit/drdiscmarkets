import { Nav } from './components'; 
import { FrontPage, Weekly, ContactFooter } from './sections';

export default function Home() {
  return (
    <main className='relative bg-black h-screen w-full flex flex-col justify-between overflow-y-scroll'>
      <section className="fixed w-full">
        <Nav />
      </section>
      <section>
        <FrontPage />
      </section>
      <section>
        <Weekly />
      </section>
      <section>
        <ContactFooter />
      </section>
    </main>
  )
}