import React from "react";
import BlogCard from "./BlogCard";
import Slider from "react-slick";
import bglove from '../../assets/Multiformicon/bglove.png'
import { Base_URL } from "../../../Config";

const BlogsData = [
  {
    id: 1,
    image: `${Base_URL}story5.jpg`,
    title: "Praveen & Blessy",
    description:
      "Against all odds, Praveen, a globetrotting entrepreneur, and Blessy, a spirited journalist, found their match on VaishyaSamajShaadi. Their whirlwind romance proved that sometimes, the most unexpected journeys lead to the greatest love stories.",
  },
  {
    id: 2,
    image: `${Base_URL}story7.jpg`,
    title: "Abhishek & Akansha",
    description:
      "Bangalore brought together Abhishek, a dynamic IT professional, and Akansha, a talented architect, on VaishyaSamajShaadi. Their careers converged, but it was their shared dreams and mutual admiration that sealed their bond, proving that love thrives in the midst of bustling careers.",
  },
  {
    id: 3,
    image: `${Base_URL}story1.jpg`,
    title: "Yash & Aditi",
    description:
      "In a modern tale of love and understanding, Yash, a social activist, and Aditi, an artist, found each other on VaishyaSamajShaadi. Their diverse backgrounds blended seamlessly, creating a colorful canvas of companionship and shared purpose.",
  },
  {
    id: 4,
    image: `${Base_URL}story3.jpg`,
    title: "Shiva & Riya",
    description:
      "Childhood friends reunited through VaishyaSamajShaadi, Shiva and Riya discovered that their bond was destined for more than just friendship. Their love story, born from nostalgia and rekindled connection, now shines brightly as they walk hand in hand into the future.",

  },
  {
    id: 5,
    image: `${Base_URL}story8.jpg`,
    title: " Raj & Harshita",
    description:
      "Raj, an entrepreneur, and Harshita, a marketing executive, shared a passion for travel and entrepreneurship. Their connection on VaishyaSamajShaadi blossomed into a successful business partnership, proving that love and ambition can create a winning combination.",
  },
  {
    id: 6,
    image: `${Base_URL}story4.jpg`,
    title: "Himanshu & Gunjan",
    description:
      "Despite miles between them, Himanshu, a Mumbai-based software engineer, and Gunjan, a doctor from Bangalore, found love on VaishyaSamajShaadi. Now happily together in Mumbai, their connection proves that distance is no barrier to true love.",
  },
];

const BlogsComp = () => {
  let settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    // <>
      <div className="dark:bg-gray-900 dark:text-white py-10">
        <section data-aos="fade-up"  data-aos-once="true" className="container"   style={{
                  backgroundImage: `url(${bglove}), url(${bglove})`,
                  backgroundSize: "inherit",
                  backgroundPosition: "31px -102px, 204px -212px",
                }}>
        <h1 className={`bg-gray-100 text-center mb-[20px] my-8 border-t-[4px] border-l-8  border-r-8 pr-2 border-[rgb(255,20,146)] py-2 pl-2 text-3xl font-bold text-[rgb(255,20,146)]`} style={{borderTopLeftRadius: "72px",
        borderBottomRightRadius: "72px"}} >
        Some glimpses of our happy customer
        </h1>
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3"> */}
          <div className="slider-container">
            <Slider {...settings}>
            {BlogsData.map((item) => (
                   <BlogCard key={item.id} {...item} />
                  ))}
              </Slider>
          </div>
        </section>
      </div>
    // </>
  );
};

export default BlogsComp;
