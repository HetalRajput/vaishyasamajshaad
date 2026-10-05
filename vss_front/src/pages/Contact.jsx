import React, { Fragment, useState } from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Location from "../components/Location/Location";
import { toast } from 'react-toastify';
import { Base_URL } from "../../Config";
const Contact = () => {
    const [Name,setName] = useState()
    const [Email,setEmail] = useState()
    const [Msg,setMsg] = useState()
    const mailSend = (event) => {
        event.target.innerHTML = 'Sending....';
        fetch(`${Base_URL}vss/support`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: Email,
            Name,
            Msg,
          }),
        })
          .then((response) => {
            if (response.status === 200) {
              document.getElementById('sendbtn').innerHTML = 'Send'
              toast.success( 'Mail Sent')
              setEmail('')
              setName('')
              setMsg('')
            } else {
              document.getElementById('sendbtn').innerHTML = 'Send'
              toast.error( 'Email sending failed')
              setEmail('')
              setName('')
              setMsg('')
            }
    
          })
      }
    return (
        <Fragment>
            <HelmetProvider>
                <Helmet>
                    <title>Contact-VaishyaSamajShadi</title>
                </Helmet>
            </HelmetProvider>
            <div className="container my-20 mx-auto px-2 md:px-4">
                <section className="mt-24">
                    <div className="flex justify-center">
                        <div className="text-center md:max-w-xl lg:max-w-3xl">
                            <div className="dark:bg-gray-900 dark:text-white py-5">
                                <section data-aos="fade-up"  data-aos-once="true" className="container flex justify-center">
                                    <h1 className={`my-8 border-t-[4px] border-t-[3px] border-l-8 h-2 border-r-8 pr-2 
                                   border-[rgb(255,20,146)] py-2 pl-2 text-3xl font-bold text-[rgb(255,20,146)]`}>
                                        Not, what are you looking for?
                                    </h1>
                                </section>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
            <div className="flex items-center justify-center">
                <hr className={`w-32 border-t-2 border-[rgb(255,20,146)]`} />
            </div>

            <div className="container my-6 mx-auto px-2 md:px-4">

                <section className="mb-10">

                    <div className="flex justify-center">
                        <div className="text-center md:max-w-xl lg:max-w-3xl">
                            <h2 className="mb-12 px-6 text-3xl font-bold">
                                Contact us
                            </h2>
                        </div>
                    </div>

                    <div className="flex flex-wrap">

                        <form className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">

                        <div className="mb-3 w-full">
  <label className={`block font-medium mb-[2px] text-[rgb(255,20,146)]`} htmlFor="name">
    Name
  </label>
  <input 
    onChange={(e)=>setName(e.target.value)} 
    value={Name} 
    type="text" 
    className={`block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ${Name? 'ring-[rgb(255,20,146)]' : 'ring-black'} placeholder:text-grey-400 focus:ring-2 focus:ring-inset focus:ring-[rgb(255,20,146)] sm:text-sm sm:leading-6 outline-none`} 
    id="exampleInput90" 
    placeholder="Name" 
  />
</div>

<div className="mb-3 w-full">
  <label className={`block font-medium mb-[2px] text-[rgb(255,20,146)]`} htmlFor="email">
    Email
  </label>
  <input 
    onChange={(e)=>setEmail(e.target.value)} 
    value={Email} 
    type="email" 
    className={`block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ${Email? 'ring-[rgb(255,20,146)]' : 'ring-black'} placeholder:text-grey-400 focus:ring-2 focus:ring-inset focus:ring-[rgb(255,20,146)] sm:text-sm sm:leading-6 outline-none`} 
    id="exampleInput90" 
    placeholder="Enter your email address" 
  />
</div>

<div className="mb-3 w-full">
  <label className={`block font-medium mb-[2px] text-[rgb(255,20,146)]`} htmlFor="msg">
    Message
  </label>
  <textarea 
    onChange={(e)=>setMsg(e.target.value)} 
    value={Msg} 
    className={`block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ${Msg? 'ring-[rgb(255,20,146)]' : 'ring-black'} placeholder:text-grey-400 focus:ring-2 focus:ring-inset focus:ring-[rgb(255,20,146)] sm:text-sm sm:leading-6 outline-none`} 
    name="" 
    id="" 
  />
</div>

<button 
  type="button" 
  id="sendbtn"
  disabled={!Name ||!Email ||!Msg} 
  onClick={(event)=>mailSend(event)}
  className={`mb-6 inline-block w-full rounded bg-[rgb(255,20,146)] px-6 py-2.5 font-medium uppercase leading-normal text-white hover:shadow-md hover:bg-pink-800 ${!Name ||!Email ||!Msg? 'opacity-50' : ''}`}>
  Send
</button>

                        </form>

                        <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                            <div className="flex flex-wrap">
                                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                                    <div className="flex items-start">
                                        <div className="shrink-0">
                                            <div className="inline-block rounded-md bg-teal-400-100 p-4 text-orange-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    strokeWidth="2" stroke="currentColor" className="h-6 w-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                        d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-6 grow">
                                            <p className="mb-2 font-bold">
                                                Technical support
                                            </p>
                                            <a href="mailto:vaishyasamajshaadi@gmail.com" className={`text-[rgb(255,20,146)]`}>
                                            vaishyasamajshaadi@gmail.com
                                            </a>
                                            <p className="text-neutral-500">
                                                <a href="tel:+919589330865" className={`text-blue-500 hover:text-pink-700`}>
                                                    +91-9589330865
                                                </a>
                                            </p>

                                        </div>
                                    </div>
                                </div>
                                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                                    <div className="flex items-start">
                                        <div className="shrink-0">
                                            <div className="inline-block rounded-md bg-teal-400-100 p-4 text-orange-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    strokeWidth="2" stroke="currentColor" className="h-6 w-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                        d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-6 grow">
                                            <p className="mb-2 font-bold ">
                                                Sales questions
                                            </p>
                                            <a href="mailto:vaishyasamajshaadi@gmail.com" className={`text-[rgb(255,20,146)]`}>
                                            vaishyasamajshaadi@gmail.com
                                            </a>
                                            <p className="text-neutral-500">
                                                <a href="tel:+919589330865" className="text-blue-500 hover:text-pink-700">
                                                    +91-9589330865
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                                    <div className="align-start flex">
                                        <div className="shrink-0">
                                            <div className="inline-block rounded-md bg-teal-400-100 p-4 text-orange-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    strokeWidth="2" stroke="currentColor" className="h-6 w-6">
                                                    <path fillRule="evenodd" d="M10 2a5 5 0 00-5 5c0 2.756 3.4 6.34 4.472 7.527a.5.5 0 00.056.056l.472.473a1 1 0 001.415 0l.473-.473a.5.5 0 00.056-.056C11.6 13.34 15 9.756 15 7a5 5 0 00-5-5zM10 9a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-6 grow">
                                            <p className="mb-2 font-bold ">Address</p>
                                            <p className="text-blue-500">
                                                Bhopal (M.P) <br /> Gwalior (M.P)
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>

            <Location />
        </Fragment>
    )
}
export default Contact