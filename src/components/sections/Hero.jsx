import { PiMouseScroll } from 'react-icons/pi'
import heropic from '../../assets/images/heropic.jpg'
import SocialMedias from '../common/SocialMedias'
import '../../styles/Scroll.css'

function Hero() {
  return (
    <div className='absolute flex flex-col items-center justify-center gap-3 top-16'>
        <img src={heropic} alt="No Hero photo" className='w-98 h-98 rounded-xl'/>
        <div className="social-medias">
          <SocialMedias />
        </div>
        <div className='w-64  pt-32 pb-0 flex justify-center items-center' >
          <PiMouseScroll className='scroll-icon z-40 cursor-pointer text-3xl text-pink-400'/>
        </div>
    </div>
  )
}

export default Hero