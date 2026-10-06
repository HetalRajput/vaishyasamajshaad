import { React, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import axios from "axios";
import { Base_URL } from "../../../Config";

const OrderPopup = ({ orderPopup, setOrderPopup }) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserContact] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const Signup = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`${Base_URL}signup`, {
        userName,
        userEmail,
        userPhone,
        userAddress,
        userPassword
      });

      // Handle the successful response
      if (response.status === 200) {
        setSuccess(true);
        console.log('Data submitted successfully:', response.data);
      }
    } catch (error) {
      // Handle errors
      if (error.response) {
        // Server responded with a status other than 200 range
        console.error('Error response:', error.response.data);
        setError(error.response.data.message || 'An error occurred.');
      } else if (error.request) {
        // Request was made but no response was received
        console.error('Error request:', error.request);
        setError('No response received from the server.');
      } else {
        // Something happened in setting up the request
        console.error('Error message:', error.message);
        setError(error.message);
      }
    }
  };
  return (
    <>
      {orderPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[700px] h-[350px]">
            {" "}
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-semibold text-black/70">
                  Register
                </h1>
              </div>
              <div>
                <IoCloseOutline
                  className="text-2xl cursor-pointer "
                  onClick={() => setOrderPopup(false)}
                />
              </div>
            </div>
            {/* Body */}
            <div className="mt-4">
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
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderPopup;
