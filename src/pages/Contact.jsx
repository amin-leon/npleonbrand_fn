import SubHeroSection from "../components/sections/SubHeroSection";
import { Facebook, Mail, Twitter } from "lucide-react";
import Wrapper from "../components/utils/Wrapper";

export default function Contact() {
  return (
    <div className="w-screen">
      <div className="w-full">
        <SubHeroSection title="Contact Me" navigateTo="Home" />
      </div>
      <Wrapper>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-32 px-8 bg-white border border-gray-300 text-black w-full">
          {/* Contact Form - Takes up 2/3 of the space */}
          <div className="lg:col-span-2">
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Names"
                  className="border border-gray-700 bg-transparent p-2 rounded-sm"
                />
                <input
                  type="tel"
                  placeholder="Telephone number"
                  className="border border-gray-700 bg-transparent p-2 rounded-sm"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-gray-700 bg-transparent p-2 rounded-sm"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="border border-gray-700 bg-transparent p-2 rounded-sm"
                />
              </div>
              <textarea
                placeholder="Your message"
                rows="6"
                className="w-full border border-gray-700 bg-transparent p-2 rounded-sm"
              />
              <div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white rounded-sm px-4 py-2 font-medium hover:bg-blue-600"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info - Takes up 1/3 of the space */}
          <div>
            <div className="mb-8 pl-16">
              <h2 className="text-xl font-bold mb-4">Follow Me</h2>
              <div className="flex space-x-4">
                <a
                  href="www.facebook.com"
                  className="p-2  bg-blue-500 rounded-full"
                >
                  <Facebook size={20} className="text-white" />
                </a>
                <a
                  href="www.gmail.com"
                  className="p-2  bg-blue-500 rounded-full"
                >
                  <Mail size={20} className="text-white" />
                </a>
                <a
                  href="www.x.com"
                  className="p-2 bg-blue-500 rounded-full"
                >
                  <Twitter size={20} className="text-white" />
                </a>
              </div>
            </div>

            <div className="text-black pl-16">
              <h2 className="text-xl font-bold mb-4">Contact Info</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400">Email:</p>
                  <p>leonndayishimiye10@gmail.com</p>
                </div>
                <div>
                  <p className="text-gray-400">Address:</p>
                  <p>Kigali P.</p>
                </div>
                <div>
                  <p className="text-gray-400">Phone:</p>
                  <p>+250 780 922 562</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}