import React from 'react'
import flogo1 from "../assets/logo 1.png"
import flogo2 from "../assets/logo2.png"
import flogo3 from "../assets/logo3.png"
import flogo4 from "../assets/logo4.png"

const body = () => {
    return (
        <div className='h-[150px] flex flex-row '>
            <img src={flogo1} alt="logo1" className='mt-6 ml-10 h-[66px] w-[288px]  ' />
            <img src={flogo4} alt="logo4" className='ml-10 h-[117.98px] w-[288px]' />
            <img src={flogo3} alt="logo3" className='ml-10 mt-2 h-[81.82px] w-[288pxx]' />
            <img src={flogo2} alt="logo2" className='ml-10 mt-6 h-[59px] w-[200px]' />
        </div>
    )
}

export default body