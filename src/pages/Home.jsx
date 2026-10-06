import React, { useEffect } from "react";
import Hero from "../components/Hero/Hero";
import History from "../components/History/History";
import BlogsComp from "../components/Blogs/BlogsComp";
import Banner from "../components/Banner/Banner";
import BannerPic from "../components/BannerPic/BannerPic";
import OrderPopup from "../components/OrderPopup/OrderPopup";
import banner0 from '.././assets/places/banner0.jpg';
import banner1 from '.././assets/places/banner1.jpg';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import bglove from "../assets/Multiformicon/bglove.png";
import Recommendations from "../components/Testimonial/recommendedCards";
import axios from "axios";
import { Base_URL } from "../../Config";
import { Feature } from "../components/Feature/Feature";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getLocalStorageItem } from "../Storage";

const Home = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);
  const [GroomBrideArray, setGroomBrideArray] = React.useState([]);
  const url = window.location.pathname.split('/').pop();
  const LoggerUserName = getLocalStorageItem('Name')
  const getGroomBride = async () => {
    try {
      const response = await axios.get(`${Base_URL}getGroomBride`);
      // Handle the successful response
      if (response.status === 200) {
        if (response.data.status) {
          setGroomBrideArray(response.data.data)
        } else {
          alert(response.data.message)
        }

      }
    } catch (error) {
      // Handle errors
      if (error.response) {
        // Server responded with a status other than 200 range
        console.log('Error response: ' + error.response.data);
      } else {
        // Request was made but no response was received
        console.log('Error request: ' + error);
      }
    }
  }

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
 
  const LoginEditAlert=() =>{
    setTimeout(() => {
      const CheckIsLogFirst = localStorage.getItem('CheckIsLogFirst')
      if(!CheckIsLogFirst && !LoggerUserName){
        toast('Please Login to use our features', {
          position: "top-center",
          autoClose: 20000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        localStorage.setItem('CheckIsLogFirst','1')
      }
      
    }, 5000);
  }
  useEffect(() => {
    LoginEditAlert()
    getGroomBride();
  }, [url])
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Home-VaishyaSamajShadi</title>
        </Helmet>
      </HelmetProvider>
      <div>
        <div className="h-[925px] lg:h-[820px] relative" style={{
          backgroundImage: `url(${bglove})`,
          backgroundSize: "contain",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: "72px 119px",
        }}>
          <img
            src={banner0}
            className="absolute right-0 top-0 h-[820px] w-full object-cover z-[-1] backdrop-brightness-50"
          />
          <Hero />
        </div>
        {/* <Places handleOrderPopup={handleOrderPopup} /> */}
        {/* <Testimonial /> */}
        {/* <Testimonial GroomBrideArray ={GroomBrideArray} />  */}
        <Recommendations />
        <Feature />
        <Banner />
        <BlogsComp />
        <BannerPic img={banner1} />
        {/* <BannerPic img={Banner2} /> */}
        {/* <Testimonial /> */}
        <History />
        {/* <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} /> */}
      </div>
     

    </>
  );
};

export default Home;
