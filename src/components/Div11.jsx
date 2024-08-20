import React from 'react'
import MyImg from "../assets/img.png"

const Div11 = () => {
    return (
        <div
            className='h-[466px]'
            style={{
                backgroundImage: `url(${MyImg})`,
                width: 'w-full',
            }}>
            <div className='p-24'>
                <div className='h-[70px] w-[900px] border-none bg-light-gray bg-opacity-20 rounded-tl-xl rounded-tr-xl'>
                    <p className='text-white font-medium text-xl pl-20 pt-5 '>Check your COVID-19 result on our Database </p>
                </div>
                <div className='h-[170px] w-[900px] pt-8 pl-20 border-none bg-light-gray bg-opacity-10 rounded-br-xl rounded-bl-xl '>
                    <div className='flex flex-row ' >
                        <input type="text" className='w-72 h-11 border rounded-xl bg-transparent p-4 text-white ' />
                        <input type="text" placeholder='NIK number' className='ml-6 w-72 h-11 p-4 border text-white  rounded-xl bg-transparent  ' />
                        <button className=' h-11 w-28 bg-light-gray text-base bg-opacity-10 border-2 rounded-xl ml-6 text-custom-blue font-semibold border-custom-blue'>Check</button>
                    </div>
                    <div className=' bg-gray-500 mt-8 w-[740px] h-[40px] bg-opacity-20 border-none rounded-xl'>
                        <p className='text-custom-blue text-lg pl-24 pt-1 font-semibold '>Need a certificate for your COVID-19 result? Please click <a href="none" className='border-b-1 border-custom-blue'>here</a> </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Div11