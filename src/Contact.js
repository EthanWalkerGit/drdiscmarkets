import { Nav } from './components'; 
import { ContactUs } from './sections';

export default function Contact() {
  return (
    <main className='relative bg-black h-screen w-full flex flex-col justify-between overflow-y-scroll'>
      <section className="fixed w-full">
        <Nav />
      </section>
      <section>
        <ContactUs />
      </section>
    </main>
  )
}