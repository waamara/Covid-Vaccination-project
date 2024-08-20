import React from 'react'
import BG from "../assets/img.png"
import ohman from "../assets/ohman.png"
import virus from "../assets/coronavirus.png"

const Div4 = () => {
    return (
        <div style={{
            backgroundImage: `url(${BG})`,
            width: 'w-full',
        }}
            className='  h-[761px]'>
            <div className='flex flex-col justify-center items-center'>
                <p className='text-white font-semibold  text-lg mt-16'>Covid-19 Prevention</p>
                <p className='text-custom-blue mt-10 font-bold text-4xl'>COVID-19 <span className='text-white'> Symptoms</span></p>
                <p className='text-gray-400 text-center mt-10'>Adipiscing nec etiam tortor elit quisque. Arcu aliquet convallis aenean eu velit. <br /> Mi vestibulum, ullamcorper venenatis imperdiet augue arcu donec neque.</p>
            </div>
            <div className='flex flex-row' >
                <div className='flex flex-col mt-12'>
                    <div className=' relative flex flex-row ml-40 mt-16 '>
                        <img src={virus} alt="overlay" className='h-[90px] absolute ' />
                        <p className=' mt-5 ml-12 border-none pl-16 rounded flex items-center h-12 w-[200px] text-custom-blue bg-light-gray  bg-opacity-20 '>High Fever</p>
                    </div>
                    <div className=' relative flex flex-row ml-24 mt-16 '>
                        <img src={virus} alt="overlay" className='h-[90px] absolute ' />
                        <p className=' mt-5 ml-12 border-none pl-12 rounded flex items-center h-12 w-[200px] text-custom-blue bg-light-gray  bg-opacity-20 '>Loss sense of smell</p>
                    </div>
                    <div className=' relative flex flex-row ml-6 mt-16 '>
                        <img src={virus} alt="overlay" className='h-[90px] absolute ' />
                        <p className=' mt-5 ml-12 border-none pl-12 rounded flex items-center h-12 w-[200px] text-custom-blue bg-light-gray  bg-opacity-20 '>Dry cough</p>
                    </div>
                </div>
                <div >
                    <img src={ohman} alt="ohman" className=' h-[400px] pd-6  mt-24 ' />
                </div>
                <div className='flex flex-col mt-12 '>
                    <div className=' relative flex flex-row  mt-16 '>
                        <img src={virus} alt="overlay" className='h-[90px] absolute ' />
                        <p className=' mt-5 ml-12 border-none pl-10 rounded flex items-center h-12 w-[200px] text-custom-blue bg-light-gray  bg-opacity-20 '>Loss of sense of taste</p>
                    </div>
                    <div className=' relative flex flex-row ml-16 mt-16 '>
                        <img src={virus} alt="overlay" className='h-[90px] absolute ' />
                        <p className=' mt-5 ml-12 border-none pl-12 rounded flex items-center h-12 w-[200px] text-custom-blue bg-light-gray  bg-opacity-20 '>Difficulty Breathing</p>
                    </div><div className=' relative flex flex-row ml-32 mt-16 '>
                        <img src={virus} alt="overlay" className='h-[90px] absolute ' />
                        <p className=' mt-5 ml-12 border-none pl-16 rounded flex items-center h-12 w-[200px] text-custom-blue bg-light-gray  bg-opacity-20 '>Sore Throat</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Div4