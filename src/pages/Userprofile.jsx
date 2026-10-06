import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useParams } from "react-router-dom";
import axios from "axios";
import { Base_URL, DefaultKey } from "../../Config";
import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { addToWishList, calculateAge } from "../Services";
import { getLocalStorageItem } from "../Storage";
import { toast } from 'react-toastify';
const UserProfile = () => {
    const param = useParams();
    const [DataArray, setDataArray] = useState()
    const [FamilyDetails, setFamilyDetails] = useState()
    const userId = param.id;
    const LoggedId = getLocalStorageItem('Id')
    const url = window.location.pathname.split('/').pop();
    const token = DefaultKey
    const CONFIG_OBJ = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'key ' + token
        }
    }
    const getUserById = async () => {
        const response = await axios.post(`${Base_URL}getUserdetailsById`, { userId }, CONFIG_OBJ);
        if (response.status === 200 && response.data.status) {
            setDataArray(response.data.data[0])

        } else {
            throw new Error('Failed to send data. Please try again.');
        }
    }
    function dateForm(string) {
        const isoDateString = string;
        const date = new Date(isoDateString);
        // Options for formatting the date
        const options = { year: 'numeric', month: 'long', day: 'numeric' };

        // Format the date to a human-readable string
        const formattedDate = date.toLocaleDateString('en-US', options);
        return formattedDate;

    }

    const AddTowWishlist = async (Id) => {
        if (LoggedId) {
            if (Id == LoggedId) {
                toast.error(`You Cant't Add Yourself To Wishlist`)
            } else {
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
        } else {
            toast.error(`Please login to add wishlist`)
        }

    }

    function bodyType(value) {
        //array
        const BodyArray = [
            { id: 1, type: 'Slim' },
            { id: 2, type: 'Average' },
            { id: 3, type: 'Athletic' },
            { id: 4, type: 'Heavy' },
            { id: 5, type: 'Mild' },
            { id: 6, type: 'Fat' },
            { id: 7, type: 'Fit' }
        ];
        // Find the object in BodyArray where the id matches the provided value
        const result = BodyArray.find(body => body.id == value);

        // Return the type if found, otherwise return null or a suitable default value
        return result ? result.type : null;
    }
    const Age = (value) => {
        const Age = calculateAge(value)
        return Age
    }
    useEffect(() => {
        if (DataArray && DataArray.familyDetails && DataArray.familyDetails.length > 0) {
            setFamilyDetails(DataArray.familyDetails[0])
        }
        if (!LoggedId && DataArray) {
            DataArray.WorkPlaceAddress = "**********"
            DataArray.Location = "**********"
            DataArray.Email = "**********"
            DataArray.Annual_Income = "**********"
            DataArray.Phone = "**********"
        }
    }, [DataArray])
    useEffect(() => {
        getUserById()
    }, [url])
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>{DataArray ? DataArray.Name : 'Loading...'}-VaishyaSamajShadi</title>
                </Helmet>
            </HelmetProvider>
            <div className="bg-gray-100 my-20">
                <div className="container mx-auto py-8">
                    <div className="dark:bg-gray-900 dark:text-white">
                        <section data-aos="fade-up" data-aos-once="true" className="container flex justify-center">
                            <h1 className=" my-8 border-t-[4px] border-t-[3px] border-l-8 h-2 border-r-8 pr-2 border-pink-500 py-2 pl-2 text-3xl font-bold">
                                About
                            </h1>
                        </section>
                    </div>

                    <div className="bg-gray-100">
                        <div className="container mx-auto my-5 p-5">
                            <div className="md:flex no-wrap md:-mx-2 ">
                                {/* <!-- Left Side --> */}
                                <div className="w-full md:w-3/12 md:mx-2">
                                    {/* <!-- Profile Card --> */}
                                    <div className="bg-white p-3 border-t-4 border-pink-400">
                                        <div className="image overflow-hidden">
                                            <img className="h-auto w-full mx-auto"
                                                src={DataArray ? Base_URL + DataArray.Photo : Base_URL + 'avtar.jpg'}
                                                alt="avtar" />
                                        </div>
                                        <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">{DataArray ? DataArray.Name : 'Loading...'} <button onClick={() => AddTowWishlist(DataArray ? DataArray.Id : '0')} className="no-underline my-1 text-pink-darker hover:text-red-dark removeWishlist" title="Add to wishlist">
                                            <FaRegHeart style={{ color: '#e33093' }} />
                                        </button></h1>
                                        <h3 className="text-gray-600 font-lg text-semibold leading-6">{DataArray ? DataArray.Occupation : 'Loading...'}</h3>
                                        <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">{DataArray ? DataArray.Additional_Details : 'Loading...'}</p>
                                        <ul
                                            className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                                            <li className="flex items-center py-3">
                                                <span>Status</span>
                                                <span className="ml-auto"><span
                                                    className="bg-pink-500 py-1 px-2 rounded text-white text-sm">Verified</span></span>
                                            </li>
                                            <li className="flex items-center py-3">
                                                <span>Date Of Birth</span>
                                                <span className="ml-auto">{dateForm(DataArray ? DataArray.DOB : 'Loading...')}</span>
                                            </li>
                                            <li className="flex items-center py-3">
                                                <span>Occupation</span>
                                                <span className="ml-auto">{DataArray ? DataArray.Occupation : 'Loading...'}</span>
                                            </li>
                                            <li className="flex items-center py-3">
                                                <span>Government Id</span>
                                                <span className="ml-auto">{DataArray ? DataArray.GovermentDocId : 'Loading...'}</span>
                                            </li>
                                            <li className="flex items-center py-3">
                                                <span>Designation</span>
                                                <span className="ml-auto">{DataArray ? DataArray.Designation : 'Loading...'}</span>
                                            </li>
                                            <li className="flex items-center py-3">
                                                <span>Education</span>
                                                <span className="ml-auto">{DataArray ? DataArray.HighestEduction : 'Loading...'}</span>
                                            </li>
                                            <li className="flex items-center py-3">
                                                <span>Degree</span>
                                                <span className="ml-auto">{DataArray ? DataArray.DegreeType : 'Loading...'}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="w-full md:w-9/12 h-auto">
                                    <div className="bg-white p-3 shadow-sm rounded-sm">
                                        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                                            <span clas="text-green-500">
                                                <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                            </span>
                                            <span className="tracking-wide">More Details</span>
                                        </div>
                                        <div className="text-gray-700">
                                            <div className="grid md:grid-cols-2 text-sm">
                                                <div className="grid grid-cols-2">
                                                    <div className="px-4 py-2 font-semibold">Name</div>
                                                    <div className="px-4 py-2">{DataArray ? DataArray.Name : 'Loading...'}</div>
                                                </div>
                                                <div className="grid grid-cols-2">
                                                    <div className="px-4 py-2 font-semibold">Gotra</div>
                                                    <div className="px-4 py-2">{DataArray ? DataArray.Gotra : 'Loading...'}</div>
                                                </div>
                                                <div className="grid grid-cols-2">
                                                    <div className="px-4 py-2 font-semibold">Gender</div>
                                                    <div className="px-4 py-2">{DataArray ? (DataArray.Gender == 1 ? 'Male' : 'Female') : 'Loading...'}</div>
                                                </div>
                                                <div className="grid grid-cols-2">
                                                    <div className="px-4 py-2 font-semibold">Contact No.</div>
                                                    <div className={`px-4 py-2 break-words ${!LoggedId ? 'blur-sm select-none' : ''}`}> {DataArray ? DataArray.Phone : 'Loading...'}</div>
                                                </div>
                                                <div className="grid grid-cols-2">
                                                    <div className="px-4 py-2 font-semibold">Current Address</div>
                                                    <div className={`px-4 py-2 break-words ${!LoggedId ? 'blur-sm select-none' : ''}`}>{DataArray ? DataArray.Location : 'Loading...'}</div>
                                                </div>
                                                <div className="grid grid-cols-2">
                                                    <div className="px-4 py-2 font-semibold">Work Address</div>
                                                    <div className={`px-4 py-2 break-words ${!LoggedId ? 'blur-sm select-none' : ''}`}>{DataArray ? DataArray.WorkPlaceAddress : 'Loading...'}</div>
                                                </div>

                                                <div className="grid grid-cols-2">
                                                    <div className="px-4 py-2 font-semibold">Email.</div>
                                                    <div className="px-4 py-2">
                                                        <a className={`py-2 break-words ${!LoggedId ? 'blur-sm select-none' : ''}`} href={DataArray ? `mailto:${DataArray.Email}` : 'Loading...'}>
                                                            {DataArray ? DataArray.Email : 'Loading...'}
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-2">
                                                    <div className="px-4 py-2 font-semibold">Age</div>
                                                    <div className="px-4 py-2">{DataArray ? (`${Age(DataArray.DOB)} yrs`) : 'Loading...'}</div>
                                                </div>
                                                <div className="grid grid-cols-2">
                                                    <div className="px-4 py-2 font-semibold">Height</div>
                                                    <div className={`px-4 py-2`}>{DataArray ? DataArray.Height : 'Loading...'}</div>
                                                </div>
                                                <div className="grid grid-cols-2">
                                                    <div className="px-4 py-2 font-semibold">Annual Income</div>
                                                    <div className={`px-4 py-2 break-words ${!LoggedId ? 'blur-sm select-none' : ''}`}>₹ {DataArray ? DataArray.Annual_Income : 'Loading...'}</div>
                                                </div>
                                                <div className="grid grid-cols-2">
                                                    <div className="px-4 py-2 font-semibold">Color</div>
                                                    <div className="px-4 py-2">{DataArray ? DataArray.Complexion : 'Loading...'}</div>
                                                </div>
                                                <div className="grid grid-cols-2">
                                                    <div className="px-4 py-2 font-semibold">Body type</div>
                                                    <div className="px-4 py-2">{DataArray ? bodyType(DataArray.BodyType) : 'Loading...'}</div>
                                                </div>
                                                <div className="grid grid-cols-2">
                                                    <div className="px-4 py-2 font-semibold">Birth Place</div>
                                                    <div className="px-4 py-2">{DataArray ? DataArray.BirthPlace : 'Loading...'}</div>
                                                </div>
                                                <div className="grid grid-cols-2">
                                                    <div className="px-4 py-2 font-semibold">Birth Time</div>
                                                    <time className="px-4 py-2">{DataArray ? DataArray.BirthTime : 'Loading...'}</time>
                                                </div>
                                                <div className="grid grid-cols-2">
                                                    <div className="px-4 py-2 font-semibold">Past Marital</div>
                                                    <time className="px-4 py-2">{DataArray ? (DataArray.LifeType==0 ? 'None' : (DataArray.LifeType==1?'Widow':'Divorcee')) : 'Loading...'}</time>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="my-4"></div>

                                    <div className="bg-white p-3 shadow-sm rounded-sm">
                                        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                                            <span clas="text-green-500">
                                                <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                            </span>
                                            <span className="tracking-wide">Family Details</span>
                                        </div>
                                        <div className="text-gray-700">
                                            <div className="grid md:grid-cols-2 text-sm">
                                                <div className="grid grid-cols-2">
                                                    <div className="px-4 py-2 font-semibold">Father</div>
                                                    <div className="px-4 py-2"> {FamilyDetails ? FamilyDetails.FatherName : ''}</div>
                                                </div>
                                                <div className="grid grid-cols-2">
                                                    <div className="px-4 py-2 font-semibold">Mother</div>
                                                    <div className="px-4 py-2"> {FamilyDetails ? FamilyDetails.MotherName : ''}</div>
                                                </div>
                                                <div className="grid grid-cols-2">
                                                    <div className="px-4 py-2 font-semibold">Father Occupation</div>
                                                    <div className="px-4 py-2"> {FamilyDetails ? FamilyDetails.FatherOccupation : ''}</div>
                                                </div>
                                                <div className="grid grid-cols-2">
                                                    <div className="px-4 py-2 font-semibold">Mother's Occupation</div>
                                                    <div className="px-4 py-2 break-words"> {FamilyDetails ? FamilyDetails.MotherOccupation : ''}</div>
                                                </div>
                                                <div className="grid grid-cols-2">
                                                    <div className="px-4 py-2 font-semibold">Fathers's Contact</div>
                                                    <div className={`px-4 py-2 break-words  ${!LoggedId ? 'blur-sm select-none' : ''}`}> {FamilyDetails ? FamilyDetails.FatherPhone : ''}</div>
                                                </div>
                                                <div className="grid grid-cols-2">
                                                    <div className="px-4 py-2 font-semibold">Family Address</div>
                                                    <div className={`px-4 py-2 break-words ${!LoggedId ? 'blur-sm select-none' : ''}`}> {FamilyDetails ? FamilyDetails.FamilyAddress : ''}</div>
                                                </div>
                                                <div className="grid grid-cols-2">
                                                    <div className="px-4 py-2 font-semibold">Brother(s)</div>
                                                    <div className={`px-4 py-2 break-words ${!LoggedId ? 'blur-sm select-none' : ''}`}>{FamilyDetails ? FamilyDetails.Brothers : ''}</div>
                                                </div>
                                                <div className="grid grid-cols-2">
                                                    <div className="px-4 py-2 font-semibold">Married</div>
                                                    <div className={`px-4 py-2 break-words ${!LoggedId ? 'blur-sm select-none' : ''}`}>{FamilyDetails ? FamilyDetails.Married_Brother : ''}</div>
                                                </div>
                                                <div className="grid grid-cols-2">
                                                    <div className="px-4 py-2 font-semibold">Sister(s)</div>
                                                    <div className={`px-4 py-2 break-words ${!LoggedId ? 'blur-sm select-none' : ''}`}>{FamilyDetails ? FamilyDetails.Sisters : ''}</div>
                                                </div>
                                                <div className="grid grid-cols-2">
                                                    <div className="px-4 py-2 font-semibold">Married</div>
                                                    <div className={`px-4 py-2 break-words ${!LoggedId ? 'blur-sm select-none' : ''}`}>{FamilyDetails ? FamilyDetails.Married_Sister : ''}</div>
                                                </div>
                                                <div className="grid grid-cols-2">
                                                    <div className="px-4 py-2 font-semibold">MAMA Name</div>
                                                    <div className={`px-4 py-2 break-words ${!LoggedId ? 'blur-sm select-none' : ''}`}>{FamilyDetails ? FamilyDetails.MaternalUncle : ''}</div>
                                                </div>
                                                <div className="grid grid-cols-2">
                                                    <div className="px-4 py-2 font-semibold">NANA Name</div>
                                                    <div className={`px-4 py-2 break-words ${!LoggedId ? 'blur-sm select-none' : ''}`}>{FamilyDetails ? FamilyDetails.MaternalGrandFather : ''}</div>
                                                </div>
                                                <div className="grid grid-cols-2">
                                                    <div className="px-4 py-2 font-semibold">NANA Gotra</div>
                                                    <div className={`px-4 py-2 break-words ${!LoggedId ? 'blur-sm select-none' : ''}`}>{FamilyDetails ? FamilyDetails.NanaGotra : ''}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Social Links  */}
                                    <div className="bg-white p-3 shadow-sm rounded-sm">
                                        <h3 className="font-semibold text-center mt-3 -mb-2">
                                            Find me on
                                        </h3>
                                        <div className="flex justify-center items-center gap-6 my-6">

                                            <a className="text-gray-700 hover:text-green-600" aria-label="Visit TrendyMinds YouTube" href={DataArray ? DataArray.Whatsapp : ''}
                                                target="_blank">
                                                <svg fill="#303030" height="25px" width="25px" className="h-6" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 308 308" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="XMLID_468_"> <path fill="currentColor" id="XMLID_469_" d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156 c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687 c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887 c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153 c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348 c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802 c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922 c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0 c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458 C233.168,179.508,230.845,178.393,227.904,176.981z"></path> <path fill="currentColor" id="XMLID_470_" d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716 c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396 c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188 l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677 c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867 C276.546,215.678,222.799,268.994,156.734,268.994z"></path> </g> </g></svg>
                                            </a>
                                            <a className="text-gray-700 hover:text-blue-600" aria-label="Visit TrendyMinds Facebook" href={DataArray ? DataArray.Facebook : 'Loading...'}
                                                target="_blank">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="h-6">
                                                    <path fill="currentColor"
                                                        d="m279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
                                                    </path>
                                                </svg>
                                            </a>
                                            <a className="text-gray-700 hover:text-orange-600" aria-label="Visit TrendyMinds Instagram" href={DataArray ? DataArray.Instagram : 'Loading...'}
                                                target="_blank">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-6">
                                                    <path fill="currentColor"
                                                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
                                                    </path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
export default UserProfile