import { BsFillClipboard2PlusFill } from "react-icons/bs";
import { TbReportSearch } from "react-icons/tb";
import { GiJamesBondAperture } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { getLocalStorageItem } from "../../Storage";

export const Feature = () => {
  const Loggeduser = getLocalStorageItem('Id')
    return (
              <div className="px-4 py-6 mt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div data-aos="fade-down"  data-aos-once="true" className="max-w-xl mb-4 md:mx-auto sm:text-center lg:max-w-2xl">
                  <div>
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase rounded-full text-[rgb(255,20,146)]" >
                    How It Works
                    </p>
                  </div>
                  <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                      <svg
                        viewBox="0 0 52 24"
                        fill="currentColor"
                        className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                      >
                        <defs>
                          <pattern
                            id="18302e52-9e2a-4c8e-9550-0cbb21b38e55"
                            x="0"
                            y="0"
                            width=".135"
                            height=".30"
                          >
                            <circle cx="1" cy="1" r=".7" />
                          </pattern>
                        </defs>
                        <rect
                          fill="url(#18302e52-9e2a-4c8e-9550-0cbb21b38e55)"
                          width="52"
                          height="24"
                        />
                      </svg>
                      {/* <span className="relative">The</span> */}
                    </span>{' '}
                    Find Your Partner In Just Few Steps

                  </h2>
                  <p className="text-base text-gray-700 md:text-lg">
                  Vaishya Samaj Matrimonial will help you find your perfect match with just a few steps. You focus on what is most important to
                  you, we do all the work.
                  </p>
                </div>

                <div className="grid row-gap-8 sm:row-gap-0 sm:grid-cols-2 lg:grid-cols-3" data-aos="fade-down" data-aos-delay="100"  data-aos-once="true">
                <div className="p-8 border-b border-l lg:border-r">
            <div className="max-w-md text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-[rgb(255,20,146)] sm:w-16 sm:h-16">
              <BsFillClipboard2PlusFill className="text-white text-md" />
              </div>
              <h6 className="mb-2 font-semibold leading-5">Register</h6>
              <p className="mb-3 text-sm text-gray-900">
              Register to our website, fill up your profile
completely, and put a beautiful image on your
profile.
              </p>
            </div>
          </div>
          <div className="p-8 border-b sm:border-r lg:border-r">
            <div className="max-w-md text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-[rgb(255,20,146)] sm:w-16 sm:h-16">
              <TbReportSearch className="text-white text-md" />

              </div>
              <h6 className="mb-2 font-semibold leading-5">Find Your Partner!</h6>
              <p className="mb-3 text-sm text-gray-900">
              Search your interests that you like. You'll also be
recommended users based on your preferences.
              </p>
            </div>
          </div>
          <div className="p-8 border-b sm:border-r">
            <div className="max-w-md text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-[rgb(255,20,146)] sm:w-16 sm:h-16">
              <GiJamesBondAperture className="text-white text-md" />

              </div>
              <h6 className="mb-2 font-semibold leading-5">Connect</h6>
              <p className="mb-3 text-sm text-gray-900">
              Add friends, approach them, and chat with them.
Be sure to share your audio, photo, and video
too.
              </p>
            </div>
          </div>


        </div>
        <div className="text-center mt-3" data-aos="fade-down" data-aos-delay="150"  data-aos-once="true">
        <NavLink
          to={Loggeduser ? `/viewall` :`/login`}
          className="inline-flex items-center justify-center h-12 px-6 font-medium text-white transition duration-200 rounded shadow-md bg-[rgb(255,20,146)] focus:shadow-outline focus:outline-none"
        >
          Let's Start
        </NavLink>
      </div>
    </div>
    );
  };