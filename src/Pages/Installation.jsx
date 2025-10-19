import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import Spinner from '../Components/Spinner';
import 'react-toastify/dist/ReactToastify.css';

const Installation = () => {
  const appsData = useLoaderData(); 
  const [installedApps, setInstalledApps] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [sortOrder, setSortOrder] = useState('high-low'); 

  useEffect(() => {
    const installedIds = JSON.parse(localStorage.getItem('installedApps')) || [];
    const installedAppsData = appsData.filter(app => installedIds.includes(app.id));
    
    const sortedApps = sortApps(installedAppsData, sortOrder);
    
    setInstalledApps(sortedApps);
    setLoading(false); 
  }, [appsData, sortOrder]);

  const sortApps = (apps, order) => {
    return [...apps].sort((a, b) => {
      if(order === 'high-low') return b.downloads - a.downloads;
      if(order === 'low-high') return a.downloads - b.downloads;
      return 0;
    });
  };

  const handleUninstall = (id) => {
    const installedIds = JSON.parse(localStorage.getItem('installedApps')) || [];
    const updatedIds = installedIds.filter(appId => appId !== id);
    localStorage.setItem('installedApps', JSON.stringify(updatedIds));
    setInstalledApps(prev => prev.filter(app => app.id !== id));
    toast.success('App uninstalled successfully!');
  };

  if (loading) {
    return <Spinner />; 
  }

  return (
    <div className="max-w-5xl mx-auto p-5 space-y-3">
      <ToastContainer />

      <div className="mx-auto text-center mt-8 mb-8">
        <h2 className="text-3xl font-bold my-5">Your Installed Apps</h2>
        <p className="text-slate-500 text-sm font-semibold"> Explore All Trending Apps on the Market developed by us</p>
      </div>

      <div className="flex justify-end mb-5">
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="select select-bordered w-40"
        >
          <option value="high-low">Downloads: High-Low</option>
          <option value="low-high">Downloads: Low-High</option>
        </select>
      </div>

      {installedApps.length === 0 ? (
        <div className="text-center mt-10 text-lg">No apps installed yet.</div>
      ) : (
        installedApps.map(app => (
          <div key={app.id} className="flex items-center justify-between bg-base-100 p-3 rounded-lg shadow-sm">
            <img
              src={app.image}
              alt={app.title}
              className="w-16 h-16 rounded-md object-cover"
            />
            <div className="flex-1 ml-3">
              <h2 className="font-bold text-lg">{app.title}</h2>
              <div className="flex gap-3 mt-1 text-sm">
                <span>⭐ {app.ratingAvg}</span>
                <span>⬇️ {app.downloads}</span>
              </div>
            </div>
            <button
              onClick={() => handleUninstall(app.id)}
              className="btn btn-sm bg-green-600 rounded-lg text-white font-bold mr-3"
            >
              Uninstall
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Installation;
