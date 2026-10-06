import React from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import historyImg from "../../assets/places/history.png";
import { MdSubdirectoryArrowRight } from "react-icons/md";
import { FaShieldAlt } from "react-icons/fa";
import { MdVerifiedUser } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { Theme_Color } from "../../../Config";
import bglove from '../../assets/Multiformicon/bglove.png'
import history from '../../assets/Multiformicon/history.jpg'
import god1 from '../../assets/Multiformicon/god1.png'
import god2 from '../../assets/Multiformicon/god2.png'
import god3 from '../../assets/Multiformicon/god3.png'
import god4 from '../../assets/Multiformicon/god4.png'
import god5 from '../../assets/Multiformicon/god5.png'
import god6 from '../../assets/Multiformicon/god6.png'
import god7 from '../../assets/Multiformicon/god7.png'


const History = () => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10">
        <section data-aos="fade-up" data-aos-once="true" className="container flex justify-center">
          <h1 className={`my-8 border-t-[4px] border-t-[3px] border-l-8 h-2 border-r-8 pr-2 border-[rgb(255,20,146)] py-2 pl-2 text-3xl font-bold text-[rgb(255,20,146)]`}>
            Why Us ?
          </h1>
          <br />
        </section>
        <section data-aos="fade-up" data-aos-once="true" className="container flex justify-center">
          <h1 className=" my-4 py-2 pl-2 text-2xl font-bold text-gray-500">
            Genuine Profiles | Safe & Secure | Best Recommendation
          </h1>
          <br />
        </section>
      </div>
      <section className="bg-gray-100 py-8" style={{
        backgroundImage: `url(${bglove}), url(${bglove})`,
        backgroundSize: "contain",
        //   backgroundRepeat: "repeat-x, repeat-x",
        backgroundPosition: "4px -105px, -100px -67px",
        backgroundBlendMode: "color-burn"
      }}>
        <div className="container mx-auto text-center px-4">
          <div className="flex flex-wrap -mx-4" data-aos="zoom-in" data-aos-once="true" data-aos-delay="300">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className={`bg-[rgb(255,20,146)] p-8 shadow-md rounded-md flex flex-col justify-center items-center h-[300px] sm:h-[250px] `}>
                <FaPeopleGroup className={`fas fa-lock text-4xl text-white mb-4`} />
                <h3 className="text-xl font-bold text-white mb-2">People</h3>
                <p className="text-slate-100">All profiles are fully registered with all personal, work, and family information. This helps members find the right matches easily.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className={`bg-[rgb(255,20,146)] p-8 shadow-md rounded-md flex flex-col justify-center items-center h-[300px] sm:h-[250px] `}>
                <MdVerifiedUser className={`text-center fas fa-lock text-4xl text-white mb-4 `} />
                <h3 className="text-xl font-bold text-white mb-2">Verified</h3>
                <p className="text-slate-100">All profiles are verified by us before being listed on  vaishyasamajshaadi.com to ensure they are part of the Vaishya community.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className={`bg-[rgb(255,20,146)] p-8 shadow-md rounded-md flex flex-col justify-center items-center h-[300px] sm:h-[250px] `}>
                <FaShieldAlt className={`text-center fas fa-lock text-4xl text-white  mb-4`} />
                <h3 className="text-xl font-bold text-white mb-2">Secure</h3>
                <p className="text-slate-100">We do not share any user or profile data with third parties. Your information is kept confidential and secure.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* othersections  */}
      <div className="dark:bg-gray-900 dark:text-white py-10">
        <section data-aos="fade-up" data-aos-once="true" className="container flex justify-center">
          <h1 className={` my-8 border-t-[4px] border-t-[3px] border-l-8 h-2 border-r-8 pr-2 border-[rgb(255,20,146)] py-2 pl-2 text-3xl font-bold text-[rgb(255,20,146)]`}>
            Our History
          </h1>
        </section>
      </div>

      <div className="container" data-aos="fade-up" data-aos-once="true"
        data-aos-delay="100">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-4">

          <div className="group cursor-pointer relative">
            <img
              src={god1}
              className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
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
              src={god3}
              className="w-full h-full shadow-lg p-4  object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
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

      <div className="py-6">
        <div className="container m-auto px-6">
          <div className="lg:flex justify-between items-center">
            <div className="lg:w-5/12 lg:p-0 p-7 flex justify-center">
              <img
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-once="true"
                src={history}
                // style={{
                //   transform:
                //     "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                // }}
                alt=""
                className="rounded"
              />
            </div>
            <div className="lg:w-6/12 order-2" style={{ width: "100%" }}>
              <h6
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-once="true"
                className="text-2xl font-bold leading-tight mb-5 capitalize"
              >
                <RiDoubleQuotesL className={`text-[rgb(255,20,146)]`} />
                <span>
                  &nbsp; &nbsp; Some Key Points Regarding the History of the Vaishya Communities
                </span>
                <RiDoubleQuotesR className={`text-[rgb(255,20,146)]`} />
              </h6>
              <p data-aos="fade-up" data-aos-once="true" data-aos-delay="300" className="text-1xl">
                {" "}
                <strong>Gupta Community:&nbsp;&nbsp;</strong>
                The history of the Gupta community is very old, and its knowledge dates back to ancient times. The people of the Gupta community were renowned in trade and industry. During the Gupta dynasty, most of the powerful states in India were under the Gupta empire. During the period of the Gupta empire, Indian culture, art, and literature flourished.
                <br />
                <strong>Vaishya Community:&nbsp;&nbsp;</strong>
                The Vaishya community is also an important part of Indian society. The main occupation of the people in the Vaishya community is trade, commerce, and industry. These people engage in various professions and participate in cultural and social activities with pride in society.






              </p>

              {/* <div className="py-5">
               <a href="#" className="text-white rounded-full py-2 px-5 text-lg font-semibold bg-purple-600 inline-block border border-purple-600 mr-3">Try for free</a>
               <a href="#" className="text-black rounded-full py-2 px-5 text-lg font-semibold bg-gray-400 inline-block border hover:bg-white hover:text-black">Requist a demo</a>
          </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="py-6">
        <div className="container m-auto px-6">
          <div className="lg:flex justify-between items-center gap-6">
            <div className="lg:w-5/12 lg:p-0 p-7 flex justify-center">
              <img
                data-aos="fade-up"
                data-aos-delay="200"
                src={historyImg}
                data-aos-once="true"
                // style={{
                //   transform:
                //     "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                // }}
                alt=""
                className="rounded"
              />
            </div>
            <div className="lg:w-6/12 order-2" style={{ width: "100%" }}>
              <h6
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-once="true"
                className="text-2xl font-bold leading-tight mb-5 capitalize"
              >
                <RiDoubleQuotesL className={`text-[rgb(255,20,146)]`} />
                <span>
                  &nbsp; &nbsp; The history and contributions of both communities are significant to Indian culture and society, and they continue to advance their religion, culture, and business, contributing to making society prosperous and progressive.
                </span>
                <RiDoubleQuotesR className={`text-[rgb(255,20,146)]`} />
              </h6>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8 row-gap-12 lg:grid-cols-2">
          <div className="max-w-md sm:mx-auto sm:text-center" data-aos="fade-up" data-aos-once="true" data-aos-delay="300">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="bebc38d1-bf72-4c77-a073-f0fe5abe0753"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7"></circle>
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#bebc38d1-bf72-4c77-a073-f0fe5abe0753)"
                      width="52"
                      height="24"
                    ></rect>
                  </svg>
                  <span className={`relative text-[rgb(255,20,146)]`}>Vaisya Samaj
                  </span>
                </span>
                &nbsp;
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Vaishya samaj mein anek prakar ke surnames hote hain, aur ye surnames bhinn-bhinn kshetron aur kulon se judte hain. Kuch pramukh Vaishya surnames hain:<br />
                <MdSubdirectoryArrowRight className={`inline text-[rgb(255,20,146)]`} /> Gupta  <br />
                <MdSubdirectoryArrowRight className={`inline text-[rgb(255,20,146)]`} />  Agarwal  <br />
                <MdSubdirectoryArrowRight className={`inline text-[rgb(255,20,146)]`} />  Maheshwari <br />
                <MdSubdirectoryArrowRight className={`inline text-[rgb(255,20,146)]`} />  Oswal <br />
                <MdSubdirectoryArrowRight className={`inline text-[rgb(255,20,146)]`} />  Khandelwal <br />
                <MdSubdirectoryArrowRight className={`inline text-[rgb(255,20,146)]`} />  Mittal <br />
                <MdSubdirectoryArrowRight className={`inline text-[rgb(255,20,146)]`} />  Jain <br />
                <MdSubdirectoryArrowRight className={`inline text-[rgb(255,20,146)]`} />  Birla <br />
                <MdSubdirectoryArrowRight className={`inline text-[rgb(255,20,146)]`} />  Goel <br />
                <MdSubdirectoryArrowRight className={`inline text-[rgb(255,20,146)]`} />  Singhal <br />
                Yeh kuch pramukh surnames hain, lekin samaj mein aur bhi anek surnames hote hain jo alag-alag kshetron mein prachalit hote hain.
              </p>
            </div>
          </div>
          <div className="max-w-md sm:mx-auto sm:text-center" data-aos="fade-up" data-aos-once="true" data-aos-delay="300">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="bebc38d1-bf72-4c77-a073-f0fe5abe0753"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7"></circle>
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#bebc38d1-bf72-4c77-a073-f0fe5abe0753)"
                      width="52"
                      height="24"
                    ></rect>
                  </svg>
                  <span className={`relative text-[rgb(255,20,146)]`}>  Gupta Samaj</span>
                </span>
                &nbsp;


              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Gupta samaj ki shuruwat kis samay hui, iska spasht aitihasik tay karna kathin hai, kyun ki prachin kal mein samajon ki sthiti, unka aagaman aur unka vikas bahut kam likhit pramaan mein milta hai. Gupta vansh kaal, jo lagbhag 4th se 6th sadi tak chala, Bharat ke itihas ka ek mahatvapurn avadhi thi, jismein Gupta samrajya adhikansh Bharat ko shaashit karne wala shaktishali samrajya tha. Gupta vansh ke kai pramukh shasak jaise ki Chandragupta I, Samudragupta, aur Chandragupta II ke samay mein Bharat ke anek kshetron mein vyapar aur udyog ka vikas hua. Is samay mein samaj mein vyapari aur udyogpati logon ka mahatva badha aur Gupta vansh ke samay mein vyaparik jivan aur samaj mein vaishya varg ka mahatva pratishthit hua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default History;
