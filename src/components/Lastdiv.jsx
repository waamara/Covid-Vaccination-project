import React from 'react'
import bgimg from "../assets/unsp.png"
import img from "../assets/medi.png"
import rec1 from "../assets/rec1.png"
import rec2 from "../assets/rec2.png"
import rec3 from "../assets/rec3.png" 
import MyImg from "../assets/img.png" 
import sent from "../assets/send.png" 
import logo1 from "../assets/youtube.png"
import logo2 from "../assets/instagram.png"
import logo3 from "../assets/twitter.png" 
import logo4 from "../assets/facebook.png"


const Lastdiv = () => {
    return (
        <div>
            <div style={{
                backgroundImage: `url(${bgimg})`,
                width: 'w-full',
            }}
                className='h-[934px] relative  '>
                <div className='flex flex-col justify-center items-center relative  '>
                    <p className='absolute mt-32 text-custom-blue  font-semibold text-lg'>FEEDBACK</p>
                    <p className='absolute mt-32   font-bold text-4xl mt-[240px]'>What our Patients Think</p>
                    <p className='absolute mt-32    mt-[400px] text-gray-500'>Adipiscing nec etiam tortor elit quisque. Arcu aliquet convallis aenean eu velit. <br /> Mi vestibulum, ullamcorper venenatis imperdiet augue arcu donec neque.</p>
                </div>
                <div className='flex flex-row mt-[300px] absolute z-10 justify-between '>
                    <div className='w-[350px] h-[230px] border bg-light-gray bg-opacity-60 rounded-2xl ml-12 mr-12'>
                        <div className='flex flex-row'>
                            <div className='p-6'>
                                <img src={rec1} alt="img1" />
                            </div>
                            <div className='mt-8 '>
                                <p className='font-bold text-xl'>Oyindamola Maja</p>
                                <p className='text-gray-500 text-sm font-bold'>Badagry, Lagos</p>
                            </div>
                        </div>
                        <div>
                            <p className='text-center text-gray-600 text-bold'>“Been stressing about a close centre <br /> to get the <span className='text-custom-blue'>covid-19</span>  vaccine, until <br /> i tried Vaccination.ng”</p>
                        </div>
                    </div>
                    <div className='w-[350px] h-[230px] border  bg-custom-blue rounded-2xl'>
                        <div className='flex flex-row'>
                            <div className='p-6'>
                                <img src={rec2} alt="img1" />
                            </div>
                            <div className='mt-8 '>
                                <p className='font-bold text-white text-xl'>Okeowo Lekan</p>
                                <p className='text-gray-500 text-sm text-white font-bold'>Ikeja, Lagos</p>
                            </div>
                        </div>
                        <div>
                            <p className='text-center text-white text-bold'>“Got my vaccine very close to my house. <br /> Was very easy scheduling <br /> an appointment.”</p>
                        </div>
                    </div>
                    <div className='w-[350px] h-[230px] border bg-light-gray bg-opacity-60 rounded-2xl ml-12'>
                        <div className='flex flex-row'>
                            <div className='p-6'>
                                <img src={rec3} alt="img1" />
                            </div>
                            <div className='mt-8 '>
                                <p className='font-bold text-xl'>Kafaru Temitope</p>
                                <p className='text-gray-500 text-sm font-bold'>Obanikoro, Lagos</p>
                            </div>
                        </div>
                        <div>
                            <p className='text-center text-gray-600 text-bold'>“Been stressing about a close centre <br /> to get the <span className='text-custom-blue'>covid-19</span>  vaccine, until <br /> i tried Vaccination.ng”</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-row relative justify-evenly mt-[180px] items-center '>
                    <img src={img} alt="medicament" className='h-[350px]' />
                    <img src={img} alt="medicament" className='h-[350px]' />
                    <img src={img} alt="medicament" className='h-[350px]' />
                </div>
                <div className='absolute h-[400px] w-[900px] ml-[170px] border rounded-[30px]  mt-[170px] bg-custom-blue border flex flex-col justify-center items-center '>
                <p  className=' font-bold text-5xl -mt-[200px] text-white'>Get a quote</p>
                <p  className='text-white text-lg  mt-8 '>Please do enter your email address below </p> 
                <div className='flex flex-row -mb-[150px] mt-16'>
                    <input type="email" placeholder='lenux.ng@gmail.com' 
                    className='w-[290px] h-[50px] pl-6 rounded-tl-2xl rounded-bl-2xl' />
                    <button className='bg-darkblue w-[70px] rounded-br-2xl rounded-tr-2xl   '>
                        <img src={sent} alt="send-logo " 
                        className='pl-4 h-8'/>
                    </button>
                </div> 
                </div>
            </div>  
            <div style={{
                    backgroundImage: `url(${MyImg})`,
                    width: 'w-full',
                }} 
                className='h-[400px] '>
                    <div className="  flex flex-row w-full justify-evenly pt-52">
                    <p className="text-white p-12 text-3xl font-semibold   h-3 "><span className='border-b-2 border-custom-blue'>Vaccin</span>ation.ng</p>
                    <ul>
                        <li className="text-white p-14 text-lg">
                            <a className="m-4 font-semibold" href="*">Home</a>
                            <a href="*" className="m-4 font-normal text-gray-500">Services</a>
                            <a href="*" className="m-4 font-normal text-gray-500">Schedule</a>
                            <a href="*" className="m-4 font-normal text-gray-500">Contact Us</a>
                        </li>
                    </ul>
                    <div className='flex flex-row mt-12 '>
                    <a href="none"><img src={logo1} alt="youtube-logo" className='p-1' /></a>
                    <a href="none"><img src={logo2} alt="instagram-logo" className='p-1' /></a>
                    <a href="none"><img src={logo3} alt="x-logo"  className='p-1'/></a>
                    <a href="none"><img src={logo4} alt="facebook-logo" className='p-1' /></a> 
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Lastdiv