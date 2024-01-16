import Button from '../components/Button';

function Hero() {

    return (
    <div>
        <div className='flex flex-col justify-center items-center'>
            <div>

            </div>
            <div>
                <div style={{ 
                        backgroundImage: 'linear-gradient(110deg, #47B8C1, #4066BF)', 
                        backgroundClip: 'text',
                        color: 'transparent',
                        WebkitBackgroundClip: 'text'  // For WebKit browsers like Chrome and Safari
                    }} className='text-center font-bold text-[40px]'>
                    Hi, I'm Alvin—crafting digital brilliance through code and <br/>
                    design as a Front-end Developer and UI/UX Designer.
                </div>
                <div className='text-white font-medium text-center text-[24px]'>
                    a Bali-based Front-end Developer and UI/UX Designer, I turn visions into <br/> interactive wonders. Let's redefine user experiences together! 🌟
                </div>
            </div>
            <div className='mt-4'>
                <Button/>
            </div>
        </div>
    </div>
    )
  }
  
export default Hero