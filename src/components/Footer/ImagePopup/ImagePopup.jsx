import { React } from "react";
import { IoCloseOutline } from "react-icons/io5";

const ImagePopup = ({ imagePopup, setImagePopup }) => {
  return (
    <>
      {imagePopup && (
        <div className="h-screen z-50 w-screen flex justify-center items-center fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-xsm">
          {/* <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[700px] h-[350px]" data-aos="fade-down"> */}
          <div className="fixed p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200  w-[330px] md:w-[auto] h-[350px]" data-aos="fade-down"  data-aos-once="true">
            {" "}
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 data-aos="zoom-in" data-aos-delay="200"  data-aos-once="true" className="text-xl font-semibold text-black/70">
                  माहौर ग्वारे वैश्य समाज आपका स्वागत करता हैं
                </h1>
              </div>
              <div  style={{ 
                    position: "absolute",
                    top: "-12px",
                    right: "-12px",
                    background: "white",
                    borderRadius: "34px"
                }}
                >
                <IoCloseOutline
                  
                  className="text-2xl cursor-pointer "
                  onClick={() => setImagePopup(false)}
                />
              </div>
            </div>
            {/* Body */}
            {/* <div className="mt-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                onChange={e => setUserName(e.target.value)} value={userName}
              />
              <input
                type="email"
                placeholder="email"
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                onChange={e => setUserEmail(e.target.value)} value={userEmail}
              />
              <input
                type="number"
                placeholder="Contact"
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                onChange={e => setUserContact(e.target.value)} value={userPhone}
              />
              <input
                type="text"
                placeholder="Address"
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                onChange={e => setUserAddress(e.target.value)} value={userAddress}
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                onChange={e => setUserPassword(e.target.value)} value={userPassword}
              />
              <div className="flex justify-center">
                <button className="bg-orange-500 hover:scale-105 duration-200 text-white py-1 px-4 rounded-full" onClick={Signup}>
                  Register
                </button>
              </div>
            </div> */}
          </div>
        </div>
      )}
    </>
  );
};

export default ImagePopup;
