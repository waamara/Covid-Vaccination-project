import React from 'react'
import MyImg from "../assets/img.png"
import Hello from "../assets/img1.png"
import MyImg2 from "../assets/img2.png"
import MyImg3 from "../assets/img3.png"
import MyImg4 from "../assets/clock.png"
import MyImg5 from "../assets/map.png"
import MyImg6 from "../assets/calendar.png"
import MyImg7 from "../assets/shield.png"

const Header = () => {
    return (
        <header className='w-[100vw]'>
            <div
                style={{
                    backgroundImage: `url(${MyImg})`,
                    width: 'w-full',
                }} >
                <div className="  flex flex-row w-full ">
                    <p className="text-white p-8 text-xl font-semibold   h-3   border-b-2 border-custom-blue">Vaccination.ng</p>
                    <ul>
                        <li className="text-white p-9 text-lg">
                            <a className="m-4" href="*">Home</a><a href="*" className="m-4">Services</a><a href="*" className="m-4">Schedule</a><a href="*" className="m-4">Contact Us</a>
                        </li>
                    </ul>
                    <button className="text-custom-blue bg-light-gray rounded-xl w-40 h-10 m-8 bg-opacity-10">Check Status</button>
                </div>
                <div className='flex flex-row'>
                    <div>
                        <div>
                            <p className='text-custom-blue font-bold text-base p-8'>Get Vaccinated. Boost your Immune System</p>
                            <p className='text-white text-3xl font-bold ml-8 w-80'>COVID-19 Vaccination Got Easier With, <span className='text-custom-blue'>Vaccination.ng</span></p>
                            <p className='p-8 text-white text-lg text-grey font-medium'>Vaccination.ng will help you find the nearest <br /> centre for vaccination, in all 36 states in Nigeria.</p>
                        </div>
                        <div className='flex flex-row'>
                            <button className='ml-8 text-white border-none rounded-xl font-semibold bg-custom-blue h-11 w-32 '>Get Vaccine</button>
                            <button className='ml-8 text-white border-1  border-custom-blue bg-opacity-10 rounded-xl font-semibold  h-11 w-32 '>Help Centre</button>
                        </div>

                    </div>
                    <div className='flex flex-row'>
                        <img src={MyImg3} alt="image" className='h-12 ' />
                        <img src={Hello} alt="image" className='h-571 m-10' />
                        <img src={MyImg2} alt="image" className='h-12 ' />
                    </div>
                </div>
                <div className='flex flex-row'>
                    <img src={MyImg4} alt="clock" className='ml-8 border-none rounded bg-light-gray p-1 bg-opacity-10 ' />
                    <p className='text-white font-bold ml-5 mt-2' >Schedule your Vaccination</p>
                </div>
                <div className='flex flex-row m-14  mb-23'>
                    <div className='flex flex-row ml-4'>
                        <div>
                            <img src={MyImg5} alt="locaiton.png" className='rounded bg-light-gray p-1 bg-opacity-10'/>
                        </div>
                        <div className=" ml-3">
                            <p className='text-gray-500 font-semibold '>Location</p>
                            <p className='text-white font-semibold'>Ikeja Lagos, Nigeria</p>
                        </div>
                    </div>
                    <div className='flex flex-row ml-12'>
                        <div>
                            <img src={MyImg6} alt="calendar.png" className=' rounded bg-light-gray p-1 bg-opacity-10' />
                        </div>
                        <div  className=" ml-3">
                            <p className='text-gray-500 font-semibold'>Date</p>
                            <p className='text-white font-semibold'>29 February, 2022</p>
                        </div>
                    </div>
                    <div className='flex flex-row ml-12'>
                        <div>
                            <img src={MyImg7} alt="sheild.png" className='bg-light-gray p-1 bg-opacity-10 rounded'/>
                        </div>
                        <div  className=" ml-3">
                            <p className='text-gray-500 font-semibold'>Vaccine Type</p>
                            <p className='text-white font-semibold'>Mordena</p>
                        </div>
                    </div>
                    <button className='ml-28 text-white border-none rounded-xl font-semibold bg-custom-blue h-11 w-24  '>Submit</button>
                </div>
            </div>
        </header>

    );
}

export default Header