import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import AppCard from '../Components/Appcard/AppCard';
import Spinner from '../Components/Spinner';

const Apps = () => {
    const apps = useLoaderData();
    if (!apps) return <Spinner />;

    const [searchTerm, setSearchTerm] = useState('');

    const filteredApps = apps.filter(app =>app.title.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
         <div className='px-5'>
         <div className='mx-auto text-center mt-8 mb-8'>
             <h2 className='text-3xl font-bold my-5'>Our All Applications</h2>
            <p className='text-slate-500 text-sm font-semibold'>Explore All Apps on the Market developed by us. We code for Millions.</p>
         </div>

      <div className='flex flex-col md:flex-row justify-between items-center my-5 gap-3'>
        <div className='text-lg font-semibold'>
          Total Apps: {apps.length}
        </div>

        <input
          type="text"
          placeholder="Search apps..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='input input-bordered w-full md:w-1/3'
        />
      </div>

      {filteredApps.length > 0 ? (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
           {filteredApps.map(app => (<AppCard key={app.id} app={app} />))} </div>) : (<div className='text-center mt-10 text-gray-500 text-lg'> No App Found... </div>)}
       </div>
    );
};

export default Apps;