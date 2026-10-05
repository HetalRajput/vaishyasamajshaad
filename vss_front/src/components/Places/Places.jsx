import React from "react";
import PlaceCard from "./PlaceCard";

// const PlacesData = [
//   {
//     id:'1',
//     img: Img1,
//     title: "Suneelam",
//     location: "Gwalior",
//     description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     height: 6700,
//     type: "Engineer",
//   },
//   {
//     id:'2',
//     img: Img2,
//     title: "Himanshu",
//     location: "Gwalior",
//     description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",

//     height: 6700,
//     type: "Engineer",
//   },
//   {
//     id:'3',
//     img: Img3,
//     title: "Raj",
//     location: "Bhopal",
//     description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",

//     height: 6200,
//     type: "Engineer",
//   },
// ];

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container "  data-aos-once="true">
        <div className="dark:bg-gray-900 dark:text-white py-10">
            <section data-aos="fade-up" className="container flex justify-center"  data-aos-once="true">
              <h1 className=" my-8 border-t-[4px] border-t-[3px] border-l-8 h-2 border-r-8 pr-2 border-orange-500 py-2 pl-2 text-3xl font-bold">
                Your Wishlist
              </h1>
            </section>
          </div>

          {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div> */}
        </section>
      </div>
    </>
  );
};

export default Places;
