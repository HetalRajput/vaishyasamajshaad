import React from "react";
import FooterLogo from "../../assets/logo4.png";
import {
  FaFacebook,
  FaInstagram,
  FaLocationArrow,
  FaMobileAlt,
  FaWhatsapp,
  FaAngleRight
} from "react-icons/fa";
// import NatureVid from "../../assets/video/footer.mp4";
import banner2 from '../../assets/places/banner2.jpg'
import { Link } from "react-router-dom";
import { Theme_Color } from "../../../Config";

const FooterLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];
const OurServices = [

  {
    title: "Perfect Matches",
    link: "/perfect-matches",
  },
  // {
  //   title: "Wishlist",
  //   link: "/wishlist",
  // },
];
const About = [
  {
    title: "Our Mission",
    link: "/about#mission",
  },
  {
    title: "Testimonials",
    link: "/about",
  },
  // {
  //   title: "Our Team",
  //   link: "/wishlist",
  // }
];

const Footer = () => {
  return (
    <div className=" dark:bg-gray-950 py-10 relative overflow-hidden " style={{ background: "linear-gradient(45deg, rgb(0,0,1), transparent" }}>
      <img
        src={banner2}
        className="absolute right-0 top-0 h-full overflow-hidden w-full object-cover z-[-1]"
      />
      <div className="container" >
        <div className="grid text-white md:grid-cols-3 py-5 bg-white/80 backdrop-blur-sm rounded-t-xl" style={{ background: "linear-gradient(45deg, #b15285, transparent" }}>
          <div className="py-8 px-4 flex flex-col items-center justify-center">
            <h1 className="flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left">
              <img src={FooterLogo} style={{ filter: "brightness(5.5)" }} alt="FooterLogo" className="max-h-[100px]" />
            </h1>
            <p className="text-sm">
              We are all about the Vaishya community. Our platform is made just for Vaishya community individuals, keeping their values and traditions in mind every step of the way.
            </p>
            <br />
            <div className="flex items-center gap-3 ">
              <FaLocationArrow />
              <p>Bhopal, Madhya Pradesh</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaWhatsapp />
              <p>+91-9589330865</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <a href="tel:9521194570">9521194570</a>,<a href="tel:9131737436">9131737436</a>
            </div>
         
            {/* social handles */}
            <div>
              <div className="flex items-center gap-3 mt-6">
                <a href="https://www.instagram.com/vaishyasamajshaadi/" target="_blank">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="https://www.facebook.com/groups/7806633309347817/" target="_blank">
                  <FaFacebook className="text-3xl" />
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link, i) => (
                    <li className={`cursor-pointer hover:translate-x-1 duration-300 hover:!text-[rgb(255,20,146)] space-x-1 text-white dark:text-gray-200`} key={i}>
                      <Link
                        to={link.link}
                        onClick={() => window.scrollTo(0, 0)}
                      >
                         <div className="flex items-center">
                          <FaAngleRight />
                          <span className="ml-1">{link.title}</span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                  Our Services
                </h1>
                <ul className="flex flex-col gap-3">
                  {OurServices.map((link, i) => (
                    <li className={`cursor-pointer hover:translate-x-1 duration-300 hover:!text-[rgb(255,20,146)] space-x-1 text-white dark:text-gray-200`} key={i}>
                      <Link
                        to={link.link}
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        {/* <span>&#11162;</span> */}
                        <div className="flex items-center">
                          <FaAngleRight />
                          <span className="ml-1">{link.title}</span>
                        </div>

                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                  About
                </h1>
                <ul className="flex flex-col gap-3">
                  {About.map((link, i) => (
                    <li className={`cursor-pointer hover:translate-x-1 duration-300 hover:!text-[rgb(255,20,146)] space-x-1 text-white dark:text-gray-200`} key={i}>
                      <Link
                        to={link.link}
                        onClick={() => window.scrollTo(0, 0)}
                      >
                         <div className="flex items-center">
                          <FaAngleRight />
                          <span className="ml-1">{link.title}</span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={`text-center py-5 border-t-2 border-gray-300/50 bg-[rgb(255,20,146)] text-white`}>
            @copyright 2024 All rights reserved || Made with ❤️ by Vaishya Samaj Shaadi
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
