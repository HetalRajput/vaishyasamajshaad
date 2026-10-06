import React, { Fragment, useState } from "react";
import { NavLink , useNavigate} from "react-router-dom";
import axios from "axios";
import { Base_URL } from "../../Config";
import { Helmet, HelmetProvider } from "react-helmet-async";
import FooterLogo from "../assets/Multiformicon/logo4.png";
import SignUpImage from "../assets/Multiformicon/signup.jpg";
import bglove from "../assets/Multiformicon/bglove.png";
import { toast } from 'react-toastify';
import Loader from "./Loader";

import {app} from '../../Config.js'
import { getAuth, GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";

// Initialize Firebase Auth and Google provider
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


const RegistartionForm = () => {
  const [userName, setName] = useState("");
  const [userPassword, setPassword] = useState("");
  const [userPhone, setPhone] = useState("");
  const [userEmail, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();


  const Signup = async () => {
    setIsLoading(true)
    const validation = validateInputs();
    if (!validation.isValid) {
      toast.error(validation.message);
      setTimeout(() => {
        setIsLoading(false)
      }, 500);
      return;
    }

    try {
      const response = await axios.post(`${Base_URL}signup`, {
        userName,
        userEmail,
        userPhone,
        userPassword,
      });

      // Handle the successful response
      if (response.status === 200) {
        toast.success("Sign In successfully !!");
        // Clear the form and error state
        setName("");
        setEmail("");
        setPhone("");
        setPassword("");
      }
    } catch (error) {
      // Handle errors
      if (error.response) {
        // Server responded with a status other than 200 range
        console.log("Error response: " + error.response.data);
      } else if (error.request) {
        // Request was made but no response was received
        console.log("Error request: " + error.request);
      } else {
        // Something happened in setting up the request
        console.log("Error message: " + error.message);
      }
    }finally {
      setIsLoading(false)
    }
  };
  function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  function validatePhone(phone) {
    const phonePattern = /^\d+$/;
    return phonePattern.test(phone);
  }

  function validateInputs() {
    if (!userName || !userEmail || !userPhone || !userPassword) {
      return { isValid: false, message: "All fields are required." };
    }
    if (!validateEmail(userEmail)) {
      return { isValid: false, message: "Invalid email format." };
    }
    if (!validatePhone(userPhone)) {
      return { isValid: false, message: "Phone number must be numeric." };
    }
    return { isValid: true };
  }

  
  const signInWithGoogle = async () => {
    try {
      setIsLoading(true)
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const response = await axios.post(`${Base_URL}signup`, {
        userName:user.displayName,
        userEmail: user.email,
        userPhone:"",
        userPassword:"",
        oAuthSts:1
      });
      if (response.status === 200) {
          const response = await axios.post(`${Base_URL}login`, {
            userEmail: user.email,
            userPassword:"",
            oAuthSts:1
          });
              if (response.status === 200) {
                setIsLoading(false)
            if(response.data.status){
              localStorage.setItem(
                "UserBase",
                encodeURIComponent(JSON.stringify(response.data))
              );
              toast.success("Login Successfully !!");
              console.log("navigating")
              navigate("/");
            }else{
              toast.error(response.data.message)
            }
          
          }else{
            toast.error(response.data.message)
          }
      }
    } catch (error) {
      console.log(error)
      let errorMessage = "An error occurred during sign-in.";
      if (error.code === 'auth/popup-closed-by-user') {
        errorMessage = "Sign-in popup was closed before completing.";
      } else if (error.code === 'auth/network-request-failed') {
        errorMessage = "Network error. Please try again.";
      }
      console.error("Error during sign-in:", error.code, error.message);
      alert(errorMessage);
    }
  };

  return (
    <Fragment>
      <HelmetProvider>
        <Helmet>
          <title>SignUp-VaishyaSamajShadi</title>
        </Helmet>
      </HelmetProvider>
      <div
        className="h-[101vh] items-center flex justify-center px-5 lg:px-0"
        style={{
          background:
            "linear-gradient(143.6deg, rgb(252 28 241 / 34%) 20.79%, rgb(245 36 77 / 26%) 40.92%, rgb(255 30 244 / 21%) 90.79%)",
        }}
      >
        <div
          className="max-w-screen-xl bg-white border rounded-lg shadow-xl drop-shadow-2xl  shadow-pink-300
 sm:rounded-lg flex justify-center flex-1"
        >
          <div
            className="flex-1 bg-orange-100 text-center bg-contain bg-center bg-repeat hidden md:flex"
            style={{
              backgroundImage: `url(${SignUpImage})`,
            }}
          ></div>
          <div className="lg:w-1/2 xl:w-5/12 p-6"    style={{
                backgroundImage: `url(${bglove}), url(${bglove})`,
                backgroundSize: "230px, 147px",
                backgroundRepeat: "space",
              }}>
            <div
              className=" flex flex-col items-center"
           
            >
              <a
                data-aos="zoom-in"
                data-aos-once="true"
                data-aos-delay="100"
                href="#"
                className="flex items-center mb-2 text-2xl font-semibold text-gray-900 dark:text-white"
              >
                <img className="w-48 h-38 mr-2" src={FooterLogo} alt="logo" />
              </a>
              <div className="text-center"   data-aos="zoom-out"
               data-aos-once="true"
                data-aos-delay="200">
                <h1 className="text-2xl mb-2 xl:text-4xl font-extrabold text-[rgb(255,20,146)]">
                  Sign up
                </h1>
                <p className="text-[12px] text-gray-500">
                  Hey enter your details to create your account
                </p>
              </div>
              <div className="w-full flex-1 mt-8"   data-aos="fade-right"  data-aos-once="true"
                data-aos-delay="300">
                <div className="mx-auto max-w-xs flex flex-col gap-4">
                  <input
                    onChange={(e) => setName(e.target.value)}
                    value={userName}
                    className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset
                    ring-[rgb(255,20,146)] placeholder:text-grey-400 focus:ring-2 focus:ring-inset focus:ring-[rgb(255,20,146)] sm:text-sm sm:leading-6 outline-none"
                    type="text"
                    placeholder="Enter your name"
                    autoComplete="false"
                    name="name"
                  />
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={userEmail}
                    className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset
                    ring-[rgb(255,20,146)] placeholder:text-grey-400 focus:ring-2 focus:ring-inset focus:ring-[rgb(255,20,146)] sm:text-sm sm:leading-6 outline-none"
                    type="email"
                    placeholder="Enter your email"
                    autoComplete="false"
                    name="email"
                  />
                  <input
                    onChange={(e) => setPhone(e.target.value)}
                    value={userPhone}
                    className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset
                    ring-[rgb(255,20,146)] placeholder:text-grey-400 focus:ring-2 focus:ring-inset focus:ring-[rgb(255,20,146)] sm:text-sm sm:leading-6 outline-none"
                    type="tel"
                    placeholder="Enter your phone"
                    autoComplete="false"
                    name="phone"
                  />
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={userPassword}
                    className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset
                    ring-[rgb(255,20,146)] placeholder:text-grey-400 focus:ring-2 focus:ring-inset focus:ring-[rgb(255,20,146)] sm:text-sm sm:leading-6 outline-none"
                    type="password"
                    placeholder="Password"
                    autoComplete="false"
                    name="password"
                  />
                  <button
                    onClick={Signup}
                    className="w-full inline-block text-white bg-[rgb(255,20,146)] font-medium rounded-lg text-md px-5 py-2.5 text-center"
                  >
                    {/* <svg
                                            className="w-6 h-6 -ml-2"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                            <circle cx="8.5" cy="7" r="4" />
                                            <path d="M20 8v6M23 11h-6" />
                                        </svg> */}
                    {/* <span className="ml-3" >Sign Up</span> */}
                    {isLoading ? <Loader /> : "Sign Up"} 
                  </button>

                  <button className="flex justify-center" onClick={signInWithGoogle}><FcGoogle style={{fontSize: "x-large"}} /><span className="ml-2">Sign In with Google</span></button>
                  
                  <p className="mt-6 text-xs text-gray-600 text-center">
                    Already have an account?{" "}
                    <NavLink to="/login">
                      <span className="text-[rgb(255,20,146)] font-semibold">
                        Sign in
                      </span>
                    </NavLink>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default RegistartionForm;
