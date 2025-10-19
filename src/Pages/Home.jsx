import React from 'react';
import Banner from '../Components/Banner/Banner';
import { Link, useLoaderData } from 'react-router';
import AppCard from '../Components/Appcard/AppCard';
import Spinner from '../Components/Spinner';

const Home = () => {
    const apps = useLoaderData();
    if (!apps) return <Spinner />;
    return (
        <div>
            <Banner></Banner>

            <div className='mx-auto text-center mb-8'>
               <h2 className='text-4xl font-bold px-5 mb-5'>Featured Apps</h2>
               <p className='text-slate-500 text-sm font-semibold'>Explore All Trending Apps on the Market developed by us!</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                   apps.map((app) =><AppCard key={app.id} app={app}></AppCard>)
                }
            </div>

            <div className='flex justify-center my-8'>
                <Link to="/apps">
                   <button className='btn bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white rounded-2xl border-none'>Show All</button>
                </Link>
            </div>

        </div>
    );
};

export default Home;