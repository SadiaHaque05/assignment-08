import React from 'react';
import { FaAppStoreIos } from "react-icons/fa6";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import banImg from '../../assets/images/hero.png'


const Banner = () => {
    return (
        <div className='flex flex-col items-center justify-center text-center mt-15'>
            <div className='upperpart  flex flex-col items-center'>
                <div className='text'>
                    <h1 className='text-5xl font-extrabold'>We Build <br /><span className='bg-gradient-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent'>Productive</span> App</h1>
                    <p className='mt-3 text-slate-500 font-semibold text-sm'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                </div>

                <div className='btns flex items-center mt-5 gap-4'>
                    <a href="https://play.google.com/store/apps?hl=en" target="_blank" rel="noopener noreferrer"><button className="btn shadow-lg flex items-center gap-2 font-semibold"><IoLogoGooglePlaystore />Play Store</button></a>
                    <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer"><button className="btn shadow-lg flex items-center gap-2 font-semibold"><FaAppStoreIos />App Store</button></a>
                </div>

                <div className='image mt-10'>
                    <img className='mx-auto' src={banImg} alt="" />
                </div>
            </div>

            <div className='lowerpart h-[270px] w-full p-6 bg-gradient-to-r from-[#632ee3] to-[#9f62f2] flex flex-col items-center justify-center text-center mb-15'>
                <h1 className='text-4xl font-bold mb-5 text-white'>Trusted by Millions, Built for You</h1>
                <div className='flex items-center justify-around w-full max-w-4xl gap-1'>
                    <div>
                        <p className='text-slate-200 text-sm font-semibold mb-2'>Total Downloads</p>
                        <h1 className='text-white text-5xl font-bold'>29.6M</h1>
                        <p className='text-slate-200 text-sm font-semibold mt-3'>21% more than last month</p>
                    </div>
                    <div>
                        <p className='text-slate-200 text-sm font-semibold mb-2'>Total Reviews</p>
                        <h1 className='text-white text-5xl font-bold'>906K</h1>
                        <p className='text-slate-200 text-sm font-semibold mt-3'>46% more than last month</p>
                    </div>
                    <div>
                        <p className='text-slate-200 text-sm font-semibold mb-2'>Active Apps</p>
                        <h1 className='text-white text-5xl font-bold'>132+</h1>
                        <p className='text-slate-200 text-sm font-semibold mt-3'>31 more will Launch</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;