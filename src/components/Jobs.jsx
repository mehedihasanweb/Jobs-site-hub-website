import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { getShoppingCart } from '../../public/fakedb';
import ApplyPart from './ApplyPart';

const Jobs = () => {
    const fData = useLoaderData();
    // console.log(fData);

    let jobsInfo = []
    const jobsData = getShoppingCart();
    // console.log(jobsData);
    for (const id in jobsData) {
        // console.log(id);
        const jobs = fData.find(job => job.id == id);
        if (jobs) {
            jobsInfo.push(jobs)
        }
    }
    // console.log(jobsInfo);
    return (
        <div>

            <div>
                <div className=''>
                    <div className='details-bg'>
                        <h2 className='details-page text-center text-4xl font-bold pt-16'>Job Details</h2>
                    </div>
                    <div className='mr-60 text-end'>
                        <h2 className='text-2xl'>Filter</h2>
                    </div>
                    {jobsInfo.map(jobData => <ApplyPart
                        key={jobData.id}
                        jobData={jobData}></ApplyPart>)}
                </div>

            </div>
        </div>
    );
};

export default Jobs;