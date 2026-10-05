import { Fragment, useEffect, useState } from "react"
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import { Base_URL } from "../../../Config";
import { FaRegHeart, FaBriefcase } from "react-icons/fa";
import { addToWishList, calculateAge } from "../../Services";
import { getLocalStorageItem } from "../../Storage";
import { toast } from 'react-toastify';

const SearchUser = () => {
    const params = useParams()
    const url = window.location.pathname.split('/').pop();
    const [DataArray, setDataArray] = useState([])
    const LoggedId = getLocalStorageItem('Id')
    const Age = (value) => {
        const Age = calculateAge(value)
        return Age
    }
    const Search = async () => {

        try {
            const response = await axios.post(`${Base_URL}api/search`, {
                Gender: params.Gender,
                AgeFrom: params.AgeFrom,
                AgeTo: params.AgeTo,
                City: params.City,
                Gotra: params.Gotra,
            });

            // Handle the successful response
            if (response.status === 200) {
                setDataArray(response.data.data)
            }
        } catch (error) {
            // Handle errors
            if (error.response) {
                // Server responded with a status other than 200 range
                console.error('Error response:', error.response.data);
                setError(error.response.data.message || 'An error occurred.');
            } else if (error.request) {
                // Request was made but no response was received
                console.error('Error request:', error.request);
                setError('No response received from the server.');
            } else {
                // Something happened in setting up the request
                console.error('Error message:', error.message);
                setError(error.message);
            }
        }
    };
    const AddTowWishlist = async (Id) => {
        if(Id==LoggedId){
            toast.error(`You Cant't Add Yourself To Wishlist`)
        }else{
            const response = await addToWishList(Id, LoggedId)
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
       
    }

    useEffect(() => {
        Search()
    }, [url])
    return (
        <Fragment>
            <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
                <section data-aos="fade-up"  data-aos-once="true" className="container ">
                    <div className="dark:bg-gray-900 dark:text-white py-10">
                        <section data-aos="fade-up"  data-aos-once="true" className="container flex justify-center">
                            <h1 className=" my-8 border-t-[4px] border-t-[3px] border-l-8 h-2 border-r-8 pr-2 border-pink-500 py-2 pl-2 text-3xl font-bold">
                                Search Profiles
                            </h1>
                        </section>
                    </div>

                    <div className="container my-12 mx-auto px-4 md:px-12">
                        <div className="flex flex-wrap -mx-1 lg:-mx-4">
                            {DataArray.map((item, i) => (
                                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3" key={i}>
                                    <article className="overflow-hidden rounded-lg shadow-lg">

                                        <NavLink to={`/profile/${item.Id}`}>
                                            <img alt={item.Photo} className="block h-48 w-full object-contain" src={Base_URL + item.Photo} />
                                        </NavLink>

                                        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                            <h1 className="text-lg">
                                                <span className="text-black">
                                                    {item.Name}
                                                </span>
                                            </h1>
                                            <p className="text-grey-darker text-sm">
                                                {Age(item.DOB)} years
                                            </p>
                                        </header>

                                        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                                            <a className="flex items-center no-underline hover:underline text-black" href="#">
                                                {/* <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random" /> */}
                                                <FaBriefcase style={{ color: '#e33093' }} />
                                                <p className="ml-2 text-sm">
                                                    {item.Occupation}
                                                </p>
                                            </a>
                                            {item.Id!=LoggedId ? <button onClick={() => AddTowWishlist(item.Id)} className="no-underline text-pink-darker hover:text-red-dark removeWishlist" title="Add to wishlist">
                                                <FaRegHeart style={{ color: '#e33093' }} />
                                            </button> :''} 
                                        </footer>

                                    </article>
                                    {/* <!-- END Article --> */}

                                </div>
                            ))}


                        </div>
                    </div>
                            {DataArray.length ==0 ? <h1 className="text-center text-2xl">No Result Found.....🫣</h1>:''}
                </section>
            </div>
        </Fragment>
    )
}
export default SearchUser