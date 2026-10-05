import { React } from "react";
import { IoCloseOutline } from "react-icons/io5";
// import history from '../../assets/Multiformicon/history.jpg'
import god from '../../assets/Multiformicon/god.jpg'

const ImagePopup = ({ imagePopup, setImagePopup }) => {
  return (
    <>
      {imagePopup && (
        <div className="h-screen z-50 w-screen flex justify-center items-center fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-xsm">
          {/* <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[700px] h-[350px]" data-aos="fade-down"> */}
          <div className="fixed p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200  w-[330px] md:w-[auto] h-[422px] md:h-[440px]" data-aos="fade-down"  data-aos-once="true">
            {" "}
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 data-aos="zoom-in"  data-aos-once="true" data-aos-delay="200" className="text-xl font-semibold text-black/70">
                  माहौर ग्वारे वैश्य समाज आपका स्वागत करता हैं
                </h1>
              </div>
              <div  style={{ 
                    position: "absolute",
                    top: "-12px",
                    right: "-2px",
                    background: "white",
                    borderRadius: "34px"
                }}
                >
                <IoCloseOutline
                  
                  className="text-2xl   cursor-pointer "
                  onClick={() => setImagePopup(false)}
                />
              </div>
            </div>
            {/* Body */}
            <div className="mt-4">
            <img
               data-aos="zoom-in" data-aos-delay="300"  data-aos-once="true"
                src={god}
                alt=""
                className="rounded w-[100%] h-[325px] md:h-[365px]"
              />  
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImagePopup;
