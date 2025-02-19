import { useState } from "react";
import { ourServices, questionAndAnswer } from '../../utils/data';
import { itemImages } from "../../utils/constants";

const FaqComponent = ({ card }) => {
    const { answer, question } = card;
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='shadow'>
            <div onClick={() => setIsOpen(prev => !prev)} className={`p-6 flex items-center justify-between ${isOpen && 'bg-primary text-white'}`}>
                <h1 className={`${isOpen ? 'text-white' : 'text-gray-500'}`}>{question}</h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={`bi h-5 w-5 ${!isOpen ? 'text-primary' : 'rotate-180 text-white'} bi-chevron-down`} viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                </svg>
            </div>
            {isOpen && (
                <div className='p-10'>
                    <p className='text-center text-gray-500'>{answer}</p>
                </div>
            )}
        </div>
    );
};

const Boxes = () => {
    const ourProcesses = ['MAKE AN APPOINTMENT', 'SELECT SERVICES', 'EXECUTION PROJECT'];
    const ourProcessesImages = ['SystemServiceIcon.png', 'EngineDiagnosticsIcon.png', 'TechnicalRepairsIcon.png'];
 
    return (
        <div>
            <section className='mx-auto container py-10'>
                <h1 className='text-primary font-bold text-lg uppercase text-center'>OUR SERVICES</h1>
                <p className='text-3xl font-bold text-center uppercase text-gray-900 py-3'>GREAT CAR SERVICES</p>
                <div className='grid gap-2 lg:gap-10 md:grid-cols-2 lg:grid-cols-3 lg:mt-10 grid-cols-1 mt-0 px-4'>
                    {ourServices.map((card, index) => {
                        return (
                            <div key={index} className={`${index % 2 !== 0 ? 'bg-primary text-white' : 'text-gray-900'} p-8 shadow-md text-center flex flex-col items-center justify-center`}>
                                <img src={`${card.image}`} className={`${index % 2 === 0 && 'icon-red'}`} color="white" alt='Icon' height={50} width={50}/>
                                <h1 className={`uppercase py-2 font-bold`}>{card.title}</h1>
                                <p>{card.message}</p>
                            </div>
                        );
                    })}
                </div>
            </section>
            <section className='mx-auto container py-10'>
                <h1 className='text-primary font-bold text-lg uppercase text-center'>OUR PROCESS</h1>
                <p className='text-3xl font-bold text-center uppercase text-gray-900 py-3'>HOW WE WORK</p>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 lg:mt-10'>
                    {ourProcesses.map((item, index) => {
                        return (
                            <div key={index} className='flex flex-col items-center mt-10'>
                                <div className='border border-primary w-[10em] flex items-center relative justify-center h-[10em]'>
                                    <div className='rounded-full h-14 w-14 flex items-center absolute -top-6 justify-center font-extrabold text-3xl bg-primary text-white'>{index + 1}</div>
                                    <img alt='Icon' className='icon-red' src={`/assets/images/${ourProcessesImages[index]}`} height={50} width={50}/>
                                </div>
                                <p className='font-bold mt-4'>{item}</p>
                            </div>
                        );
                    })}
                </div>
            </section>
            <section className='mx-auto container grid py-20 lg:grid-cols-2 px-10 lg:px-4 gap-10'>
                <div className=''>
                    <h1 className='text-primary font-bold text-lg uppercase'>FAQ</h1>
                    <p className='text-3xl font-bold uppercase text-gray-900 py-3'>GENERAL QUESTION</p>
                    <div className='grid gap-6'>
                        {questionAndAnswer.map((card, index) => <FaqComponent key={index} card={card}/>)}
                    </div>
                </div>
                <div className='w-full relative pb-48 md:pb-[26rem] lg:pb-0 '>
                    <img src={itemImages[3]} alt="" className='absolute' />
                </div>
            </section>
        </div>
    );
};

export default Boxes;
