import { FaXTwitter } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { RiFacebookBoxLine } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";

function SocialMedias() {
  return (
    <div className="s-medias text-[#84858E] text-2xl flex flex-row gap-2">
        <FaXTwitter className="cursor-pointer"/>
        <RiFacebookBoxLine className="cursor-pointer"/>
        <CiYoutube className="cursor-pointer"/>
        <CiInstagram  className="text-[#08182F] cursor-pointer"/>
        <CiLinkedin className="text-[#08182F]"/>
    </div>
  )
}

export default SocialMedias