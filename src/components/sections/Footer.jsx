import Wrapper from "../utils/Wrapper";
import { BsTelephoneInbound } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import SocialMedias from "../common/SocialMedias";


function Footer() {
    const date = new Date();
    let year = date.getFullYear();
  return (
    <div>
      <Wrapper>
        <div className="footer flex justify-between p-2">
          <div className="email flex justify-between gap-6 h-24">
            <div className="telephone flex gap-3 items-center text-[#84858E]">
              <BsTelephoneInbound />
              <p>0780922562</p>
            </div>
            <div className="email-address flex gap-3 items-center text-[#84858E]">
              <MdOutlineEmail />
              <p>leonndayishimiye10@gmail.com</p>
            </div>
          </div>
          <div className="social-medias">
            <div className="icons">
              <SocialMedias />
            </div>
            <div className="right-reserved pt-2 text-[#84858E]">
              <p>@{year} All rights reserved</p>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default Footer