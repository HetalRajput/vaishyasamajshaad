import { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import axios from "axios";
import { Base_URL, DefaultKey } from "../../Config";
import formImage from '../assets/Multiformicon/formicon.jpg'
import '../multiform.css'
import { FaCloudUploadAlt } from "react-icons/fa";
import { getLocalArraySrorage, getLocalMainStorage, getLocalStorageItem } from "../Storage";
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import Loader from "./Loader";
import TransactionPopUp from "../components/ImagePopup/TransactionPopUp";

const UpdateUSer = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [QrPopup, setQrPopup] = useState(false);
    const [whichButton, setwhichbutton] = useState(false)
    const [Part1, setPart] = useState(true);
    const [Image, setImage] = useState({ preview: '', data: '' })
    const [Imgname, setImgName] = useState('')
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [userPhoto, setUserPhoto] = useState('');
    const [userGovermentDocId, setUserGovermentDocId] = useState('');
    const [userDob, setUserDob] = useState('1990-01-01');
    const [userGender, setUserGender] = useState(2);
    const [userLocation, setUserLocation] = useState('');
    const [userBirthTime, setUserBirthTime] = useState('');
    const [userGotra, setUserGotra] = useState('');
    const [userBirthPlace, setUserBirthPlace] = useState('');
    const [userHeight, setUserHeight] = useState('');
    const [userBodyType, setUserBodyType] = useState('');
    const [userComplexion, setUserComplexion] = useState('');
    const [highestEducation, setHighestEducation] = useState('');
    const [userDegreeType, setUserDegreeType] = useState('');
    const [userOccupation, setUserOccupation] = useState('');
    const [userDesignation, setUserDesignation] = useState('');
    const [userAnnualIncome, setUserAnnualIncome] = useState('');
    const [userWorkPlaceAddress, setUserWorkPlaceAddress] = useState('');
    const [userFatherName, setUserFatherName] = useState('');
    const [userFatherPhone, setUserFatherPhone] = useState('');
    const [userFatherOccupation, setUserFatherOccupation] = useState('');
    const [userMotherName, setUserMotherName] = useState('');
    const [userMotherOccupation, setUserMotherOccupation] = useState('');
    const [userFamilyAddress, setUserFamilyAddress] = useState('');
    const [Brother, setBrother] = useState(0)
    const [BrotherMarried, setBrotherMarried] = useState(0)
    const [Sister, setSister] = useState(0)
    const [SisterMarried, setSisterMarried] = useState(0)
    const [MaternalUncle, setMaternalUncle] = useState('')
    const [MaternalGrandFather, setMaternalGrandFather] = useState('')
    const [AdditionalDetails, setAdditionalDetails] = useState('')
    const [FirstEdit, setFirstEdit] = useState(0)
    const [AppSts, setAppSts] = useState(0)
    const [BodyArray,setBodyArray] = useState([
        { id: 1, type: 'Slim' },
        { id: 2, type: 'Average' },
        {id:3,type:'Athletic'},
        {id:4,type:'Heavy'},
        {id:5, type:'Mild'},
        {id:6,type:'Fat'}
    ])
    // -------- SocialLink ------------
    const [Facebook, setFacebook] = useState('')
    const [Instagram, SetInsta] = useState('')
    const [Whatsapp, setWhatsapp] = useState('')

    const userlogId = getLocalStorageItem('Id');
    const params = useParams()
    const userId = atob(params.id)
    const token = getLocalStorageItem('token');
    const url = window.location.pathname.split('/').pop();
    const CONFIG_OBJ = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer ' + localStorage.getItem("token")
        }
    }
    const getUserById = async () => {
        const response = await axios.post(`${Base_URL}getUserdetailsById`, { userId }, CONFIG_OBJ);
        if (response.status === 200 && response.data.status) {
            const ArrayValues = response.data.data[0]
            fillStateVariables(ArrayValues);
        } else {
            throw new Error('Failed to send data. Please try again.');
        }
    }
    const UpdateUser = async (ImageName='') => {
        const Tid = document.querySelector('#tid')?.value;
        const valid = validateInput()
        if(valid==false){
            return false;
        }
        setIsLoading(true)
        if(!whichButton || ImageName==''){
            ImageName = userPhoto
        }
        try {
            const response = await axios.post(`${Base_URL}updateProfile`, {
                userId,
                userName,
                userEmail,
                userPhone,
                ImageName,
                userGovermentDocId,
                userDob,
                userGender,
                userLocation,
                userBirthTime,
                userGotra,
                userBirthPlace,
                userHeight,
                userBodyType,
                userComplexion,
                highestEducation,
                userDegreeType,
                userOccupation,
                userDesignation,
                userAnnualIncome,
                userWorkPlaceAddress,
                userFatherName,
                userFatherPhone,
                userFatherOccupation,
                userMotherName,
                userMotherOccupation,
                userFamilyAddress,
                Brother,
                Sister,
                BrotherMarried,
                SisterMarried,
                MaternalUncle,
                MaternalGrandFather,
                AdditionalDetails,
                Facebook,
                Instagram,
                Whatsapp,
                TransactId:Tid
            }, CONFIG_OBJ);
           
            if (response.status === 200) {
                toast.success(response.data.message);
                setIsLoading(false)
                if(FirstEdit==1){
                    SendMailAfterUpdate()
                    SendMailToUser()
                }else{
                    setIsLoading(false)
                }
                
            } else {
                setIsLoading(false)
                toast.error(response.data.message +'3');
            }
        } catch (error) {
            setIsLoading(false)
            toast.error(`Invalid Parameters`);
            console.error('Error sending data:', error);
        }
    };
    const fillStateVariables = (data) => {
        setUserName(data.Name || '');
        setUserEmail(data.Email || '');
        setUserPhone(data.Phone || '');
        setUserPhoto(data.Photo || '');
        setUserGovermentDocId(data.GovermentDocId || '');
        setUserDob((data.DOB).split('T')[0] || '1990-01-01');
        setUserGender(data.Gender || 2);
        setUserLocation(data.Location || '');
        setUserBirthTime(data.BirthTime || '');
        setUserGotra(data.Gotra || '');
        setUserBirthPlace(data.BirthPlace || '');
        setUserHeight(data.Height || '');
        setUserBodyType(data.BodyType || '');
        setUserComplexion(data.Complexion || '');
        setHighestEducation(data.HighestEduction || '');
        setUserDegreeType(data.DegreeType || '');
        setUserOccupation(data.Occupation || '');
        setUserDesignation(data.Designation || 'SE');
        setUserAnnualIncome(data.Annual_Income || '');
        setUserWorkPlaceAddress(data.WorkPlaceAddress || '');
        setAdditionalDetails(data.Additional_Details || '');
        setFacebook(data.Facebook || '');
        SetInsta(data.Instagram || '');
        setWhatsapp(data.Whatsapp || '');
        setFirstEdit(data.FirstEdit || '');
        setAppSts(data.ApproverStatus || 0);
        // --------family---------details------------
        if(data.familyDetails.length>0){
            setUserFatherName(data.familyDetails[0].FatherName || '');
            setUserFatherPhone(data.familyDetails[0].FatherPhone || '');
            setUserFatherOccupation(data.familyDetails[0].FatherOccupation || '');
            setUserMotherName(data.familyDetails[0].MotherName || '');
            setUserMotherOccupation(data.familyDetails[0].MotherOccupation || '');
            setUserFamilyAddress(data.familyDetails[0].FamilyAddress || '');
            setBrother(data.familyDetails[0].Brothers || 0);
            setSister(data.familyDetails[0].Sisters || 0);
            setBrotherMarried(data.familyDetails[0].Married_Brother || 0);
            setSisterMarried(data.familyDetails[0].Married_Sister || 0);
            setMaternalUncle(data.familyDetails[0].MaternalUncle || '');
            setMaternalGrandFather(data.familyDetails[0].MaternalGrandFather || '');
        }
        
    }

    // image set------------
    const handleFileSelect = (event) => {
        if (event.target.files[0]) {
            setwhichbutton(true)
            const img = {
                preview: URL.createObjectURL(event.target.files[0]),
                data: event.target.files[0]
            }
            setImage(img);
        }

    }
    const handleImgUpload = async () => {
        const valid = validateInput()
        if(valid==false){
            return false;
        }
        setIsLoading(true)
        const filename =  `${Date.now()}-${userId}`
        let formData = new FormData();
        formData.append('file', Image.data);
        formData.append('filename', filename);
        let ImageName='';
        const response = await axios.post(`${Base_URL}api/uploadFile`, formData)
        console.log(response.data.status);
        if (response.status === 200) {
        if(response.data.status){
            setIsLoading(false)
            setImgName(response.data.file['filename'])
            ImageName = response.data.file['filename'];
            toast.success(response.data.message);
            UpdateUser(ImageName)
            
        }else{
            toast.error(response.data.message);
            UpdateUser(ImageName)
        }
    }else{
        UpdateUser(ImageName)
    }
        console.log(ImageName);
        
        return response;
    }

    const SendMailAfterUpdate = () =>{
        fetch(`${Base_URL}vss/OnUpdateMails`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              from: userEmail,
              to:'suneelamtripathi123456@gmail.com',
              Msg:`Hello VSS, ${userName} has added his profile by email ${userEmail} on Vaishya Samja Shadi, kindly confirm the payment and approve the user.`,
            }),
          })
            .then((response) => {
              if (response.status === 200) {
                toast.success( 'Mail Sent')
               
              } else {
                toast.error( 'Email sending failed')
               
              }
      
            })
    }

    const SendMailToUser = () =>{
        fetch(`${Base_URL}vss/SendMailToUser`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              from: 'noreply@vaishyasamajshadi.com',
              to:userEmail,
              Msg:`Hello ${userName} , your profile has been sent to the Admin, once approved your data will be visible to Vaishya Samaj Shaadi. Thanks and regards.`,
            }),
          })
            .then((response) => {
              if (response.status === 200) {
                toast.success( 'Mail Sent')
               
              } else {
                toast.error( 'Email sending failed')
               
              }
      
            })
    }

    const handleModalButtonClick = () => {
        setQrPopup(false)
        const valid = validateInput()
        if(valid==true){
            if(whichButton){
                handleImgUpload()
              }else{
                UpdateUser()
              }
        }
      };

    const TransactPop = () =>{
        setQrPopup(true)
    }
    const renderButtonText = () => {
        if (isLoading) return <Loader />;
        return FirstEdit === 1 ? 'Add Profile' : 'Update';
      };
      const renderButton = () => {
        const commonProps = {
          type: "button",
          className: "text-white bg-pink-500 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-orange-500 dark:focus:ring-blue-800",
          children: renderButtonText(),
        };
        if (AppSts === 0) {
          return <button {...commonProps} onClick={TransactPop} />;
        } else if (whichButton) {
          return <button {...commonProps} onClick={handleImgUpload} />;
        } else {
          return <button {...commonProps} onClick={UpdateUser} />;
        }
      };
      const validateInput = () => {
        let isValid = true;
      
        if (!userName.trim()) {
          toast.error('Please enter your name');
          isValid = false;
        }
      
        if (!userEmail.trim() || !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(userEmail)) {
          toast.error('Please enter a valid email address');
          isValid = false;
        }
      
        if (!userPhone.trim() || !/^\d{10}$/.test(userPhone)) {
          toast.error('Please enter a valid phone number');
          isValid = false;
        }
      
        if (!userGovermentDocId.trim()) {
          toast.error('Please enter your government ID');
          isValid = false;
        }
      
        if (!userDob.trim()) {
          toast.error('Please enter your date of birth');
          isValid = false;
        }
      
        if (!userLocation.trim()) {
          toast.error('Please enter your location');
          isValid = false;
        }
      
        if (!userBirthTime.trim()) {
          toast.error('Please enter your birth time');
          isValid = false;
        }
      
        if (!userGotra.trim()) {
          toast.error('Please enter your gotra');
          isValid = false;
        }
      
        if (!userBirthPlace.trim()) {
          toast.error('Please enter your birth place');
          isValid = false;
        }
      
        if (!userHeight) {
          toast.error('Please enter your height');
          isValid = false;
        }
      
        if (!userBodyType.trim()) {
          toast.error('Please enter your body type');
          isValid = false;
        }
      
      
        if (!userFatherName.trim()) {
          toast.error('Please enter your father\'s name');
          isValid = false;
        }
      
        if (!userFatherPhone.trim() || !/^\d{10}$/.test(userFatherPhone)) {
          toast.error('Please enter a valid phone number for your father');
          isValid = false;
        }
      
        if (!userFatherOccupation.trim()) {
          toast.error('Please enter your father\'s occupation');
          isValid = false;
        }
      
        if (!userMotherName.trim()) {
          toast.error('Please enter your mother\'s name');
          isValid = false;
        }
      
        if (!userMotherOccupation.trim()) {
          toast.error('Please enter your mother\'s occupation');
          isValid = false;
        }
      
        if (!userFamilyAddress.trim()) {
          toast.error('Please enter your family address');
          isValid = false;
        }
      
        if ( isNaN(Brother)) {
          toast.error('Please enter a valid number of brothers');
          isValid = false;
        }
      
        if (isNaN(BrotherMarried)) {
          toast.error('Please enter a valid number of married brothers');
          isValid = false;
        }
      
        if ( isNaN(Sister)) {
          toast.error('Please enter a valid number of sisters');
          isValid = false;
        }
      
        if (isNaN(SisterMarried)) {
          toast.error('Please enter a valid number of married sisters');
          isValid = false;
        }
      
      
        return isValid;
      }

    useEffect(() => {
        getUserById()
    }, [url])

    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Update User-VaishyaSamajShadi</title>
                </Helmet>
            </HelmetProvider>
            <div className="flex flex-wrap">
                {/* First Column (6/12 width on medium screens and larger) */}
                <div className="w-full md:w-1/2 p-4 my-16">
                    {/* Content for the first column */}
                    <div className="p-4">
                        <img src={formImage} alt="Form" />
                    </div>
                </div>

                {/* Second Column (6/12 width on medium screens and larger) */}
                <div className="w-full md:w-1/2 p-1">
                    {/* Content for the second column */}
                    <div className="p-1">
                        <section className="my-32" hidden={!Part1}>
                            <form className="max-w-md mx-auto">
                                <div className="relative z-0 w-full mb-5 group">
                                    <input type="file" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" accept=".jpg,.png,.webp,.jpeg" onChange={handleFileSelect}  required />
                                    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name{FirstEdit}</label>
                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                {Image.preview && <><img src={Image.preview} width='150' height='150' alt="preview" />
                                </>
                                }
                                
                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                {userPhoto && <><img src={Base_URL+userPhoto} width='150' height='150' alt="user picture" />
                                </>
                                }
                                
                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                    <input type="text" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required onChange={e => setUserName(e.target.value)} value={userName} />
                                    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                    <input type="email" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" onChange={e => setUserEmail(e.target.value)} value={userEmail} required />
                                    <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                    <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" onChange={e => setUserPhone(e.target.value)} value={userPhone} required />
                                    <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Contact</label>
                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                    <input type="text" name="repeat_password" id="userlocations" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" onChange={e => setUserLocation(e.target.value)} value={userLocation} required />
                                    <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Location</label>
                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                    <input type="text" name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" onChange={e => setUserGovermentDocId(e.target.value)} value={userGovermentDocId} required />
                                    <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Adhaar</label>
                                </div>
                                <div className="grid md:grid-cols-2 md:gap-6">
                                    <div className="relative z-0 w-full mb-5 group">
                                        <input type="date" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" onChange={e => setUserDob(e.target.value)} value={userDob} required />
                                        <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Date Of Birth</label>
                                    </div>
                                    <div className="relative z-0 w-full mb-5 group">
                                        <input type="time" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" onChange={e => setUserBirthTime(e.target.value)} value={userBirthTime} required />
                                        <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Birth Time</label>
                                    </div>
                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                    <input type="text" name="floating_password" id="location" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" onChange={e => setUserBirthPlace(e.target.value)} value={userBirthPlace} required />
                                    <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Birth Location</label>
                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                    <input type="text" name="floating_password" id="location" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" onChange={e => setUserHeight(e.target.value)} value={userHeight} required />
                                    <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Height (in ft.)</label>
                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                    <input type="text" name="floating_password" id="gotra" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" onChange={e => setUserGotra(e.target.value)} value={userGotra} required />
                                    <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Gotra</label>
                                </div>
                                <div className="grid md:grid-cols-2 md:gap-6">
                                    <div className="relative z-0 w-full mb-5 group">
                                        <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                                        <select id="gender" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={e => setUserGender(e.target.value)} value={userGender}>

                                            <option value={1}>Male</option>
                                            <option value={2}>Female</option>
                                        </select>
                                    </div>

                                    <div className="relative z-0 w-full mb-5 group">
                                        <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Body Type</label>
                                        <select id="bodytype" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={e => setUserBodyType(e.target.value)} value={userBodyType}>
                                        {BodyArray.map((item, i) => (
                                            <option key={i} value={item.id}>{item.type}</option>
                                        ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-3 md:gap-6">
                                    <div className="relative z-0 w-full mb-5 group">
                                        <input type="text" name="facebook" id="facebook" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" onChange={e => setFacebook(e.target.value)} value={Facebook} required />
                                        <label htmlFor="facebook" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Facebook</label>
                                    </div>
                                    <div className="relative z-0 w-full mb-5 group">
                                        <input type="text" name="insta" id="insta" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" onChange={e => SetInsta(e.target.value)} value={Instagram} required />
                                        <label htmlFor="insta" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Instagram</label>
                                    </div>
                                    <div className="relative z-0 w-full mb-5 group">
                                        <input type="text" name="whatsapp" id="whatsapp" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" onChange={e => setWhatsapp(e.target.value)} value={Whatsapp} required />
                                        <label htmlFor="whatsapp" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">WhatsApp</label>
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 md:gap-6">
                                    <button type="button" className="text-white bg-pink-500 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-orange-500 dark:focus:ring-blue-800" onClick={e => setPart(false)}>Next</button>
                                </div>
                            </form>
                        </section>
                        <section className="my-32" hidden={Part1}>
                            <form className="max-w-md mx-auto">
                                <div className="relative z-0 w-full mb-5 group">
                                    <input type="text" name="complexion" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required onChange={e => setUserComplexion(e.target.value)} value={userComplexion} />
                                    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Color</label>
                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                    <input type="text" name="floating_password" id="education" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" onChange={e => setHighestEducation(e.target.value)} value={highestEducation} required />
                                    <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Education</label>
                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                    <input type="text" name="repeat_password" id="degree" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" onChange={e => setUserDegreeType(e.target.value)} value={userDegreeType} required />
                                    <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Degree</label>
                                </div>
                                <div className="grid md:grid-cols-2 md:gap-6">
                                    <div className="relative z-0 w-full mb-5 group">
                                        <input type="text" name="floating_last_name" id="occup" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" onChange={e => setUserOccupation(e.target.value)} value={userOccupation} required />
                                        <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Occupation</label>
                                    </div>
                                    <div className="relative z-0 w-full mb-5 group">
                                        <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 designation-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" onChange={e => setUserDesignation(e.target.value)} value={userDesignation} required />
                                        <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">User Desgination</label>
                                    </div>

                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                    <input type="text" name="floating_password" id="worklocation" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" onChange={e => setUserWorkPlaceAddress(e.target.value)} value={userWorkPlaceAddress} required />
                                    <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Work Location</label>
                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                    <input type="text" name="floating_password" id="income" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" onChange={e => setUserAnnualIncome(e.target.value)} value={userAnnualIncome} required />
                                    <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Annual Income</label>
                                </div>

                                <div className="grid md:grid-cols-2 md:gap-6">
                                    <div className="relative z-0 w-full mb-5 group">
                                        <input type="text" name="floating_last_name" id="occup" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" onChange={e => setUserFatherName(e.target.value)} value={userFatherName} required />
                                        <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Fathers name</label>
                                    </div>

                                    <div className="relative z-0 w-full mb-5 group">
                                        <input type="text" name="floating_last_name" id="occup" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" onChange={e => setUserFatherOccupation(e.target.value)} value={userFatherOccupation} required />
                                        <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Father's Occupation</label>
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 md:gap-6">
                                    <div className="relative z-0 w-full mb-5 group">
                                        <input type="text" name="floating_last_name" id="occup" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" onChange={e => setUserMotherName(e.target.value)} value={userMotherName} required />
                                        <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mother's Name</label>
                                    </div>

                                    <div className="relative z-0 w-full mb-5 group">
                                        <input type="text" name="floating_last_name" id="occup" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" onChange={e => setUserMotherOccupation(e.target.value)} value={userMotherOccupation} required />
                                        <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mother's Occupation</label>
                                    </div>
                                </div>

                                <div className="relative z-0 w-full mb-5 group">
                                    <input type="text" name="floating_last_name" id="occup" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" onChange={e => setUserFatherPhone(e.target.value)} value={userFatherPhone} required />
                                    <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Father's Contact</label>
                                </div>
                                <div className="grid md:grid-cols-2 md:gap-6">
                                    <div className="relative z-0 w-full mb-5 group">
                                        <input type="number" name="floating_last_name" id="Brother" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" onChange={e => setBrother(e.target.value)} value={Brother} required />
                                        <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Brother(s)</label>
                                    </div>

                                    <div className="relative z-0 w-full mb-5 group">
                                        <input type="number" name="floating_last_name" id="BrotherMarried" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" onChange={e => setBrotherMarried(e.target.value)} value={BrotherMarried} required />
                                        <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Brother(s) Married</label>
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 md:gap-6">
                                    <div className="relative z-0 w-full mb-5 group">
                                        <input type="number" name="floating_last_name" id="sister" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" onChange={e => setSister(e.target.value)} value={Sister} required />
                                        <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Sister(s)</label>
                                    </div>

                                    <div className="relative z-0 w-full mb-5 group">
                                        <input type="number" name="floating_last_name" id="SisterMarried" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" onChange={e => setSisterMarried(e.target.value)} value={SisterMarried} required />
                                        <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Sister(s) Married</label>
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 md:gap-6">
                                    <div className="relative z-0 w-full mb-5 group">
                                        <input type="text" name="floating_last_name" id="maternalunclue" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" onChange={e => setMaternalUncle(e.target.value)} value={MaternalUncle} required />
                                        <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">MAMA Name</label>
                                    </div>

                                    <div className="relative z-0 w-full mb-5 group">
                                        <input type="text" name="floating_last_name" id="maternalgrandfather" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" onChange={e => setMaternalGrandFather(e.target.value)} value={MaternalGrandFather} required />
                                        <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">NANA Name</label>
                                    </div>
                                </div>

                                <div className="relative z-0 w-full mb-5 group">
                                    <input type="text" name="floating_last_name" id="occup" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" onChange={e => setUserFamilyAddress(e.target.value)} value={userFamilyAddress} required />
                                    <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Family Address</label>
                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                    <textarea rows="4" type="text" name="extradetails" id="occup" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" onChange={e => setAdditionalDetails(e.target.value)} value={AdditionalDetails} required></textarea>
                                    <label htmlFor="extradetails" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Additional Details</label>
                                </div>
                                <div className="grid md:grid-cols-2 md:gap-6">
                                    <button type="button" className="text-white bg-pink-500 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-orange-500 dark:focus:ring-blue-800" onClick={e => setPart(true)}>Back</button>
                                    {renderButton()}
                                    {/* {whichButton ?  <button type="button" className="text-white bg-pink-500 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-orange-500 dark:focus:ring-blue-800" onClick={handleImgUpload} >{isLoading?<Loader />:FirstEdit ==1 ?'Add Profile':'Update'}</button>: <button type="button" className="text-white bg-pink-500 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-orange-500 dark:focus:ring-blue-800" onClick={UpdateUser} >{isLoading?<Loader />:FirstEdit ==1 ?'Add Profile':'Update'}</button>} */}
                                   
                                </div>

                            </form>
                        </section>
                    </div>
                </div>
            </div>
{/* ------------Modal For Update---------------- */}
            <TransactionPopUp QrPopup={QrPopup} setQrPopup={setQrPopup} onButtonClick={handleModalButtonClick} />

            {/* ------------Modal For Update---------------- */}
        </>
    )
}
export default UpdateUSer;