import Wrapper from "../utils/Wrapper";
import photo1 from "../../assets/images/web-development.png";
import photo2 from "../../assets/images/app-development.png";
import photo3 from "../../assets/images/scalable-computing.png";
import photo4 from "../../assets/images/hosting-services.png";
import "../../styles/service.css";

function Services() {
  return (
    <div className="services-section">
      <div className="overlay" id="services">
        <Wrapper>
          <div className="service-header">
            <div className="big-small-header flex justify-center items-center flex-col gap-1">
              <h5 className="text-[#f8fafc]">|| Services</h5>
              <div className="big-header text-[#f8fafc]">
                <h1 className="text-3xl font-bold text-[#84858E]">
                  Service Provided To My Clients
                </h1>
              </div>
            </div>
            <div className="slide pt-8 mb">
              <div className="service-cards grid grid-cols-3 gap-4">
                <div className="cards h-64 flex justify-center items-center flex-col gap-3 p-8 bg-[#08182F] rounded-md">
                  <div className="icon-image1">
                    <img
                      src={photo4}
                      alt="No web photo"
                      className="h-48 w-48"
                    />
                  </div>
                  <h1 className="font-bold text-[#84858E]">Web Development</h1>
                </div>
                <div className="cards h-64 flex justify-center items-center flex-col gap-3 p-8 bg-[#08182F] rounded-md">
                  <div className="icon-image1">
                    <img
                      src={photo4}
                      alt="No web photo"
                      className="h-48 w-48"
                    />
                  </div>
                  <h1 className="font-bold text-[#84858E]">
                    Mobile App Development
                  </h1>
                </div>
                <div className="cards h-64 flex justify-center items-center flex-col gap-3 p-8 bg-[#08182F] rounded-md">
                  <div className="icon-image1">
                    <img
                      src={photo3}
                      alt="No web photo"
                      className="h-48 w-48"
                    />
                  </div>
                  <h1 className="font-bold text-[#84858E]">Graphic Design</h1>
                </div>
              </div>
            </div>
            <div className="slide mt-3">
              <div className="service-cards grid grid-cols-3 gap-4">
                <div className="cards h-64 flex justify-center items-center flex-col gap-3 bg-[#08182F] rounded-md">
                  <div className="icon-image1">
                    <img
                      src={photo4}
                      alt="No web photo"
                      className="h-48 w-48"
                    />
                  </div>
                  <h1 className="font-bold text-[#84858E]">Web Services</h1>
                </div>
                <div className="cards h-64 flex justify-center items-center flex-col gap-3 p-8 bg-[#08182F] rounded-md">
                  <div className="icon-image1">
                    <img
                      src={photo4}
                      alt="No web photo"
                      className="h-48 w-48"
                    />
                  </div>
                  <h1 className="font-bold text-[#84858E]">Cloud Computing</h1>
                </div>
                <div className="cards h-64 flex justify-center items-center flex-col gap-3 p-8 bg-[#08182F] rounded-md">
                  <div className="icon-image1">
                    <img
                      src={photo4}
                      alt="No web photo"
                      className="h-48 w-48"
                    />
                  </div>
                  <h1 className="font-bold text-[#84858E]">Photographing</h1>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
}

export default Services;
