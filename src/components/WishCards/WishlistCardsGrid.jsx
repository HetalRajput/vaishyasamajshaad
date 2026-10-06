import { Fragment, useEffect, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { calculateAge, getWishList, removeFromWishList } from "../../Services"
import { getLocalStorageItem } from "../../Storage";
import { FaHeart, FaBriefcase } from "react-icons/fa";
import { FaInstagram, FaWhatsapp, FaFacebookF } from "react-icons/fa";
import { Base_URL } from "../../../Config";
import { toast } from 'react-toastify';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const WishListCardGrids = () => {
    const LoggedUser = getLocalStorageItem('Id');
    const url = window.location.pathname.split('/').pop();
    const [DataArray, setDataArray] = useState([])
    const navigate = useNavigate()
    const GetUserWishList = async () => {
        const response = await getWishList(LoggedUser)
        if (response.status === 200) {
            setDataArray(response.data.data)
        }
        if (response.status === 201) {
            setDataArray([])
        }
    }
    const Deleted = async (id) => {
        const response = await removeFromWishList(id, LoggedUser)
        if (response.data.status) {
            toast.success(response.data.message)
            GetUserWishList()
        } else {
            toast.error(response.data.message)
        }
    }
    
    useEffect(() => {
        let ArrayWish = [];
        DataArray.forEach((element) => {
            ArrayWish.push(element.Id)
        });
        localStorage.setItem('WishArray', ArrayWish)
    }, [DataArray])
    useEffect(() => {
        if (LoggedUser) {
            GetUserWishList();
        } else {
            navigate('/login')
        }
    }, [url])
    return (
        <Fragment>
            <HelmetProvider>
                <Helmet>
                    <title>Wishlist-VaishyaSamajShadi</title>
                </Helmet>
            </HelmetProvider>
            <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
                <section data-aos="fade-up" data-aos-once="true" className="container ">
                    <div className="dark:bg-gray-900 dark:text-white py-10">
                        <section data-aos="fade-up" data-aos-once="true" className="container flex justify-center">
                            <h1 className=" my-8 border-t-[4px] border-t-[3px] border-l-8 h-2 border-r-8 pr-2 border-pink-500 py-2 pl-2 text-3xl font-bold">
                                Your Wishlist
                            </h1>
                        </section>
                    </div>
                    {DataArray.length == 0 ? <h1 className="text-center">No record found...</h1> : ''}
                    <div className="container my-12 mx-auto px-4 md:px-12">
                        <div className="flex flex-wrap -mx-1 lg:-mx-4">
                            {DataArray.map((item, i) => (
                                <div className="relative flex m-1 flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-72" key={i}>
                                    <NavLink to={`/profile/${item.Id}`}>
                                        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
                                            <img src={Base_URL + item.Photo} alt="profile-picture" />
                                        </div>
                                    </NavLink>
                                    <div className="p-6 text-center">
                                        <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                            {item.Name}
                                        </h4>
                                        <p
                                            className="block font-sans text-base antialiased font-medium leading-relaxed text-black bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
                                            {calculateAge(item.DOB)} years
                                        </p>
                                    </div>
                                    <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                                        <a className="flex items-center no-underline hover:underline text-black" href="#">
                                            {/* <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random" /> */}
                                            <FaBriefcase style={{ color: '#e33093' }} />
                                            <p className="ml-2 text-sm">
                                                {item.Occupation}
                                            </p>
                                        </a>
                                        <button onClick={() => Deleted(item.Id)} className="no-underline text-pink-darker hover:text-red-dark removeWishlist" title="remove from wishlist">
                                            <FaHeart style={{ color: '#e33093' }} />
                                        </button>
                                    </footer>
                                </div>
                                // <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3" key={i}>
                                //     <article className="overflow-hidden rounded-lg shadow-lg">

                                //         <NavLink to={`/profile/${item.Id}`}>
                                //             <img alt={item.Photo} className="block h-auto w-full" src={Base_URL + item.Photo} />
                                //         </NavLink>

                                //         <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                //             <h1 className="text-lg">
                                //                 <span className="text-black">
                                //                     {item.Name}
                                //                 </span>
                                //             </h1>
                                //             <p className="text-grey-darker text-sm">
                                //                 {Age(item.DOB)} years
                                //             </p>
                                //         </header>

                                //         <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                                //             <a className="flex items-center no-underline hover:underline text-black" href="#">
                                //                 {/* <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random" /> */}
                                //                 <FaBriefcase style={{ color: '#e33093' }} />
                                //                 <p className="ml-2 text-sm">
                                //                     {item.Occupation}
                                //                 </p>
                                //             </a>
                                //             <button onClick={() => Deleted(item.Id)} className="no-underline text-pink-darker hover:text-red-dark removeWishlist" title="remove from wishlist">
                                //                 <FaHeart style={{ color: '#e33093' }} />
                                //             </button>
                                //         </footer>

                                //     </article>
                                //     {/* <!-- END Article --> */}

                                // </div>
                            ))}



                        </div>
                    </div>
                </section>
            </div>

        </Fragment>
    )
}
export default WishListCardGrids