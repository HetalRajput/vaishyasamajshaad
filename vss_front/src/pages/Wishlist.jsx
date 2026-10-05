import { Helmet, HelmetProvider } from 'react-helmet-async';
import Image from '../assets/places/history.png'



const WishListCard = () => {

    const WishListData = [
        {
            id: 1,
            Name: 'Suneelam',
            Height: '5 ft',
            Color: 'white',
            Occupation: 'Engineer'
        },
        {
            id: 1,
            Name: 'Suneelam',
            Height: '5 ft',
            Color: 'white',
            Occupation: 'Engineer'
        },
        {
            id: 1,
            Name: 'Suneelam',
            Height: '5 ft',
            Color: 'white',
            Occupation: 'Engineer'
        },
        {
            id: 1,
            Name: 'Suneelam',
            Height: '5 ft',
            Color: 'white',
            Occupation: 'Engineer'
        },
        {
            id: 1,
            Name: 'Suneelam',
            Height: '5 ft',
            Color: 'white',
            Occupation: 'Engineer'
        },
        {
            id: 1,
            Name: 'Suneelam',
            Height: '5 ft',
            Color: 'white',
            Occupation: 'Engineer'
        },
        {
            id: 1,
            Name: 'Suneelam',
            Height: '5 ft',
            Color: 'white',
            Occupation: 'Engineer'
        },
    ]
    return (

        <>
            <HelmetProvider>
                <Helmet>
                    <title>Wishlist-VaishyaSamajShadi</title>
                </Helmet>
            </HelmetProvider>
            <div className="container my-20 mx-auto px-2 md:px-4">
                <div className="dark:bg-gray-900 dark:text-white py-10">
                    <section data-aos="fade-up"  data-aos-once="true" className="container flex justify-center">
                        <h1 className=" my-8 border-t-[4px] border-t-[3px] border-l-8 h-2 border-r-8 pr-2 border-orange-500 py-2 pl-2 text-3xl font-bold">
                            Wishlist
                        </h1>
                    </section>
                </div>
                <div className="flex flex-wrap">
                    {WishListData.map((item, index) => (
                        <div className="w-full md:w-1/4 p-4 my-16">
                            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <div className="flex flex-col items-center pb-10">
                                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={Image} alt={index} />
                                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{item.Name}</h5>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">{item.Occupation}</span>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">Height : {item.Height}</span>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">Color : {item.Color}</span>
                                    <div className="flex mt-4 md:mt-6">
                                        <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

            </div>


        </>
    )
}
export default WishListCard