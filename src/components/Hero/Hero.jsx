import React, { useEffect, useState } from "react";
import { BiLogIn } from "react-icons/bi";
import axios from "axios";
import { Base_URL } from "../../../Config";
import { NavLink, useNavigate } from "react-router-dom";
import { getLocalStorageItem } from "../../Storage";
import { Theme_Color } from "../../../Config";
import bglove from '../../assets/Multiformicon/bglove.png'
const Hero = () => {
  const [success, setSuccess] = useState(false)
  const [Gender, setGender] = useState(2)
  const [AgeFrom, setAgeFrom] = useState(30)
  const [Ageto, setAgeto] = useState(30)
  const [City, setCity] = useState('')
  const [Gotra, setGotra] = useState('')
  const LoggedUser = getLocalStorageItem('Id');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const navigate = useNavigate()
  const Search = async () => {
    navigate(`searchuser/${Gender}/${AgeFrom}/${Ageto}/${City?City:'profile'}/${Gotra?Gotra:'vaishya'}`)
  };
  // Function to check if any input is empty
  const checkIfInputsAreEmpty = () => {
    return !Gender || !AgeFrom || !Ageto;
  };
  useEffect(() => {
    setIsButtonDisabled(checkIfInputsAreEmpty());
  }, [Gender, AgeFrom, Ageto]);

  return (
    <div className=" bg-black/20 h-full">
      <div className="h-full flex justify-center items-center p-4 bg-primary/10 bg-blend-darken" style={{ background: "linear-gradient(45deg, #503030, transparent" }}>
        <div className="container grid grid-cols-1 gap-6">
          <div className="text-white flex flex-col direction-column justify-center items-center">
            <h2 data-aos="fade-up"  data-aos-once="true" className="font-bold text-center text-3xl mt-[90px] sm:mt-[0px] sm:text-5xl mb-3">Welcome to Vaishya Samaj Shaadi</h2>
            <h4 data-aos="fade-up"  data-aos-once="true"
              data-aos-delay="300"
              className="text-2xl text-center mb-3">Where Love Finds Its Perfect Match</h4>
            {!LoggedUser ? <NavLink to={'/login'} data-aos-delay="400" data-aos="fade-up"  data-aos-once="true" className={`bg-[rgb(255,20,146)] text-[white] hover:scale-105 px-4 py-2 rounded-md duration-200 flex items-center gap-x-2`}>
              <BiLogIn /> Login Now
            </NavLink> : ''}
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-once="true"
            className="space-y-4 bg-gray-100 rounded-md p-4 relative sm:top-[150px]"
            style={{
              background: "#dadada1a"
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 py-3 text-white">
              <div>
                <label htmlFor="gender" className="opacity-70">
                  Gender
                </label>
                <select
                  onChange={(e) => setGender(e.target.value)}
                  value={Gender}
                  name="gender"
                  id="gender"
                  placeholder="Gender"
                  className="w-full border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-[rgb(255,20,146)]  p-2 bg-gray-100 my-2 range  outline-none placeholder:text-grey-400 focus:ring-2 focus:ring-inset focus:ring-[rgb(255,20,146)]">
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                </select>
                {/* <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-orange-300 placeholder:text-grey-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6 outline-none" /> */}
              </div>
              <div>
                <label htmlFor="agefrom" className="opacity-70">
                  Age From
                </label>
                <input
                  onChange={(e) => setAgeFrom(e.target.value)}
                  value={AgeFrom}
                  type="number"
                  name="agefrom"
                  min={18}
                  id="agefrom"
                  placeholder="Age From"
                  className="w-full border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-[rgb(255,20,146)]  p-2 bg-gray-100 my-2 range  outline-none placeholder:text-grey-400 focus:ring-2 focus:ring-inset focus:ring-[rgb(255,20,146)]"
                />
              </div>
              <div>
                <label htmlFor="ageto" className="opacity-70">
                  Age To
                </label>
                <input
                  onChange={(e) => setAgeto(e.target.value)}
                  value={Ageto}
                  type="number"
                  name="ageto"
                  min={18}
                  id="ageto"
                  placeholder="Age To"
                  className="w-full border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-[rgb(255,20,146)]  p-2 bg-gray-100 my-2 range  outline-none placeholder:text-grey-400 focus:ring-2 focus:ring-inset focus:ring-[rgb(255,20,146)]" />
              </div>
              <div>
                <label htmlFor="agefrom" className="opacity-70">
                  City
                </label>
                <input
                  onChange={(e) => setCity(e.target.value)}
                  value={City}
                  type="text"
                  name="city"
                  id="city"
                  placeholder="City"
                  className="w-full border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-[rgb(255,20,146)]  p-2 bg-gray-100 my-2 range  outline-none placeholder:text-grey-400 focus:ring-2 focus:ring-inset focus:ring-[rgb(255,20,146)]"
                />
              </div>
              <div>
                <label htmlFor="gotra" className="opacity-70">
                  Gotra
                </label>
                <input
                  onChange={(e) => setGotra(e.target.value)}
                  value={Gotra}
                  type="text"
                  name="gotra"
                  id="gotra"
                  placeholder="Gotra"
                  className="w-full border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-[rgb(255,20,146)]  p-2 bg-gray-100 my-2 range  outline-none placeholder:text-grey-400 focus:ring-2 focus:ring-inset focus:ring-[rgb(255,20,146)]" />
              </div>

            </div>
            <button
              className={`${isButtonDisabled ? 'bg-pink-400' : 'bg-[rgb(255,20,146)]'
                } text-white hover:scale-105 px-4 py-2 rounded-full duration-200 absolute -bottom-5 left-1/2 -translate-x-1/2`}
              disabled={isButtonDisabled}
              onClick={Search}
            >
              Search Now
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
