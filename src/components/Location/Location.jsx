import React from "react";
import { Theme_Color } from "../../../Config";
const Location = () => {
  return (
    <>
      <span id="location"></span>
      <section data-aos="fade-up" className=""  data-aos-once="true">
        <div className="container my-4">
          <h1 className={`inline-block border-l-8 border-[rgb(255,20,146)] py-2 pl-2 mb-4 text-xl font-bold sm:text-3xl"`}>
            Location to visit
          </h1>

          <div className="rounded-xl ">
            <iframe
             src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d28633.441791639798!2d78.167843!3d26.223333!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1716019081625!5m2!1sen!2sin"
              width="100%"
              height="360"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ borderRadius: "20px" }}
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
