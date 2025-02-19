import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { links } from "../utils/constants";
import TopBar from "./TopBar";

 const Header = ({backgroundImage, imageHeight, imageText, headerMinimal}) => {
    const location = useLocation()
    console.log(location)
    return (
    <header className={`${headerMinimal ? 'bg-black' : ''} `}>
        {backgroundImage && (
            <div className={imageHeight + ' flex flex-col relative bg-center bg-no-repeat bg-cover bg'} style={{boxShadow: 'inset 0 0 0 100vw rgba(0,0,0, .8)', backgroundImage: `url(${backgroundImage})`}}>
              <TopBar />
                {imageText ? imageText : (
                    <div className='flex-1 px-20 container mx-auto flex text-white space-y-4 flex-col items-center justify-center'>
                        <h1 className='text-3xl font-bold uppercase'>{location.pathname.replace('/', '')}</h1>
                        <h1 className='capitalize'>Home <span className='text-primary'>&gt;</span> {location.pathname.replace('/', '')}</h1>
                    </div>
                )}
            </div>
        )}
    </header>
)}
 export default Header