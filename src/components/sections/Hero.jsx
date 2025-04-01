import heropic from '../../assets/images/heropic.jpg'

function Hero() {
  return (
    <div>
        <div className="hero-section flex items-center justify-center">
            <img src={heropic} alt="No Hero photo" className='absolute w-98 h-98 rounded-xl  top-16'/>
        </div>
    </div>
  )
}

export default Hero