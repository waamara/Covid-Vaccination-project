import React from 'react'
import Myfont from "../assets/font.png"
import Pictue from "../assets/picture.png"
import Overlay from "../assets/overlay.png"

const Div3 = () => {
    return (
        <div
            className='h-[650px] flex flex-row'
            style={{
                backgroundImage: `url(${Myfont})`,
                width: 'w-full',
            }}>
            <div className='pl-20'>
                <p className='text-4xl font-bold  pt-20'>Get your vaccine <br /> registration today</p>
                <form action="">
                    <p className='text-2xl font-semibold  pt-10'>Patient’s Full Name</p>
                    <input type="text" placeholder='Full name ' className='bg-gray-300  mt-6 p-3 rounded-xl w-[400px]' />
                    <p className='font-semibold mt-6 text-2xl'>Mobile Number</p>
                    <p className='mt-4 text-gray-500 text-base'>Notifications for appointment and reminders will be sent<br />  to this provided number</p>
                    <div className='flex flex-row'>
                        <input type='text' placeholder='Phone number' className='bg-gray-300  mt-4 p-3 rounded-xl w-[250px]' />
                        <button className=' mt-4 ml-6 text-white border-none rounded-xl font-semibold bg-custom-blue h-11 w-32  '>Verify</button>
                    </div>
                    <button className=' mt-6 text-white border-none rounded-xl font-semibold bg-custom-blue h-11 w-[400px]  '>Submit</button>
                </form>
                <div className='flex flex-row mt-8 ml-8'>
                    <a href='none' className='text-gray-400 font-semibold'>Already registered ?</a>
                    <a href='none' className='ml-10 text-custom-blue font-semibold'>Check your status</a>
                </div>
            </div>
            <div className='relative'>
                <p className='mt-32 text-white font-bold ml-[500px] absolute text-center'>COVID-19 <br /> Vaccine</p>
                <button className='ml-[360px] mt-[450px] text-white border-none h-10 bg-opacity-30 bg-light-gray w-[180px] rounded-xl  absolute'>Verify Status</button>
                <img src={Overlay} alt="picture" className='absolute mt-16 ml-[230px] w-32 h-32 object-contain' />
                <img src={Pictue} alt="picture"
                    className='ml-64 border-none bg-darkblue rounded-xl mt-24 inset-0   object-cover ' />

            </div>
        </div>
    )
}

export default Div3