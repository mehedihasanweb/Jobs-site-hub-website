import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const Features = ({ fData }) => {
    // console.log(fData)
    const { image, id, employmentType, jobType, salary, location, name, title } = fData
    return (
        <div className='border mt-8'>
            <div className='p-4'>
                <img src={image} alt="" />
                <h3 className='py-2 font-semibold text-2xl'>{title}</h3>
                <h4 className='text-gray-500 text-2xl font-semibold'>{name}</h4>
                <div className='flex gap-4 py-2'>
                    <button className='outline p-1 rounded outline-blue-500'>{jobType}</button>
                    <button className='outline p-1 rounded outline-blue-500'>{employmentType}</button>
                </div>
                <div className='flex py-2 text-gray-500'>
                    <MapPinIcon className="h-6 w-6" />
                    <p className='mr-2'>{location}</p>
                    <CurrencyDollarIcon className='w-6 h-6' />
                    <p>{salary}</p>
                </div>
                <button className='primary-btn'><Link to={`/${id}`}>View Details</Link></button>
                
            </div>
        </div>
    );
};

export default Features;