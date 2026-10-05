import React, { useState } from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import Location from "../components/Location/Location";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import banner0 from '.././assets/places/banner0.jpg';
import banner1 from '.././assets/places/banner1.jpg';
import banner2 from '.././assets/places/banner2.jpg';
import { Theme_Color } from "../../Config";
import bglove from "../assets/Multiformicon/bglove.png";
import god1 from "../assets/Multiformicon/god1.png"
import god2 from "../assets/Multiformicon/god2.png";
import god5 from "../assets/Multiformicon/god5.png";
import god6 from "../assets/Multiformicon/god6.png";
import god3 from "../assets/Multiformicon/god3.png";
import god4 from "../assets/Multiformicon/god4.png";

const About = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>About-VaishyaSamajShadi</title>
        </Helmet>
      </HelmetProvider>

      <div className="container pt-2" id="about" style={{
                  backgroundImage: `url(${bglove}), url(${bglove})`,
                  backgroundSize: "inherit",
                  backgroundPosition: "31px -102px, 204px -212px",
                }}>
        <div className="py-10">
          <div className="dark:bg-gray-900 dark:text-white py-10">
            <section data-aos="fade-up"  data-aos-once="true" className="container flex justify-center">
              <h1 className={`my-8 border-t-[4px] border-t-[3px] border-l-8 h-2 border-r-8 pr-2 border-[rgb(255,20,146)] py-2 pl-2 text-3xl font-bold text-[rgb(255,20,146)]`}>
                About Us
              </h1>
            </section>
          </div>

          <section className="overflow-hidden pb-2 mb-4  bg-white dark:bg-dark" > 
        <div className="container mx-auto"  >
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-5/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4" data-aos="fade-down"   data-aos-once="true"  data-aos-delay="200">
                    <img
                      src={god2}
                      alt=""
                      className="w-full h-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4" data-aos="fade-up"  data-aos-once="true"   data-aos-delay="250">
                    <img
                      src={god5}
                      alt=""
                      className="w-full h-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2" data-aos="fade-right"  data-aos-once="true"   data-aos-delay="300">
                  <div className="relative z-10 my-4">
                    <img
                      src={god6}
                      alt=""
                      className="w-full h-full rounded-2xl"
                    />
                    <span className="absolute -right-7 -bottom-7 z-[-1]">
                      <svg
                        width={134}
                        height={106}
                        viewBox="0 0 134 106"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="1.66667"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 1.66667 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 16.3333 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={31}
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 31 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 45.6667 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3334"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 60.3334 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 88.6667 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 117.667 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 74.6667 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={103}
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 103 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={132}
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 132 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.66667"
                          cy="89.3333"
                          r="1.66667"
                          transform="rotate(-90 1.66667 89.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy="89.3333"
                          r="1.66667"
                          transform="rotate(-90 16.3333 89.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={31}
                          cy="89.3333"
                          r="1.66667"
                          transform="rotate(-90 31 89.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy="89.3333"
                          r="1.66667"
                          transform="rotate(-90 45.6667 89.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3333"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 60.3333 89.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 88.6667 89.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 117.667 89.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 74.6667 89.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={103}
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 103 89.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={132}
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 132 89.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.66667"
                          cy="74.6673"
                          r="1.66667"
                          transform="rotate(-90 1.66667 74.6673)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.66667"
                          cy="31.0003"
                          r="1.66667"
                          transform="rotate(-90 1.66667 31.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 16.3333 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy="31.0003"
                          r="1.66667"
                          transform="rotate(-90 16.3333 31.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={31}
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 31 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={31}
                          cy="31.0003"
                          r="1.66667"
                          transform="rotate(-90 31 31.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 45.6667 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy="31.0003"
                          r="1.66667"
                          transform="rotate(-90 45.6667 31.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3333"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 60.3333 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3333"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 60.3333 30.9998)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 88.6667 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 88.6667 30.9998)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 117.667 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 117.667 30.9998)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 74.6667 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 74.6667 30.9998)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={103}
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 103 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={103}
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 103 30.9998)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={132}
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 132 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={132}
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 132 30.9998)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.66667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 1.66667 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.66667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 1.66667 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 16.3333 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 16.3333 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={31}
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 31 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={31}
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 31 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 45.6667 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 45.6667 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3333"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 60.3333 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3333"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 60.3333 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 88.6667 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 88.6667 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 117.667 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 117.667 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 74.6667 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 74.6667 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={103}
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 103 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={103}
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 103 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={132}
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 132 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={132}
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 132 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.66667"
                          cy="45.3333"
                          r="1.66667"
                          transform="rotate(-90 1.66667 45.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.66667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 1.66667 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy="45.3333"
                          r="1.66667"
                          transform="rotate(-90 16.3333 45.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 16.3333 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={31}
                          cy="45.3333"
                          r="1.66667"
                          transform="rotate(-90 31 45.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={31}
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 31 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy="45.3333"
                          r="1.66667"
                          transform="rotate(-90 45.6667 45.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 45.6667 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3333"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 60.3333 45.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3333"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 60.3333 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 88.6667 45.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 88.6667 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 117.667 45.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 117.667 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 74.6667 45.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 74.6667 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={103}
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 103 45.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={103}
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 103 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={132}
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 132 45.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={132}
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 132 1.66683)"
                          fill="#3056D3"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12" >
              <div className="mt-10 lg:mt-0">
                <span className="block mb-4 text-lg font-semibold text-primary">
                </span>
                <h2 className={`mb-5 text-2xl font-bold text-[rgb(255,20,146)] dark:text-white sm:text-3xl`} data-aos="fade-right"  data-aos-once="true"   data-aos-delay="250">
                About Vaishya Samaj Matrimonial
                </h2>
                <p className="mb-5 text-gray-500 tracking-wide leading-8" data-aos="fade-left'"   data-aos-delay="300"  data-aos-once="true">
                Welcome to Vaishya Samaj Matrimonial, your trusted partner in finding the perfect match within the Vaishya community. We prioritize cultural values and traditions, helping individuals connect with like-minded partners.
                </p>
                <p className="mb-8 text-gray-500 tracking-wide leading-8" data-aos="fade-left'"   data-aos-delay="300"  data-aos-once="true">
                Join us today to find a life partner who shares your values and vision for the future.
                </p>
                <a
                 data-aos="zoom-in"
                 data-aos-once="true"
                  href="javascript:void(0)"
                  className={`inline-flex items-center justify-center py-2 text-base font-medium text-center text-white border border-transparent rounded-md px-5 bg-[rgb(255,20,146)] hover:bg-opacity-90`}
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
              </section>
         

          <div className="container mx-auto px-4 py-4">
          <div className="dark:bg-gray-900 dark:text-white py-2">
            <section data-aos="fade-up"  data-aos-once="true" className="container flex justify-center">
              <h1 className={`my-8 border-t-[4px] border-t-[3px] border-l-8 h-2 border-r-8 pr-2 border-[rgb(255,20,146)] py-2 pl-2 text-3xl font-bold text-[rgb(255,20,146)]`} id="mission">
               Our Mission
              </h1>
            </section>
          </div>
            <p className="text-lg text-gray-800 leading-relaxed mb-6"  data-aos="fade-up"  data-aos-once="true">
              At Vaishya Samaj Matrimonial, our mission is to facilitate meaningful connections and lifelong relationships within the Vaishya community. We strive to provide a safe and secure platform where individuals can search for their ideal partner with confidence and convenience.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed mb-6"  data-aos="fade-up"  data-aos-once="true">
              Our dedicated team is committed to ensuring the privacy and security of our users while offering personalized support throughout their matrimonial journey.
            </p>
            <div className="mt-8"  data-aos="fade-up"  data-aos-once="true">
              <h2 className="text-2xl font-bold mb-4">Our Commitment</h2>
              <ul className={`list-disc list-inside text-lg text-gray-800`}>
                <li>Foster meaningful connections and lifelong relationships</li>
                <li>Provide a safe and secure platform for partner search</li>
                <li>Ensure user privacy and confidentiality</li>
                <li>Offer personalized support and assistance</li>
                <li>Strive for user satisfaction and trust</li>
              </ul>
            </div>
          </div>
          <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px">
              <li className="me-2">
                <span
                  className={`cursor-pointer inline-block p-4 border-b-2 rounded-t-lg ${activeTab === "profile"
                    ? `border-[rgb(255,20,146)] text-[rgb(255,20,146)]`
                    : `hover:text-[rgb(255,20,146)] hover:border-[rgb(255,20,146)]`
                    }`}
                  onClick={() => handleTabClick("profile")}
                >
                  Community-Focused Approach
                </span>
              </li>
              <li className="me-2">
                <span
                  className={`cursor-pointer inline-block p-4 border-b-2 rounded-t-lg ${activeTab === "dashboard"
                  ? `border-[rgb(255,20,146)] text-[rgb(255,20,146)]`
                  : `hover:text-[rgb(255,20,146)] hover:border-[rgb(255,20,146)]`
                    }`}
                  onClick={() => handleTabClick("dashboard")}
                >
                  Advanced Matchmaking Technology
                </span>
              </li>
              <li className="me-2">
                <span
                  className={`cursor-pointer inline-block p-4 border-b-2 rounded-t-lg ${activeTab === "settings"
                  ? `border-[rgb(255,20,146)] text-[rgb(255,20,146)]`
                  : `hover:text-[rgb(255,20,146)] hover:border-[rgb(255,20,146)]`
                    }`}
                  onClick={() => handleTabClick("settings")}
                >
                  Simplified User Experience
                </span>
              </li>
              <li className="me-2">
                <span
                  className={`cursor-pointer inline-block p-4 border-b-2 rounded-t-lg ${activeTab === "contacts"
                  ? `border-[rgb(255,20,146)] text-[rgb(255,20,146)]`
                  : `hover:text-[rgb(255,20,146)] hover:border-[rgb(255,20,146)]`
                    }`}
                  onClick={() => handleTabClick("contacts")}
                >
                  Dedicated Team of Professionals
                </span>
              </li>
            </ul>
          </div>

          <br />
          <div className="content"  >
            {activeTab === "profile" && (

              <>
                <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400" data-aos="fade-right"  data-aos-once="true">
                  <li>
                    Tailored specifically for the Vaishya community
                  </li>
                  <li>
                    Values and traditions respected at every step
                  </li>
                  <li>
                    Community-centric approach
                  </li>
                  <li>
                    Platform designed for Vaishya individuals
                  </li>
                </ul>
              </>

            )}
            {activeTab === "dashboard" && (
              <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400" data-aos="fade-right"  data-aos-once="true">
                <li>
                  Utilizes cutting-edge algorithms
                </li>
                <li>
                  Enhances matchmaking precision
                </li>
                <li>
                  Increases likelihood of meaningful connections
                </li>
                <li>
                  Streamlines the matchmaking process
                </li>
              </ul>
            )}
            {activeTab === "settings" && (
              <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400" data-aos="fade-right"  data-aos-once="true">
                <li>
                  Emphasizes simplicity and ease of use
                </li>
                <li>
                  Intuitive design for seamless navigation
                </li>
                <li>
                  Accessible features for all users
                </li>
                <li>
                  Designed for convenience and comfort
                </li>
              </ul>
            )}
            {activeTab === "contacts" && (
              <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400" data-aos="fade-right"  data-aos-once="true">
                <li>
                  Committed to providing exceptional support
                </li>
                <li>
                  Ensure smooth operation and user experience
                </li>
                <li>
                  Provides personalized assistance throughout the journey
                </li>
                <li>
                  Strives for continuous improvement and innovation
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>

      <div className="dark:bg-gray-900 dark:text-white py-10">
            <section data-aos="fade-up"  data-aos-once="true" className="container flex justify-center">
              <h1 className={`my-8 border-t-[4px] border-t-[3px] border-l-8 h-2 border-r-8 pr-2 border-[rgb(255,20,146)] py-2 pl-2 text-3xl font-bold text-[rgb(255,20,146)]`}>
                Our Inspiration
              </h1>
            </section>
          </div>
      <div className="container" data-aos="fade-up" data-aos-once="true"
        data-aos-delay="100">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-4">

          <div className="group cursor-pointer relative">
            <img
              src={god1}
              className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
            />
          </div>


          <div className="group cursor-pointer relative">
            <img
              src={god2}
              className="w-full h-full shadow-lg p-4  object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
            />
          </div>


          <div className="group cursor-pointer relative">
            <img
              src={god3}
              className="w-full h-full shadow-lg p-4  object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
            />
          </div>


          <div className="group cursor-pointer relative">
            <img
              src={god4}
              className="w-full h-full shadow-lg p-4  object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
            />
          </div>


          <div className="group cursor-pointer relative">
            <img
              src={god5}
              className="w-full h-full shadow-lg p-4  object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
            />
          </div>


          <div className="group cursor-pointer relative">
            <img
              src={god6}
              className="w-full h-full shadow-lg p-4  object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
            />
          </div>

          {/* 
          <div className="group cursor-pointer relative">
            <img
              src={god7}
              className="w-full h-full shadow-lg p-4  object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
            />
          </div> */}


        </div>
      </div>
      {/* <Location /> */}
      <BlogsComp />
    </>
  );
};

export default About;
