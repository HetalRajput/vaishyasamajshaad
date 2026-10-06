import { Helmet, HelmetProvider } from 'react-helmet-async';
import { getLocalStorageItem } from '../Storage';
import axios from 'axios';
import { Base_URL } from '../../Config';
import { useEffect, useState } from 'react';
import { FaTrash } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { FaUndo } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaObjectGroup, FaCheck,FaMoneyCheck,FaMendeley } from "react-icons/fa";
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const AdminDashboard = () => {
    const LoggerUserName = getLocalStorageItem('Name');
    const [usersArray, setUserArray] = useState([])
    const [val, setVal] = useState(1)
    const [changeval, setChangeVal] = useState(1)
    const navigate = useNavigate()
    const LoggedId = getLocalStorageItem('Id')
    const ProfileType = getLocalStorageItem('ProfileType')
    const LoggerUserPhoto = getLocalStorageItem('Photo');

    const getAllUsers = async () => {
        try {
            setChangeVal(val)
            const response = await axios.get(`${Base_URL}${val}/getAllUsers`);
            // Handle the successful response
            if (response.status === 200) {
                if (response.data.status) {
                    setUserArray(response.data.data);
                } else {
                    toast.error(response.data.message)
                }

            }
        } catch (error) {
            // Handle errors
            if (error.response) {
                // Server responded with a status other than 200 range
                console.log('Error response: ' + error.response.data);
            } else {
                // Request was made but no response was received
                console.log('Error request: ' + error);
            }
        }
    }

    const getTransactionData = async () =>{
        try {
            setChangeVal(5)
            const response = await axios.get(`${Base_URL}gettransaction`);
            // Handle the successful response
            if (response.status === 200) {
                if (response.data.status) {
                    setUserArray(response.data.data);
                } else {
                    toast.error(response.data.message)
                }

            }
        } catch (error) {
            // Handle errors
            if (error.response) {
                // Server responded with a status other than 200 range
                console.log('Error response: ' + error.response.data);
            } else {
                // Request was made but no response was received
                console.log('Error request: ' + error);
            }
        }
    }
    const getVisitors = async()=>{
        try {
            setChangeVal(6)
            const response = await axios.get(`${Base_URL}getvisitors`);
            // Handle the successful response
            if (response.status === 200) {
                if (response.data.status) {
                    setUserArray(response.data.data);
                } else {
                    toast.error(response.data.message)
                }

            }
        } catch (error) {
            // Handle errors
            if (error.response) {
                // Server responded with a status other than 200 range
                console.log('Error response: ' + error.response.data);
            } else {
                // Request was made but no response was received
                console.log('Error request: ' + error);
            }
        }
    }

    const ChnageStatus = async (isActive,id) => {
        try {
            // const id = event.target.id;
            // const isActive = event.target.getAttribute('data-id');
            // return;
            const response = await axios.get(`${Base_URL}${id}/${isActive}/ChnageStatus`);
            // Handle the successful response
            if (response.status === 200) {
                if (response.data.status) {
                    toast.success(response.data.message)
                    if (isActive == 0) {
                        setVal(1)
                        getAllUsers()
                    } else {
                        setVal(0)
                        getAllUsers()
                    }

                } else {
                    alert(response.data.message)
                }

            }
        } catch (error) {
            // Handle errors
            if (error.response) {
                // Server responded with a status other than 200 range
                console.log('Error response: ' + error.response.data);
            } else {
                // Request was made but no response was received
                console.log('Error request: ' + error);
            }
        }
    }
    const Logout = () => {
        localStorage.clear()
        navigate('/login')
    }
    const ApproveUser = async (id) => {
        try {
            const response = await axios.get(`${Base_URL}${id}/userapprove`);
            // Handle the successful response
            if (response.status === 200) {
                if (response.data.status) {
                    toast.success(response.data.message)
                    getAllUsers()

                } else {
                    toast.error(response.data.message)
                }

            }
        } catch (error) {
            console.error(error)
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

    useEffect(() => {
        if (LoggedId && ProfileType == 1) {
            if(changeval==5){
                getTransactionData()
            }
            else if(changeval==6){
                getVisitors()
            }
            else{
                getAllUsers()
            }
            
            document.getElementById('sidebarToggle').addEventListener('click', function () {
                var sidebar = document.getElementById('default-sidebar');
                sidebar.classList.toggle('-translate-x-full');
            });

            document.getElementById('sidebarClose').addEventListener('click', function () {
                var sidebar = document.getElementById('default-sidebar');
                sidebar.classList.toggle('-translate-x-full');
            });

        } else {
            navigate('/')
        }

    }, [])
    return (

        <>
            <HelmetProvider>
                <Helmet>
                    <title>Dashboard-VaishyaSamajShadi</title>
                </Helmet>
            </HelmetProvider>
            {LoggedId && ProfileType == 1 ? <>
                <div className="dark:bg-gray-900 dark:text-white">
                    <section data-aos="fade-up" data-aos-once="true" className="container flex justify-center">
                        <h1 className={`my-8 border-t-[4px] border-t-[3px] border-l-8 h-2 border-r-8 pr-2 border-[rgb(255,20,146)] py-2 pl-2 text-3xl font-bold text-black`}>
                            {changeval == 1 ? 'Active Users' : (changeval == 2 ? 'Pending' : (changeval == 5 ? 'Transaction' : (changeval==6 ? 'Visitors':'Deleted Users')))}
                            {/* {changeval==6 ?? 'Visitors'} */}
                        </h1>
                    </section>
                </div>

                <button data-drawer-target="default-sidebar" id="sidebarToggle" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                    <span className="sr-only">Open sidebar</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                    </svg>
                </button>

                <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                    <div className="h-full px-3 py-4 overflow-y-auto bg-pink-50 dark:bg-gray-800">
                        <button id="sidebarClose" type="button" className="absolute top-2 right-2 inline-flex items-center p-2 text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                            <span className="sr-only">Close sidebar</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path clipRule="evenodd" fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
                            </svg>
                        </button>
                        <ul className="space-y-2 font-medium">
                            <li>
                                <button className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">

                                <img src={Base_URL + LoggerUserPhoto} className="w-16 h-16 bg-gray-300 rounded-full mb-4 shrink-0 object-contain" />
                                    <span className="ms-3">Hello {LoggerUserName}</span>
                                </button>
                            </li>
                            <li>
                                <NavLink to={'/'} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <FaHome />
                                    <span className="ms-3">HOME</span>
                                </NavLink>
                            </li>
                            <li className={changeval == 1 ? 'bg-pink-500' : ''} onMouseOver={(e) => setVal(1)} onClick={getAllUsers} data-id='1'>
                                <button data-id='1' className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group">
                                    <svg data-id='1' className="flex-shrink-0 w-5 h-5 text-black-500 transition duration-75 dark:text-gray-400 group-hover:text-pink-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                        <path data-id='1' d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                                    </svg>
                                    <span data-id='1' className="flex-1 ms-3 whitespace-nowrap">Active Users</span>
                                </button>
                            </li>
                            <li className={changeval == 2 ? 'bg-pink-500' : ''} onMouseOver={(e) => setVal(2)} onClick={getAllUsers} data-id='2'>
                                <button data-id='2' className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group">
                                    {/* <svg data-id='2' className="flex-shrink-0 w-5 h-5 text-black-500 transition duration-75 dark:text-gray-400 group-hover:text-pink-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                        <path data-id='2' d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                                    </svg> */}
                                    <FaMendeley />
                                    <span data-id='2' className="flex-1 ms-3 whitespace-nowrap">Pending Users</span>
                                </button>
                            </li>
                            <li className={changeval == 0 ? 'bg-pink-500' : ''} onMouseOver={(e) => setVal(0)} onClick={getAllUsers} data-id='0'>
                                <button data-id='0' className="flex items-center p-2 text-gray-900 rounded-lg group">
                                    <svg data-id='0' className="flex-shrink-0 w-5 h-5 text-black-500 transition duration-75 dark:text-gray-400 group-hover:text-pink-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                        <path data-id='0' d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                                    </svg>
                                    <span data-id='0' className="flex-1 ms-3 whitespace-nowrap">Deleted Users</span>
                                </button>
                            </li>
                            <li className={changeval ==  6? 'bg-pink-500' : ''} onMouseOver={(e) => setVal(6)} data-id='0' onClick={getVisitors}>
                                <button data-id='0' className="flex items-center p-2 text-gray-900 rounded-lg group">
                                  
                                    <FaObjectGroup />
                                    <span data-id='0' className="flex-1 ms-3 whitespace-nowrap">Visitors</span>
                                </button>
                            </li>
                            <li className={changeval == 5 ? 'bg-pink-500' : ''} onMouseOver={(e) => setVal(5)} data-id='0' onClick={getTransactionData}>
                                <button data-id='0' className="flex items-center p-2 text-gray-900 rounded-lg group">
                                  
                                    <FaMoneyCheck />
                                    <span data-id='0' className="flex-1 ms-3 whitespace-nowrap">Transaction</span>
                                </button>
                            </li>
                            <li onClick={Logout} className='px-1'>
                                <button data-id='0' className="flex items-center p-2 text-gray-900 rounded-lg group">
                                    <FaSignOutAlt />
                                    <span data-id='0' className="flex-1 ms-3 whitespace-nowrap">Logout</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </aside>

                <div className="p-4 sm:ml-64">
                    <div className="p-4 rounded-lg dark:border-gray-700">
                        <div className="relative overflow-x-auto">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400" hidden={changeval==5}>
                                <thead className="text-xs text-gray-700 uppercase bg-pink-500 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Id
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Name
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Image
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Status
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Joined
                                        </th>
                                        <th scope="col" className="px-6 py-3"  hidden = {changeval==6}>
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {usersArray.map((item, i) =>
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={i}>
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {item.Id}
                                            </th>
                                            <td className="px-6 py-4 text-pink-800">
                                            <NavLink to={`/profile/${item.Id}`}>{item.Name} </NavLink>
                                            </td>
                                            <td className="px-6 py-4">
                                            <img src={Base_URL + item.Photo} className="w-16 h-16 bg-gray-300 rounded-full mb-4 shrink-0 object-contain" />
                                            </td>
                                            <td className="px-6 py-4">
                                                {item.ApproverStatus == 0 ? 'Pending' : (item.IsActive == 1 ? 'Active' : 'Inactive')}

                                            </td>
                                            <td className="px-6 py-4">
                                                {dateForm(item.JoinedOn)}

                                            </td>
                                            <td className="px-6 py-4" hidden = {changeval==6}>

                                                {item.ApproverStatus == 0 ? <button id={item.Id} type="button" className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" title='Approve' onClick={() => ApproveUser(item.Id)}><FaCheck /></button> : ''}

                                                {item.IsActive == 1 ? <button onClick={(e)=>ChnageStatus(0,item.Id)} data-id='0' id={item.Id} type="button" className="text-white bg-pink-600 hover:bg-pink-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><FaTrash /></button>
                                                    : <button onClick={(e)=>ChnageStatus(1,item.Id)} id={item.Id} data-id='1' type="button" className="text-white bg-pink-600 hover:bg-pink-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><FaUndo /></button>
                                                }

                                            </td>
                                        </tr>

                                    )}

                                </tbody>
                            </table>
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400" hidden={changeval!=5}>
                                <thead className="text-xs text-gray-700 uppercase bg-pink-500 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">Id</th>
                                        <th scope="col" className="px-6 py-3">User</th>
                                        <th scope="col" className="px-6 py-3">PaymentId</th>
                                        <th scope="col" className="px-6 py-3">Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {usersArray.map((item, i) =>
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={i}>
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {item.Id}
                                            </th>
                                            <td className="px-6 py-4">
                                                {item.UserName}
                                            </td>
                                            <td className="px-6 py-4">
                                                {item.TransactionId}
                                            </td>
                                            <td className="px-6 py-4">
                                                {dateForm(item.Date)}
                                            </td>
                                        </tr>

                                    )}
                                </tbody>
                                </table>
                            {usersArray.length == 0 ? <h2 className='mt-4 text-center'>No User Found</h2> : ''}
                        </div>

                    </div>
                </div>
            </> : ''}

        </>
    )
}
export default AdminDashboard;