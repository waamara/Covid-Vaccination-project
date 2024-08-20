import React from 'react'
import MyImg from "../assets/img.png"
import Sheildimg from "../assets/shield.png"
import Mylogo from "../assets/thermometer.png"

const Div2 = () => {
    return (
        <div
            className='h-[794.35px] w-full'
            style={{
                backgroundImage: `url(${MyImg})`,
                width: 'w-full',
            }}>
            <div className='flex flex-row '>
                <p className='text-white font-bold text-4xl p-24'> Why get vaccinated <br />today?</p>
                <p className='text-gray-500 ml-24 p-24 ' >Magna adipiscing at elit at ornare lectus nibh lorem. <br /> Ac, sed ac lorem pellentesque vestibulum risus matti. <br /> In molestie condimentum malesuada non.</p>
            </div>
            <div className='flex flex-row'>
                <div className='h-[410px] w-[370px] p-12 border-none bg-light-gray bg-opacity-20 rounded-tl-[10%] rounded-bl-[10%] rounded-br-[10%] rounded-tr-[35%] ml-24'>
                    <img src={Sheildimg} alt="logo" className='bg-light-gray h-16 p-1 bg-opacity-10 rounded-2xl' />
                    <p className='font-bold text-xl text-custom-blue mt-6 '>Protects your immune <br /> system against viruses</p>
                    <p className='mt-6 text-white mb-8'>Velit ut consectetur mauris, orci amet, faucibus. <br /> Sit turpis fringilla ipsum pretium, dictum. Dolor eget vel nulla lorem ac.</p>
                    <a href="none" className=' text-custom-blue font-semibold' >Read More &rarr;</a>
                </div>
                <div className='h-[250px] w-[250px] border-1 border-gray-400 pl-8 pt-6  rounded-[10%] mt-40 ml-16'>
                    <img src={Mylogo} alt="logo" className='bg-light-gray h-12 bg-opacity-10 p-1 rounded-xl ' />
                    <p className='text-white font-bold mt-7 mb-7 text-lg'>Minimize the spread <br />of the Virus</p>
                    <a href="none" className='text-gray-500 font-bold text-sm'>Read More &rarr;</a>
                </div>
                <div className='h-[250px] w-[250px] border-1 border-gray-400 pl-8 pt-6  rounded-[10%] mt-40 ml-16'>
                    <img src={Mylogo} alt="logo" className='bg-light-gray h-12 bg-opacity-10 p-1 rounded-xl ' />
                    <p className='text-white font-bold mt-7 mb-14 text-lg'>Protect yourself</p>
                    <a href="none" className='text-gray-500 font-bold text-sm'>Read More &rarr;</a>
                </div>
            </div>
        </div>
    )
}

export default Div2