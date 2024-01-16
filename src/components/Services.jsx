import Button from '../components/Button';
import CardService from '../components/CardService';

function Services() {

    return (
    <div>
        <div style={{ 
                        backgroundImage: 'linear-gradient(110deg, #47B8C1, #4066BF)', 
                        backgroundClip: 'text',
                        color: 'transparent',
                        WebkitBackgroundClip: 'text'  // For WebKit browsers like Chrome and Safari
                    }} className='font-bold text-[40px]'>
            Crafting Digital Experiences
        </div>
        <div className='text-white font-medium text-[24px]'>
            I blend code and creativity to shape seamless, user-centric journeys. <br/>
            From elegant interfaces to responsive front-end solutions
        </div>
        <div className='mt-4'>
            <CardService/>
        </div>
    </div>
    )
  }
  
export default Services