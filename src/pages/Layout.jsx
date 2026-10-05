import React,{useLayoutEffect,useEffect} from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet, Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import OrderPopup from "../components/OrderPopup/OrderPopup";
import {useLocation } from 'react-router-dom';
import ImagePopup from "../components/ImagePopup/ImagePopup";

const Layout = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);
  const [imagePopup, setImagePopup] = React.useState(false);
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  },[location.pathname]);

  useEffect(() => {
    setImagePopup(!imagePopup);
  }, []);


  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  return (
    <>
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Outlet />
      <Footer />
      <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      <ImagePopup imagePopup={imagePopup} setImagePopup={setImagePopup} />
    </>
  );
};

export default Layout;