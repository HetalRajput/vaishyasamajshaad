import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import NoPage from "./pages/NoPage";
import WishList from "./pages/Wish-list";
import About from "./pages/About";
import BlogsDetails from "./pages/BlogsDetails";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "./pages/Contact";
import UpdateUSer from "./pages/Updateuser";
import UserProfile from "./pages/Userprofile";
import SignIn from "./pages/Sign";
import RegistartionForm from "./pages/Signup";
import LoggedUserProfile from "./pages/LoggedUserProfile";
import AdminDashboard from "./pages/Dashboard";
import WishListCardGrids from "./components/WishCards/WishlistCardsGrid";
import ViewAll from "./components/WishCards/ViewAll";
import SearchUser from "./components/WishCards/SearchUser";
import UpdateData from "./pages/UpdateData";
import PerfectMatches from "./pages/PerfectMatches";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
     <style>
        {`
          ::selection {
            background-color: #bf47b6 /* Tailwind orange-500 equivalent */
            color: #ffffff; /* White text color */
          }
        `}
      </style>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<SignIn/>}></Route>
          <Route path="/signup" element={<RegistartionForm/>}></Route>
          <Route path="admin/dashboard" element={<AdminDashboard />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="searchuser/:Gender/:AgeFrom/:AgeTo/:City/:Gotra" element={<SearchUser />} />
            <Route path="Editprofile/:id" element={<UpdateData />} />
            {/* <Route path="Editprofiledata/:id" element={<UpdateData />} /> */}
            <Route path="profile/:id" element={<UserProfile />} />
            <Route path="myprofile/:id" element={<LoggedUserProfile />} />
            <Route path="wishlist" element={<WishListCardGrids />} />
            <Route path="perfect-matches" element={<PerfectMatches />} />
            <Route path="viewall" element={<ViewAll />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
