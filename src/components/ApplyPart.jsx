import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const ApplyPart = ({ jobData }) => {
    // console.log(jobData);
    const {id, image, jobType, location, employmentType, name, salary, title, } = jobData
    return (
        <div className='mx-auto border-4 rounded-lg p-3 mt-16 w-[60%]'>
            <div className='flex items-center gap-6 my-4'>
                <img className='image' src={image} alt="" />
                <div className='grow'>
                    <h2 className='text-2xl font-semibold'>{title}</h2>
                    <h2 className='text-xl font-semibold'>{name}</h2>
                    <div className='flex gap-4 py-2'>
                    <button className='outline p-1 rounded outline-blue-500'>{jobType}</button>
                    <button className='outline p-1 rounded outline-blue-500'>{employmentType}</button>
                </div>
                    <div className='flex'>
                        <div className='flex items-center'>
                            <MapPinIcon className="w-6 h-6 text-gray-700"></MapPinIcon>
                            <h2 className='text-xl font-semibold p-2'>Address: <span className='text-gray-500'>{location}</span></h2>
                        </div>
                        <div className='flex items-center p-2'>
                            <CurrencyDollarIcon className='w-6 h-6 text-gray-800' />
                            <h2 className='text-xl font-semibold p-2'>Salary: <span className='text-gray-500'>{salary} (Per Month)</span></h2>
                        </div>
                    </div>
                </div>
                <button className='primary-btn mr-3'><Link to={`/${id}`}>Details</Link></button>
            </div>
        </div>
    );
};

export default ApplyPart;