import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { getShoppingCart } from '../../public/fakedb';
import ApplyPart from './ApplyPart';

const Jobs = () => {
    const [isAll, setIsAll] = useState(false)
    const [onsite, setOnsite] = useState([])
    
    const fData = useLoaderData();
    

    let jobsInfo = []
    const jobsData = getShoppingCart();
    
    for (const id in jobsData) {
        const jobs = fData.find(job => job.id == id);
        if (jobs) {
            jobsInfo.push(jobs)
        }
    }
    
    
    const handleOnsite =(jobsInfo) =>{
        
        setIsAll(true)
        const aa = jobsInfo.filter(job => job.jobType == "Onsite")
        if(aa){
            setOnsite(aa);
        }
    }
    

    const handleFullTime =(jobsInfo) =>{
        setIsAll(true)
        const aa = jobsInfo.filter(job => job.employmentType == "Full Time")
        if(aa){
            setOnsite(aa);
        }
    }


    return (
        <div>

            <div>
                <div className=''>
                    <div className='details-bg'>
                        <h2 className='details-page text-center text-4xl font-bold pt-16'>Job Details</h2>
                    </div>
                    <div className='mr-60 text-end'>
                        <button onClick={()=>handleOnsite(jobsInfo)} className='primary-btn'>Onsite</button>
                        <button onClick={()=>handleFullTime(jobsInfo)} className='primary-btn mx-4'>Fulltime</button>
                    </div>
                    {!isAll ? jobsInfo.map(jobData => <ApplyPart
                        key={jobData.id}
                        jobData={jobData}></ApplyPart>)
                        : onsite.map(jobData => <ApplyPart
                            key={jobData.id}
                            jobData={jobData}></ApplyPart>)}
                </div>
            </div>
        </div>
    );
};

export default Jobs;