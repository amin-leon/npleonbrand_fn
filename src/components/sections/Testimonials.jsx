import Wrapper from "../utils/Wrapper";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
import '../../styles/Section.css'

function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="testimonials-section bg-white">
      <div className="overlay_testim" id="services">
        <Wrapper>
          <div className="service-header">
            <div className="big-small-header flex justify-center items-center flex-col gap-1">
              <h5 className="text-blue-600">|| Testimonials</h5>
              <div className="big-header text-[#f8fafc]">
                <h1 className="text-3xl font-bold text-blue-600">
                  What Clients Say about our services
                </h1>
              </div>
            </div>
            <Slider {...settings} className="pt-16">
              <div className="slide">
                <div className="service-cards grid grid-cols-3 gap-4">
                  <div className="cards h-80 p-10 flex items-center flex-col gap-3 bg-blue-500 rounded-md">
                    <div className="message">
                      <span className="text-3xl text-blue-300">
                        <RiDoubleQuotesL />
                      </span>
                      <p className="text-[#f8fafc]">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text
                      </p>
                      <span className="text-3xl text-blue-300">
                        <RiDoubleQuotesR />
                      </span>
                    </div>
                    <div className="flex justify-center items-center  gap-4 flex-row-reverse">
                      <div>
                        <h1 className="font-bold text-[#f8fafc]">
                          Innox Muragijimana
                        </h1>
                        <p className="font-bold text-[#84858E] text-sm">
                          Cofounder- Evotech
                        </p>
                      </div>
                      <img
                        src="https://plus.unsplash.com/premium_photo-1710911198710-3097c518f0e1?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="w-12 h-12 rounded-md text-center"
                      />
                    </div>
                  </div>
                  <div className="cards h-80 p-10 flex items-center flex-col gap-3 bg-blue-500 rounded-md">
                    <div className="message">
                      <span className="text-3xl text-blue-300">
                        <RiDoubleQuotesL />
                      </span>
                      <p className="text-[#f8fafc]">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy textLorem Ipsum has been the
                        industry's standard dummy text
                      </p>
                      <span className="text-3xl text-blue-300">
                        <RiDoubleQuotesR />
                      </span>
                    </div>
                    <div className="flex justify-center items-center gap-4 flex-row-reverse">
                      <div>
                        <h1 className="font-bold text-[#f8fafc]">NP Leon</h1>
                        <p className="font-bold text-[#84858E] text-sm">
                          CEO- Nplcodes
                        </p>
                      </div>
                      <img
                        src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="w-12 h-12 rounded-md text-center"
                      />
                    </div>
                  </div>
                  <div className="cards h-80 p-10 flex items-center flex-col gap-3 bg-blue-500 rounded-md">
                    <div className="message">
                      <span className="text-3xl text-blue-300">
                        <RiDoubleQuotesL />
                      </span>
                      <p className="text-[#f8fafc]">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text
                      </p>
                      <span className="text-3xl text-blue-300">
                        <RiDoubleQuotesR />
                      </span>
                    </div>
                    <div className="flex justify-center items-center gap-4 flex-row-reverse">
                      <div>
                        <h1 className="font-bold text-[#f8fafc]">
                          Leon Andela
                        </h1>
                        <p className="font-bold text-[#84858E] text-sm">
                          Developer- Andela, Rwanda
                        </p>
                      </div>
                      <img
                        src="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?q=80&w=1641&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="w-12 h-12 rounded-md text-center"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="service-cards grid grid-cols-3 gap-4">
                  <div className="cards h-80 p-10 flex items-center flex-col gap-3 bg-blue-500 rounded-md">
                    <div className="message">
                      <span className="text-3xl text-blue-300">
                        <RiDoubleQuotesL />
                      </span>
                      <p className="text-[#f8fafc]">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text
                      </p>
                      <span className="text-3xl text-blue-300">
                        <RiDoubleQuotesR />
                      </span>
                    </div>
                    <div className="flex justify-center items-center gap-4 flex-row-reverse">
                      <div>
                        <h1 className="font-bold text-[#f8fafc]">
                          Prudent Ngirinshuti
                        </h1>
                        <p className="font-bold text-[#84858E] text-sm">
                          Senior developer- BK Tech House
                        </p>
                      </div>
                      <img
                        src="https://plus.unsplash.com/premium_photo-1710911198710-3097c518f0e1?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="w-12 h-12 rounded-md text-center"
                      />
                    </div>
                  </div>
                  <div className="cards h-80 p-10 flex items-center flex-col gap-3 bg-blue-500 rounded-md">
                    <div className="message">
                      <span className="text-3xl text-blue-300">
                        <RiDoubleQuotesL />
                      </span>
                      <p className="text-[#f8fafc]">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text
                      </p>
                      <span className="text-3xl text-blue-300">
                        <RiDoubleQuotesR />
                      </span>
                    </div>
                    <div className="flex justify-center items-center gap-4 flex-row-reverse">
                      <div>
                        <h1 className="font-bold text-[#f8fafc]">
                          Innox Muragijimana
                        </h1>
                        <p className="font-bold text-[#84858E] text-sm">
                          Cofounder- Evotech
                        </p>
                      </div>
                      <img
                        src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=1644&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="w-12 h-12 rounded-md text-center"
                      />
                    </div>
                  </div>
                  <div className="cards h-80 p-10 flex items-center flex-col gap-3 bg-blue-500 rounded-md">
                    <div className="message">
                      <span className="text-3xl text-blue-300">
                        <RiDoubleQuotesL />
                      </span>
                      <p className="text-[#f8fafc]">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever
                      </p>
                      <span className="text-3xl text-blue-300">
                        <RiDoubleQuotesR />
                      </span>
                    </div>
                    <div className="flex justify-center items-center gap-4 flex-row-reverse">
                      <div>
                        <h1 className="font-bold text-[#f8fafc]">
                          Innox Muragijimana
                        </h1>
                        <p className="font-bold text-[#84858E] text-sm">
                          Cofounder- Evotech
                        </p>
                      </div>
                      <img
                        src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="w-12 h-12 rounded-md text-center"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </Wrapper>
      </div>
    </div>
  );
}

export default Testimonials;
