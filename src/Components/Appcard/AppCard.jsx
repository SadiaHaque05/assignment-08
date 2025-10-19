import React from 'react';
import downIcon from '../../assets/images/icon-downloads.png';
import starIcon from '../../assets/images/icon-ratings.png';
import { Link } from 'react-router';


const AppCard = ({app}) => {
    const {image, id, title, ratingAvg, downloads} = app;
    return (
        <Link to={`/apps/${id}`} className="no-underline">
            <div>
            <div className="card bg-base-100 border shadow-sm w-[350px] h-[400px] ml-5">
  <figure className='flex justify-center px-4 pt-4'>
    <img className='max-w-[100%] p-4'
      src={image}
      alt='apps' />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-center">
      {title}
    </h2>
    <div className="card-actions justify-between">
      <div className="badge badge-outline"><img className='w-[15px]' src={downIcon} alt="" />{downloads}</div>
      <div className="badge badge-outline"><img  className='w-[15px]' src={starIcon} alt="" />{ratingAvg}</div>
    </div>
  </div>
</div>
        </div>
        </Link>
    );
};

export default AppCard;