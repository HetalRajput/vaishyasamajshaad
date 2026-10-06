import React, { useState } from "react";
import Logo from "../../assets/logo4.png";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import ResponsiveMenu from "./ResponsiveMenu";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { FaUserPlus, FaSignOutAlt } from "react-icons/fa";
import { getLocalStorageItem } from "../../Storage";
import 'react-dropdown/style.css';


const Navbar = ({ handleOrderPopup }) => {
  const [showMenu, setShowMenu] = useState(false);
  const LoggedUser = getLocalStorageItem('Id');
  const LoggerUserName = getLocalStorageItem('Name');
  const ProfileType = getLocalStorageItem('ProfileType');
  const navigate = useNavigate()


  const DropToggle = (event)=>{
    const Id = btoa(LoggedUser)
    const InPut = event.target.getAttribute('data-id')
    if(InPut==='1'){
      navigate(`/myprofile/${Id}`)
    }
    else if(InPut==='2'){
      navigate('/admin/dashboard')
    }else{
      localStorage.clear()
      navigate('/login')
    }
  }
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    // <>
    <nav className={`fixed top-0 right-0 w-full z-50 bg-[rgb(255,20,146)] backdrop-blur-sm text-black shadow-md`}>
      {/* <div className="bg-gradient-to-r from-primary to-secondary text-white ">
          <div className="container py-[2px] sm:block hidden">
            <div className="flex items-center justify-between">
              <p className="text-sm">20% off on next booking</p>
              <p>mobile no. +91 123456789</p>
            </div>
          </div>
        </div> */}
      <div className="container py-3 sm:py-0">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4  font-bold text-2xl">
            <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
              <img src={Logo} alt="" className="h-20" style={{ filter: " brightness(4.5)" }} />
            </Link>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 " style={{ gap: "3.5rem" }}>
              <li className="py-4 text-white">
                <NavLink to="/" activeclassname="active">
                  Home
                </NavLink>
              </li>
              <li className="py-4 text-white" >
            
                <NavLink to="/about" activeclassname="active">
                  About
                </NavLink>
              </li>
              <li className="py-4 text-white">
                <NavLink to="/contact" activeclassname="active">
                  Contact
                </NavLink>
              </li>
              {LoggedUser ? <li className="py-4 text-white">
                <NavLink to="/wishlist" activeclassname="active">
                  Wishlist
                </NavLink>
              </li> : ''}
              {LoggedUser ? <li className="py-4 text-white">
                <NavLink to="/perfect-matches" activeclassname="active">
                Matches
                </NavLink>
              </li> : ''}
            </ul>
          </div>
          <div className="flex items-center gap-4" >
            {!LoggedUser ? <NavLink to={'/signup'}
              className="bg-pink-50 hover:bg-slate-300 transition-all duration-600 text-[black] px-4 py-2 rounded-md flex items-center gap-x-2"
            
              onClick={() => {
                handleOrderPopup();
              }}
            >
              <FaUserPlus />  Sign Up
            </NavLink> :
              <>
                 <div className="group relative cursor-pointer">
                  <button
                    className="text-white hover:underline hover:text-black flex h-[72px] items-center gap-[2px]"
                  >
                    {LoggerUserName.toUpperCase()}{" "}
                    <span>
                      <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                    </span>
                  </button>
                  <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block shadow-md ">
                    <ul className="space-y-3">
                        <li data-id='1' onClick={DropToggle}>
                          <button data-id='1'
                            className="inline-block w-full rounded-md p-2 hover:bg-pink-100"
                          >
                            My Profile
                          </button>
                        </li>
                        {ProfileType==1 ?  <li data-id='2' onClick={DropToggle}>
                          <button data-id='2'
                            className="inline-block w-full rounded-md p-2 hover:bg-pink-100"
                          >
                            Dashboard
                          </button>
                        </li> :''}
                        <li data-id='3' onClick={DropToggle}>
                          <button data-id='3'
                            className="inline-block w-full rounded-md p-2 hover:bg-pink-100"
                          >
                            Logout
                          </button>
                        </li>
                    </ul>
                  </div>
                </div>
                {/* <Dropdown options={options} onChange={DropToggle} className="rounded-lg bg-pink-200 hidden md:block bg-white hover:bg-slate-300 transition-all duration-600 text-[black] rounded-md flex items-center gap-x-2"  value={defaultOption} placeholder="Select an option" /> */}
              </>
            }
            {/* Mobile Hamburger icon */}
            <div className="md:hidden block">
              {showMenu ? (
                <IoMdClose
                  onClick={toggleMenu}
                  className=" cursor-pointer transition-all text-white"
                  size={30}
                />
              ) : (
                <HiMenuAlt3
                  onClick={toggleMenu}
                  className="cursor-pointer transition-all text-white"
                  size={30}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
    </nav>
    // </>
  );
};

export default Navbar;
