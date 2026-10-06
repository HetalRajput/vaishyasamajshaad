import { Fragment, useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { addToWishList, calculateAge, getAllProfiles, removeFromWishList } from "../../Services"
import { getLocalStorageItem } from "../../Storage";
import { FaHeart, FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";
import { Base_URL } from "../../../Config";
import { toast } from 'react-toastify';
const ViewAll = () => {
    const LoggedUser = getLocalStorageItem('Id');
    const url = window.location.pathname.split('/').pop();
    const [DataArray, setDataArray] = useState([])
    const WishArray = localStorage.getItem('WishArray') ? localStorage.getItem('WishArray') : []
    console.log(WishArray);
    const getAllUserProfiles = async () => {
        const response = await getAllProfiles()
        if (response.status === 200) {
            setDataArray(response.data.data)
        }
    }
    const Age = (value) => {
        const Age = calculateAge(value)
        return Age
    }
    const DeletedWishList = async (id) => {
        const response = await removeFromWishList(id, LoggedUser)
        if (response.data.status) {
            toast.success(response.data.message)
            getAllUserProfiles()
        } else {
            toast.error(response.data.message)
        }
    }
    const AddTowWishlist = async (Id) => {
        if (LoggedUser) {
            if (Id == LoggedUser) {
                toast.error(`You Cant't Add Yourself To Wishlist`)
            } else {
                const response = await addToWishList(Id, LoggedUser)
                if (response.status === 200) {
                    if (response.data) {
                        toast.success(response.data.message)
                    } else {
                        toast.error(response.data.message)
                    }

                } else if (response.status === 201) {
                    toast.error(response.data.message)
                } else {
                    throw new Error('Failed to send data. Please try again.');
                }
            }
        } else {
            toast.error(`Please login to add wishlist`)
        }

    }
    useEffect(() => {
        getAllUserProfiles()
    }, [url])
    return (
        <Fragment>
            <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
                <section data-aos="fade-up" data-aos-once="true" className="container ">
                    <div className="dark:bg-gray-900 dark:text-white py-10">
                        <section data-aos="fade-up" data-aos-once="true" className="container flex justify-center">
                            <h1 className=" my-8 border-t-[4px] border-t-[3px] border-l-8 h-2 border-r-8 pr-2 border-pink-500 py-2 pl-2 text-3xl font-bold">
                                All Profiles
                            </h1>
                        </section>
                    </div>

                    {/* <div className="container my-12 mx-auto px-4 md:px-12"> */}
                    {/* <div className="flex flex-wrap -mx-1 lg:-mx-4"> */}
                    <div class="flex min-h-screen items-center justify-center">
                        <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 w-full">
                            {DataArray.map((item, i) => (
                                <div class="group relative rounded-2xl cursor-pointer shadow items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30" key={i}>
                                    <div class="h-[450px] w-full flex items-center border justify-center">
                                        <img class="h-full w-full object-cover transition-transform duration-500 object-contain" src={Base_URL + item.Photo} alt="user" />
                                    </div>
                                    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                                    <div class="absolute inset-0 flex translate-y-[85%] flex-col  px-9 text-center transition-all duration-500 group-hover:translate-y-[58%]">
                                        <h2 class="font-dmserif text-lg font-bold text-white text-left">{item.Name}<br /> {Age(item.DOB)} years</h2>

                                        <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                            {item.Location ? <span className="flex items-center no-underline hover:underline text-black">
                                                <FaMapMarkerAlt style={{ color: '#e33093' }} />
                                                <p className="ml-2  text-white text-sm">
                                                    {item.Location}
                                                </p>
                                            </span> : ''}
                                        </p>
                                        {/* {WishArray.includes(item.Id) ? <button onClick={() => DeletedWishList(item.Id)} className="no-underline text-pink-darker hover:text-red-dark removeWishlist" title="remove from wishlist">
                                            <FaHeart style={{ color: '#e33093', fontSize: '30px' }} />
                                        </button> : <button onClick={() => AddTowWishlist(item.Id)} className="no-underline text-pink-darker hover:text-red-dark" title="Add to wishlist">
                                            <FaRegHeart style={{ color: '#e33093' }} />
                                        </button>} */}
                                        <NavLink to={`/profile/${item.Id}`}>
                                            <button class="rounded-full mt-4 bg-pink-700 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">Show Profile</button>
                                        </NavLink>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* </div> */}
                    {/* </div> */}
                </section>
            </div>
        </Fragment>
    )
}
export default ViewAll