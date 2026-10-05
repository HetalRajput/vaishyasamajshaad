import React from "react";
import broom0 from "../../assets/places/broom0.png";
// import { MdFlight, MdOutlineLocalHotel } from "react-icons/md";
import { IoIosWifi } from "react-icons/io";
// import { IoFastFoodSharp } from "react-icons/io5";
import { LuHeartHandshake } from "react-icons/lu";
import { FaHandsPraying } from "react-icons/fa6";
import { FaHandHoldingHand } from "react-icons/fa6";
import { Theme_Color } from "../../../Config";

import bglove from '../../assets/Multiformicon/bglove.png'

const Banner = () => {
  return (
    <>
    <div className="dark:bg-gray-900 dark:text-white py-10">
        <section data-aos="fade-up"  data-aos-once="true" className="container flex justify-center">
          <h1 className={`my-8 border-t-[4px] border-t-[3px] border-l-8 h-2 border-r-8 pr-2 border-[rgb(255,20,146)] py-2 pl-2 text-3xl font-bold text-[rgb(255,20,146)]`}>
           About Us
          </h1>
        </section>
    </div>
      <div className="min-h-[550px] bg-gray-100" style={{
              backgroundImage: `url(${bglove}), url(${bglove})`,
              backgroundSize: "contain",
            //   backgroundRepeat: "repeat-x, repeat-x",
              backgroundPosition: "-72px -119px, 13px -121px",
            }}>
        <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0 ">
          <div className="container p-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              {/* Image section */}
              <div data-aos="flip-up"  data-aos-once="true">
                <img
                  src={broom0}
                  alt="biryani img"
                  className="max-w-[450px] h-[450px] w-full mx-auto drop-shadow-[5px_5px_12px_rgba(0,0,0,0.7)] object-cover"
                />
              </div>
              {/* text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0 lg:px-16">
                <h1
                  data-aos="fade-up"  data-aos-once="true"
                  className="text-3xl sm:text-4xl font-bold"
                >
                About Vaishya Samaj Matrimonial
                </h1>
                <p
                  data-aos="fade-up"  data-aos-once="true"
                  className="text-sm text-gray-500 tracking-wide leading-8"
                >
                Welcome to Vaishya Samaj Matrimonial, your trusted partner in finding the perfect match within the Vaishya community. We understand the importance of cultural values and traditions in finding a life partner, and our platform is designed to help individuals connect with like-minded individuals who share similar backgrounds, beliefs, and aspirations.
                  <br />
                </p>
                <div data-aos="zoom-in"  data-aos-once="true" className="grid grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <LuHeartHandshake className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                      <p>Trusted partner</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <FaHandHoldingHand className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                      <p>Perfect match</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <FaHandsPraying className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                      <p>Cultural values</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <IoIosWifi className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                      <p>Vaishya community</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
