import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router';
import { useLoaderData } from 'react-router';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { ToastContainer, toast } from 'react-toastify';

const AppDetails = () => {
  const { id } = useParams();
  const apps = useLoaderData(); 
  const app = apps.find(a => a.id === parseInt(id));

  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    const installedApps = JSON.parse(localStorage.getItem('installedApps')) || [];
    if (installedApps.includes(app?.id)) {
      setInstalled(true);
    }
  }, [app?.id]);

  if (!app) {
    return (
      <div className='text-center mt-10'>
        <h2 className='text-2xl font-bold text-red-500'>App not found!</h2>
        <Link to="/" className='btn mt-5'>Go Home</Link>
      </div>
    );
  }

  const reviewData = app.ratings.map(r => ({
    name: r.name,
    reviews: r.count
  }));

  const handleInstall = () => {
  const installedApps = JSON.parse(localStorage.getItem('installedApps')) || [];

  if (!installedApps.includes(app.id)) {
    installedApps.push(app.id);
    localStorage.setItem('installedApps', JSON.stringify(installedApps));
    setInstalled(true);
    toast.success(`${app.title} installed successfully!`);
  } else {
    setInstalled(true);
    toast.info(`${app.title} is already installed`);
  }
};

  const {image, title,description, reviews,size, downloads,ratingAvg} = app

  return (
    <div className='max-w-5xl mx-auto p-5 space-y-10'>
        <ToastContainer />

      <div className='flex flex-col md:flex-row gap-5 items-center md:items-start'>
        <img src={image} alt={title} className='w-full md:w-1/3 rounded-lg shadow-md' />

        <div className='flex-1 space-y-3'>
          <h1 className='text-3xl font-bold'>{title}</h1>
          <p><span className='font-bold'>Description:</span> {description}</p>

          <div className='flex gap-5 flex-wrap'>
            <span className='badge badge-outline'>⭐ {ratingAvg}</span>
            <span className='badge badge-outline'>⬇️ {downloads}</span>
            <span className='badge badge-outline'>📝 {reviews} reviews</span>
            <span className='badge badge-outline'><span className='font-bold'>Size:</span> {size} MB</span>
          </div>

          <button
            onClick={handleInstall}
            disabled={installed}
            className={`btn mt-3 ${installed ? 'btn-disabled' : 'btn-primary'}`}
          >
            {installed ? 'Installed' : 'Install'}
          </button>
        </div>
      </div>

      
      <div>
        <h2 className='text-2xl font-bold mb-5'>Ratings</h2>
        <ResponsiveContainer width='100%' height={300}>
          <BarChart data={[...reviewData].reverse()} layout="vertical" barCategoryGap="40%" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <XAxis type="number" />       
            <YAxis dataKey="name" type="category" width={100} /> 
            <Tooltip />
            <Bar dataKey="reviews" fill="#632ee3" barSize={15} radius={[5, 5, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AppDetails;
