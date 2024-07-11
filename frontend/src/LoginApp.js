import { Nav } from './components'; 
import { Login } from './sections';

const LoginApp = () => {
  return (
    <main className='relative h-screen w-full flex flex-col justify-between overflow-y-scroll'>
      <section className="fixed w-full">
        <Nav />
      </section>
      <section>
        <Login />
      </section>
    </main>
  )
}

export default LoginApp