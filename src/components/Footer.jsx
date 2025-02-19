import { Link } from "react-router-dom";
import { links } from "../utils/constants"
import backgroundimage from "/assets/images/project-5.png";

 const Footer = () => {
    return (
        <footer className='text-white desktop relative py-10 bg-no-repeat bg-cover' style={{boxShadow: 'inset 0 0 0 100vw rgba(0,0,0, .8)', backgroundImage:  `url(${backgroundimage})`}}>
            <div className="container px-6 py-8 mx-auto">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    <div>
                        <img src={'/assets/images/logo.png'} alt='logo' width={110} height={110} />
                        <div className="font-medium text-primary uppercase text-xl">
                            MAKE APPOINTMENT WITH US NOW!
                        </div>

                        <h1 className=" mt-5 text-sm font-medium text-gray-500 duration-700 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 hover:underline">
                            +xxx xxx xxx
                        </h1>
                        <h1 className=" mt-3 text-sm font-medium text-gray-500 duration-700 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 hover:underline">
                            lebanon/beirut
                        </h1>
                    </div>

                    <div>
                        <div className="text-2xl font-extrabold text-white uppercase">
                            Pages
                        </div>
                        {links.map(link => <Link key={link.url} to={link.url}><a className="flex flex-col mt-5 text-sm font-medium text-gray-500 duration-700 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 hover:underline">{link.name}</a></Link>)}
                    </div>

                    <div>
                        <div className="text-2xl font-extrabold text-white uppercase">
                            WORK HOURS 
                        </div>

                        <h1 className=" mt-5 text-sm font-medium text-gray-500 duration-700 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 hover:underline">
                            7:30 AM - 5 PM , Monday - Friday
                        </h1>
                        <h1 className=" mt-5 text-sm font-medium text-gray-500 duration-700 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 hover:underline">
                            Weekends - CLOSED
                        </h1>
                        <h1 className=" mt-3 text-sm font-medium text-gray-500 duration-700 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 hover:underline">
                            Our Support team is available to answer your queries
                        </h1>
                        <button className='px-8 mt-6 w-fit py-4 bg-primary text-white font-bold uppercase'>Call Us Today</button>
                    </div>
                </div>

                <hr className="my-10 border-gray-200 dark:border-gray-700"/>

                <div className="sm:flex sm:items-center sm:justify-between">
                    <p className="text-sm text-gray-400">© Copyright {new Date().getFullYear()} . All Rights Reserved.</p>

                    <div className="flex mt-3 -mx-2 sm:mt-0">

                        <h1 className="mx-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Facebook">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z">
                                </path>
                            </svg>
                        </h1>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer