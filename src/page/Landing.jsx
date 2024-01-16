import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Hero from '../components/Hero';
import Services from '../components/Services';

function Landing() {

    return (
    <div className='bg-[#1E1F2A] w-screen h-screen'>
        <div>
            <Navbar />
        </div>
            <Hero />
            <Services />
    </div>
    )
  }
  
export default Landing