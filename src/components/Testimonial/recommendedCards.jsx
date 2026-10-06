import img from "../../assets/Multiformicon/signup.jpg";
import axios from "axios";
import { Base_URL } from "../../../Config";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AnimatePresence, color, motion } from "framer-motion";
import bglove from '../../assets/Multiformicon/bglove.png'
import { calculateAge } from "../../Services";

const Recommendations = () => {
  const [GroomBrideArray, setgetRecommendUserArray] = useState([]);
  const [active, setActive] = useState("3");
  const url = window.location.pathname.split("/").pop();

  const getRecommendUser = async (gender = 3) => {
    try {
      const response = await axios.get(`${Base_URL}${gender}/getrecommenduser`);
      // Handle the successful response
      if (response.status === 200) {
        if (response.data.status) {
          // let user1 = {Gender: 1,Id: 3,Location:"Gwalior",Name: "Himanshu Chauhan",Occupation: "Software Developer",Photo: "Test.jpg"};
          // let user2 = {Gender: 2,Id: 4,Location:"Gwalior",Name: "Sohani Pratap Singh",Occupation: "Business Development",Photo: "Test.jpg"};

          // response.data.data.push(user1);
          // response.data.data.push(user2);
          setgetRecommendUserArray(response.data.data);

        } else {
          alert(response.data.message);
        }
      }
    } catch (error) {
      // Handle errors
      if (error.response) {
        // Server responded with a status other than 200 range
        console.log("Error response: " + error.response.data);
      } else {
        // Request was made but no response was received
        console.log("Error request: " + error);
      }
    }
  };


  const ChangeArray = (e) => {
    const Sex = e.target.id;
    setActive(Sex);
    getRecommendUser(Sex);
  };

  useEffect(() => {
    getRecommendUser();
  }, [url]);

  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10">
        <section data-aos="fade-up" data-aos-once="true" className="container flex justify-center">
          <h1
            className={`my-8 border-t-[4px] border-t-[3px] border-l-8 h-2 border-r-8 pr-2 border-[rgb(255,20,146)] py-2 pl-2 text-3xl font-bold text-[rgb(255,20,146)]`}
          >
            Recommended Users
          </h1>
        </section>
      </div>
      <div data-aos="fade-up" data-aos-once="true" data-aos-delay="50" className="grid grid-cols-12 gap-1" style={{ display: "flex", justifyContent: "center" }}>

        <div >
          <button
            id="3"
            onClick={ChangeArray}
            className={` ${active === "3" ? "bg-pink-500 text-white" : ''} bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center`}
          // className="text-white bg-pink-500 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-orange-500 dark:focus:ring-blue-800"
          >
            All
          </button>
        </div>

        <div>
          <button
            id="1"
            onClick={ChangeArray}
            className={` ${active === "1" ? "bg-pink-500  text-white" : ''} bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center`}
          >
            Male
          </button>
        </div>

        <div>
          {/* <button
            className={` ${active === "2" ? "bg-pink-500  text-white" : ''} bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center`}
          >
            Female
          </button> */}
          <button
            id="2"
            onClick={ChangeArray}
            className={` ${active === "2" ? "bg-pink-500  text-white" : ''} bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center`}
          >
            Female
          </button>
        </div>
      </div>


      {GroomBrideArray.length ? <div className="container flex min-h-screen md:min-h-[380px] mt-10 items-center justify-center" data-aos="fade-up" data-aos-once="true" data-aos-delay="100" style={{
        backgroundImage: `url(${bglove}), url(${bglove})`,
        backgroundSize: "inherit",
        backgroundPosition: "31px -102px, 204px -212px",
      }}>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-4 lg:grid-cols-4 p-3">
          <AnimatePresence>
            {GroomBrideArray.map((item, i) => (
              <div className="relative flex flex-col overflow-hidden text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-72" key={i}>
                <NavLink to={`/profile/${item.Id}`}>
                  <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
                    <img src={Base_URL + item.Photo} alt="profile-picture" />
                  </div>
                </NavLink>
                <div className="p-6 text-center">
                  <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    {item.Name}
                  </h4>
                  <p
                    className="block font-sans text-base antialiased font-medium leading-relaxed text-black bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
                    {item.Occupation ? item.Occupation : '-'}
                  </p>
                  <p className="flex mt-4 justify-between items-center">
                    <span className="flex items-center text-lg text-blue-gray-600">
                      <FaMapMarkerAlt className="mr-2" style={{color:'rgb(170, 51, 106)'}} /> {item.Location ? item.Location : 'India'}
                    </span>
                    <span className="text-lg text-blue-gray-600">{calculateAge(item.DOB)} yrs</span>
                  </p>
                </div>
                {/* <div className="flex justify-center p-6 pt-2 gap-7">
                  <a href={item.Facebook}
                    target="_blank"
                    className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-blue-400">
                    <FaFacebookF style={{ color: 'blue' }} />
                  </a>
                  <a href={item.Instagram}
                    target="_blank"
                    className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-light-blue-600 to-light-blue-400">
                    <FaInstagram style={{ color: 'black' }} />
                  </a>
                  <a href={item.Whatsapp}
                    target="_blank"
                    className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-purple-600 to-purple-400">
                    <FaWhatsapp style={{ color: 'green' }} />
                  </a>
                </div> */}
              </div>
            ))}
          </AnimatePresence>
        </div>
      </div> :
        <div className="mt-5
      grid grid-cols-12 gap-1 container" style={{ display: "flex", justifyContent: "center" }}>
          <div>
            No Profile Found
          </div>
        </div>
      }

      {GroomBrideArray.length ? <div data-aos="fade-up" data-aos-once="true" data-aos-delay="50" className="mt-5
       grid grid-cols-12 gap-1 container" style={{ display: "flex", justifyContent: "end" }}>
        <div>
          <NavLink to={`/viewall`}
            className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center`}
          >
            View More
          </NavLink>
        </div>
      </div> : ""}

      {/* <div className="flex flex-wrap justify-center mt-10">
            <AnimatePresence>
                {GroomBrideArray.map((item, i) => (
                    <NavLink to={`/profile/${item.Id}`} key={i} className="p-4 max-w-sm shadow-xl w-full">
                        <motion.div
                            key={i}
                            layout
                            initial={{ transform: "scale(0)" }}
                            animate={{ transform: "scale(1)" }}
                            exit={{ transform: "scale(0)" }}
                            className="bg-no-repeat bg-cover bg-center flex rounded-lg h-full p-8 flex-col" style={{ background: `url(${img})` }}>
                            <div className="p-4 transition-all duration-500 dark:bg-slate-950 dark:text-white h-[250px] ">
                                <div className="mt-44 space-y-2 rounded-xl py-3 text-center shadow-xl" style={{ background: `rgba(0,0,0,0.4)` }}>
                                    <h1 className="line-clamp-1 font-bold">{item.Name}</h1>
                                    <p className="line-clamp-5 text-center">{item.Occupation}</p>
                                </div>
                            </div>
                        </motion.div>
                    </NavLink>
                ))}
            </AnimatePresence>
            </div> */}
    </>
  );
};
export default Recommendations;
