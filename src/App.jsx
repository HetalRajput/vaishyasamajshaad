import React, { lazy, Suspense } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Layout = lazy(() => import("./pages/Layout"));
const Home = lazy(() => import("./pages/Home"));
const Blogs = lazy(() => import("./pages/Blogs"));
const NoPage = lazy(() => import("./pages/NoPage"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const UpdateUSer = lazy(() => import("./pages/Updateuser"));
const UserProfile = lazy(() => import("./pages/Userprofile"));
const SignIn = lazy(() => import("./pages/Sign"));
const RegistartionForm = lazy(() => import("./pages/Signup"));
const LoggedUserProfile = lazy(() => import("./pages/LoggedUserProfile"));
const AdminDashboard = lazy(() => import("./pages/Dashboard"));
const WishListCardGrids = lazy(() => import("./components/WishCards/WishlistCardsGrid"));
const ViewAll = lazy(() => import("./components/WishCards/ViewAll"));
const SearchUser = lazy(() => import("./components/WishCards/SearchUser"));
const UpdateData = lazy(() => import("./pages/UpdateData"));
const PerfectMatches = lazy(() => import("./pages/PerfectMatches"));

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
        <Suspense fallback={<div className="min-h-screen grid place-items-center" role="status">Loading…</div>}>
          <Routes>
            <Route path="/login" element={<SignIn />} />
            <Route path="/signup" element={<RegistartionForm />} />
            <Route path="admin/dashboard" element={<AdminDashboard />} />
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="blogs" element={<Blogs />} />
              <Route path="contact" element={<Contact />} />
              <Route path="searchuser/:Gender/:AgeFrom/:AgeTo/:City/:Gotra" element={<SearchUser />} />
              <Route path="editprofile/:id" element={<UpdateData />} />
              <Route path="profile/:id" element={<UserProfile />} />
              <Route path="myprofile/:id" element={<LoggedUserProfile />} />
              <Route path="wishlist" element={<WishListCardGrids />} />
              <Route path="perfect-matches" element={<PerfectMatches />} />
              <Route path="viewall" element={<ViewAll />} />
              <Route path="about" element={<About />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
