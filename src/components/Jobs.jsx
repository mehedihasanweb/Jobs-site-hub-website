import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Jobs = ({jobs}) => {
    // const getData = useLoaderData()
    console.log(jobs);
    return (
        <div>
            <div className='details-bg'>
                <h2 className='details-page text-center text-4xl font-bold pt-16'>Applied Jobs</h2>
            </div>
        </div>
    );
};

export default Jobs;