import React from "react";
import Slider from "react-slick";
import { Theme_Color } from "../../../Config";


const Testimonial = (GroomBrideArray) => {
  const testimonialData = GroomBrideArray.GroomBrideArray;
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
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
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
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
    <>
      <div data-aos="fade-up"  data-aos-once="true" data-aos-duration="300" className="py-10">
        <div className="container">
          {/* Header section */}
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <div className="dark:bg-gray-900 dark:text-white py-5">
              <section data-aos="fade-up"  data-aos-once="true" className="container flex justify-center">
                <h1 className={`my-8 border-t-[4px] border-t-[3px] border-l-8 h-2 border-r-8 pr-2 border-[rgb(255,20,146)] py-2 pl-2 text-3xl font-bold text-[rgb(255,20,146)]`}>
                  Recommendations
                </h1>
              </section>
            </div>
            <h3 className="text-gray-400"> 
              Find some best matches
            </h3>
          </div>
          {/* testimonial section */}
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            data-aos-once="true"
            className="grid grid-cols-1 max-w-[800px] mx-auto gap-6"
          >
            <Slider {...settings}>
            {testimonialData.map(({ Id, Name, Occupation, Location, Photo }) => {
                return (
                  <div key={Id} className="my-2">
                    <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                      <img
                        src="https://picsum.photos/101/101"
                        alt="Nameuser.jpg"
                        className="rounded-full block mx-auto"
                      />
                      <h1 className="text-xl font-bold">{Name}</h1>
                      <p className="text-gray-500 text-sm">{Occupation}</p>
                      <p className="text-gray-500 text-sm">{Location}</p>
                      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                        ..
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
