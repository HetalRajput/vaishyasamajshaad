import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getLocalStorageItem } from "../../Storage";
import { Base_URL } from "../../../Config";

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  const LoggerUserName = getLocalStorageItem('Name');
  let NavbarLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
   
  ];
  if (LoggerUserName) {
    NavbarLinks.push({
      name: "Wish List",
      link: "/wishlist",
    });
    NavbarLinks.push({
      name: "Matches",
      link: "/perfect-matches",
    });
  }
  
  const LoggerUserPhoto = getLocalStorageItem('Photo');
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      <div className="card">
      {LoggerUserName ? <div className="flex items-center justify-start gap-3">
          
          <img src={Base_URL + LoggerUserPhoto} className="w-16 h-16 bg-gray-300 rounded-full mb-4 shrink-0 object-contain" />
          <div>
            <h1>{LoggerUserName}</h1>
          </div>
        </div>:<> <Link
                  to={`/login`}
                  className="mb-5 inline-block"
                >
                 <FaUserCircle size={50} /> Login
                </Link></> }  
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {NavbarLinks.map((data,i) => (
              <li key={i}>
                <Link
                  to={data.link}
                  onClick={() => setShowMenu(false)}
                  className="mb-5 inline-block"
                >
                  {data.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="footer">
        <h1>
          Made with ❤️ by Vaishya Samaj Shaadi{" "}
        </h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
