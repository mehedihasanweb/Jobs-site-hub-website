import React, { useState } from 'react';
import "./JobDetail.css"
import { Link, useLoaderData } from 'react-router-dom';
import { MapPinIcon, CurrencyDollarIcon, CreditCardIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import Jobs from './Jobs';

const JobDetail = () => {
    const getData = useLoaderData();

    console.log(getData);
    const { id, jobDescription, jobResponsibility, salary, title, experience, email, phone, education, location } = getData

    
    const handleTotalJobs =(getData)=>{
    //    console.log(getData);
       <Jobs a = {getData}></Jobs>
    }
    



    return (
        <div className='mx-28'>
            <div className='details-bg'>
                <h2 className='details-page text-center text-4xl font-bold pt-16'>Job Details</h2>
            </div>
            <div className='flex justify-between gap-4 py-16 '>
                <div className=' w-full'>
                    <h2 className='text-xl'><span className='font-bold'>Job Description</span>: <span className='text-gray-500'>{jobDescription}</span></h2>
                    <h2 className='py-4 text-xl'><span className='font-bold'>Job Responsibility</span>: <span className='text-gray-500'>{jobResponsibility}</span></h2>
                    <h2 className='py-4 text-xl'><span className='font-bold'>Educational Requirements</span>: <br /> <span className='text-gray-500'>{education}</span></h2>
                    <h2 className='text-xl'><span className='font-bold'>Experiences</span>: <br /> <span className='text-gray-500'>{experience}</span></h2>
                </div>
                <div className='details-background w-full p-4'>
                    <h2 className='text-2xl font-bold text-center p-4'>Job Details</h2>
                    <hr />
                    <div className='flex items-center p-2'>
                        <CurrencyDollarIcon className='w-6 h-6 text-gray-800' />
                        <h2 className='text-xl font-semibold p-2'>Salary: <span className='text-gray-500'>{salary} (Per Month)</span></h2>    
                    </div>
                    <div className='flex items-center p-2'>
                        <CreditCardIcon className='w-6 h-6 text-gray-800'></CreditCardIcon>
                        <h2 className='text-xl font-semibold p-2'>Job title: <span className='text-gray-500'>{title}</span></h2>
                    </div>
                        <h2 className='text-2xl font-semibold'>Contact Information</h2>
                        <hr className='m-2'/>
                    <div className='flex items-center'>
                        <PhoneIcon  className='w-6 h-6 text-gray-800'/>
                        <h2 className='text-xl font-semibold p-2'>Phone: <span className='text-gray-500'>{phone}</span></h2>
                    </div>
                    <div className='flex items-center'>
                        <EnvelopeIcon className="w-6 h-6 text-gray-700"></EnvelopeIcon>
                        <h2 className='text-xl font-semibold p-2'>Email: <span className='text-gray-500'>{email}</span></h2>
                    </div>
                    <div className='flex items-center'>
                        <MapPinIcon className="w-6 h-6 text-gray-700"></MapPinIcon>          
                        <h2 className='text-xl font-semibold p-2'>Address: <span className='text-gray-500'>{location}</span></h2>
                    </div>
                    <button onClick={()=>handleTotalJobs(getData)} className='primary-btn w-full'>Apply Now</button>
                </div>
            </div>
            {/* <Jobs jobs={}></Jobs> */}
        </div>
    );
};

export default JobDetail;