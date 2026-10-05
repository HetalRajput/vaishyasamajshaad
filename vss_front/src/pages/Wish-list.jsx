import React from "react";
import Places from "../components/Places/Places";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const WishList = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Wishlist-VaishyaSamajShadi</title>
        </Helmet>
      </HelmetProvider>
      <div className="pt-14">
        <Places />
      </div>
    </>
  );
};

export default WishList;
