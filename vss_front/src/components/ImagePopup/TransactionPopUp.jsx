import { React, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
// import Transact from '../../assets/places/Transact.jpeg'
let upiId = "vaishyasamajshaadi@axl";
let amount= "100";
let currency="INR";


const TransactionPopUp = ({ QrPopup, setQrPopup, onButtonClick ,userName,userDob }) => {
    const [TId, setTId] = useState('');
    let encodedNameDate=`${userName} ${new Date(userDob).toLocaleDateString('en-GB')}`; 
    return (
        <>
            {QrPopup && (
                <div className="h-screen z-50 w-screen flex justify-center items-center fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-xsm">
                    {/* <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[700px] h-[350px]" data-aos="fade-down"> */}
                    <div className="fixed p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200  w-[300px] md:w-[410px] h-[470px] md:h-[350px]" data-aos="fade-down" data-aos-once="true">
                        {" "}
                        {/* Header */}
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 data-aos="zoom-in" data-aos-once="true" data-aos-delay="200" className="text-xl font-semibold text-black/70">
                                    Payment Request for Profile Addition and Verification
                                </h1>
                            </div>
                            <div style={{
                                position: "absolute",
                                top: "-12px",
                                right: "-2px",
                                background: "white",
                                borderRadius: "34px"
                            }}
                            >
                                <IoCloseOutline

                                    className="text-2xl cursor-pointer "
                                    onClick={() => setQrPopup(false)}
                                />
                            </div>
                        </div>
                        {/* Body */}
                        <div className="mt-4 text-center">
                            <h3 className="mb-4">
                                {/* Please proceed with the one-time payment of <strong className="text-pink-800">Rs 100</strong>. After approval, your profile will be visible to everyone and marked as verified. */}
                                Please proceed, as it is free for now. After approval, your profile will be visible to everyone and marked as verified.
                            </h3>
                            <div className="flex justify-center">
                            {/* {`upi://pay?pa=${upiId}&tn=${encodedNameDate}&am=${amount}&cu=${currency}`}   */}
                            {/* <a href="upi://pay?pa=vaishyasamajshaadi@axl&am=100&cu=INR"   className="py-2.5 mt-2 px-4 text-sm font-medium text-white bg-pink-600 rounded-lg hover:bg-pink-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-pink-500 dark:hover:bg-pink-400 dark:focus:ring-blue-700 md:w-auto w-full"> */}
                                {/* <img
                                    data-aos="zoom-in"
                                    data-aos-once="true"
                                    data-aos-delay="300"
                                    src={Transact}
                                    alt="Transaction Image"
                                    className="rounded w-full max-w-[400px] h-auto"
                                /> */}
                            {/* <a href={`upi://pay?pa=${upiId}&tn=${encodedNameDate}&am=${amount}&cu=${currency}`}  className="py-2.5 mt-2 px-4 text-sm font-medium text-white bg-pink-600 rounded-lg hover:bg-pink-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-pink-500 dark:hover:bg-pink-400 dark:focus:ring-blue-700 md:w-auto w-full">
                            Pay Now
                            </a> */}
                            </div>
                        </div>

                        {/* <div className="mt-3 text-center">
                            or By UPI Id <br />
                            <h5 className="text-pink-400">vaishyasamajshaadi@axl</h5>
                        </div> */}
                        <div className="mt-4">
                            <div className="flex flex-wrap items-center space-x-2">
                                {/* <input
                                    type="text"
                                    name="Tid"
                                    id="tid"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer md:w-[250px]"
                                    onChange={e => setTId(e.target.value)}
                                    value={TId}
                                    required
                                    placeholder="Enter Transaction Id (optional)"
                                /> */}
                                <button
                                    type="button"
                                    className="py-2.5 mt-2 sm:mt-0 px-4 text-sm font-medium text-white bg-pink-600 rounded-lg hover:bg-pink-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-pink-500 dark:hover:bg-pink-400 dark:focus:ring-blue-700 md:w-auto w-full"
                                    onClick={onButtonClick}
                                >
                                    Submit
                                </button>
                            </div>

                        </div>

                    </div>
                </div>
            )}
        </>
    );
};

export default TransactionPopUp;
