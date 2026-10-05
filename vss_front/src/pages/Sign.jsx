import React, { useState } from "react";
import FooterLogo from "../assets/Multiformicon/logo4.png";
// import Ellipse1 from "../assets/Multiformicon/Ellipse1.png";
import bglove from "../assets/Multiformicon/bglove.png";
// import bglove2 from "../assets/Multiformicon/bglove2.png";
import { NavLink, useNavigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import axios from "axios";
import { Base_URL } from "../../Config";
import { toast } from 'react-toastify';
import Loader from "./Loader";

import {app} from '../../Config.js'
import { getAuth, GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";

// Initialize Firebase Auth and Google provider
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const SignIn = () => {
  const [userPassword, setPassword] = useState("");
  const [userEmail, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const SignIn = async () => {
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
      const response = await axios.post(`${Base_URL}login`, {
        userEmail,
        userPassword,
      });

      // Handle the successful response
      if (response.status === 200) {
        if(response.data.status){
          localStorage.setItem(
            "UserBase",
            encodeURIComponent(JSON.stringify(response.data))
          );
          localStorage.setItem(
            "token",
            response.data.token);
          toast.success("Login Successfully !!");
          navigate("/");
        }else{
          toast.error(response.data.message)
        }
       
      }else{
        toast.error(response.data.message)
      }
    } catch (error) {
      // Handle errors
      if (error.response) {
        // Server responded with a status other than 200 range
        console.log("Error response: " + error.response.data);
      } else {
        // Request was made but no response was received
        console.log("Error request: " + error.request);
      }
    } finally {
      setIsLoading(false)
    }
  };
  function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  function validateInputs() {
    if (!userEmail || !userPassword) {
      return { isValid: false, message: "All fields are required." };
    }
    if (!validateEmail(userEmail)) {
      return { isValid: false, message: "Invalid email format." };
    }
    return { isValid: true };
  }

  
  const signInWithGoogle = async () => {
    setIsLoading(true)
    try {
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
    <>
      <HelmetProvider>
        <Helmet>
          <title>Signin-VaishyaSamajShadi</title>
        </Helmet>
      </HelmetProvider>
      <section
      className="h-[101vh]"
        style={{
          background:
            "linear-gradient(143.6deg, rgb(252 28 241 / 34%) 20.79%, rgb(245 36 77 / 26%) 40.92%, rgb(255 30 244 / 21%) 90.79%)",
        }}
      >
        <div className="flex flex-col items-center justify-center px-6 h-[100vh] py-8 mx-auto md:h-screen lg:py-0  shadow-xl drop-shadow-2xl  shadow-pink-500"  style={{
              backgroundImage: `url(${bglove}), url(${bglove})`,
              backgroundSize: "233px, 131px",
              backgroundRepeat: "space",
            //   animation: "bounce 1s ease-in-out infinite"
            }} >
          <a
            data-aos="zoom-in"
            data-aos-delay="100"
            data-aos-once="true"
            href="/"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              className="w-48 h-38 mr-2"
              src={FooterLogo}
              alt="logo"
              style={{ filter: "brightness(0.5)" }}
            />
          </a>

         

          <div
            data-aos="zoom-out"
            data-aos-once="true"
            data-aos-delay="300"
            className="w-full bg-white bg-cover bg-left rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
            style={{
              backgroundImage: `url(${bglove}), url(${bglove})`,
              backgroundSize: "contain",
            //   backgroundRepeat: "repeat-x, repeat-x",
              backgroundPosition: "-72px -119px, 13px -121px",
            }}
          >
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-[rgb(255,20,146)] md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                     ring-[rgb(255,20,146)] placeholder:text-grey-400 focus:ring-2 focus:ring-inset focus:ring-[rgb(255,20,146)] sm:text-sm sm:leading-6 outline-none"
                    placeholder="name@gmail.com"
                    value={userEmail}
                    onChange={(e) => setEmail(e.target.value)}
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                    ring-[rgb(255,20,146)] placeholder:text-grey-400 focus:ring-2 focus:ring-inset focus:ring-[rgb(255,20,146)] sm:text-sm sm:leading-6 outline-none"
                    required=""
                    value={userPassword}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="button"
                  className="w-full text-white bg-[rgb(255,20,146)]  font-medium rounded-lg text-md px-5 py-2.5 text-center"
                  onClick={SignIn}
                >
              {isLoading ? <Loader /> : "Sign In"} 
                </button>
                <button type="button" style={{margin:"auto",marginTop:"10px"}} className="flex justify-center" onClick={signInWithGoogle}><FcGoogle style={{fontSize: "x-large"}} /><span className="ml-2">Sign In with Google</span></button>

                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don't have an account yet?{" "}
                  <NavLink
                    to="/signup"
                    className="font-medium text-[rgb(255,20,146)] hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </NavLink>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default SignIn;
