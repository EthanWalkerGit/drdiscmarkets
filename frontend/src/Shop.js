import { Nav } from './components'; 
import { Grid } from './sections';

export default function Shop() {
  return (
    <main className='relative bg-black h-screen w-full flex flex-col justify-between overflow-y-scroll'>
      <section className="fixed w-full">
        <Nav />
      </section>
      <section>
        <Grid />
      </section>
    </main>
  )
}