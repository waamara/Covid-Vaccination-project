import React from 'react'
import MyImg from "../assets/img.png"

const Div1 = () => {
    return (
        <div
            className='h-[466px]'
            style={{
                backgroundImage: `url(${MyImg})`,
                width: 'w-full',
            }}>
            <div className=''>
                <p className='text-white pl-24 pt-24  font-medium text-xl  '>Check your COVID-19 result on our Database </p>
                <div className='flex flex-row ml-24 m-12' >
                    <input type="text" className='w-72 h-11 border rounded-xl bg-transparent p-4 text-white ' />
                    <input type="text" placeholder='NIK number' className='ml-6 w-72 h-11 p-4 border text-white  rounded-xl bg-transparent  ' />
                    <button className=' h-11 w-28 bg-light-gray text-base bg-opacity-10 border-2 rounded-xl ml-6 text-custom-blue font-semibold border-custom-blue'>Check</button>
                </div>
                <p className='text-custom-blue text-lg  font-semibold ml-64'>Need a certificate for your COVID-19 result? Please click <a href="none" className='border-b-1 border-custom-blue'>here</a> </p>
            </div>
        </div>
    )
}

export default Div1