import React, { useEffect, useState } from 'react';
import Category from './Category';
import Features from './Features';
import { useLoaderData } from 'react-router-dom';
import JobDetail from './JobDetail';


const Home = () => {
    const [catItems, setCatItems] = useState([]);
    // const [featuresItems, setFeaturesItems] = useState(false)

    const featuresData = useLoaderData();
   

    useEffect(() => {
        fetch("category.json")
            .then(res => res.json())
            .then(data => setCatItems(data))
    }, [])
    // console.log(catItems);

    return (
        <div>
            {/* banner section */}
            <div className='background'>
                <div className='flex flex-col md:flex-row p-4 items-center justify-around mx-28'>
                    <div className='w-full'>
                        <h2 className='text-6xl font-semibold'>One Step <br />
                            Closer To Your <br />
                            <span className='primary-color'>Dream Job</span></h2>
                        <p className='text-gray-500 pt-4'>Explore thousands of jobs opportunities with all the <br />
                            information you need. Its your future. Come find it. Manage all <br />
                            your job application from start to finish</p>
                        <button className='primary-btn mt-6'>Get Started</button>
                    </div>
                    <div>
                        <img src="assets/All Images/P3OLGJ1 copy 1.png" alt="" />
                    </div>
                </div>
            </div>

            {/* job category section */}
            <div className='mx-28 py-12'>
                <h2 className='text-center text-4xl font-semibold'>Job Category List</h2>
                <p className='text-gray-500 text-center'>Explore thousands of job opportunities with all the information you need. Its your future.</p>
                <div className='flex flex-col sm:justify-center py-12 md:flex-row gap-4'>
                    {
                        catItems.map((catItem, idx) => <Category 
                            key={idx}
                            catItem={catItem}></Category>)
                    }
                </div>
            </div>

            {/* features section */}
            <div className='mx-28 py-12'>
                <h2 className='text-5xl font-bold text-center'>Features Jobs</h2>
                <p className='text-gray-500 text-center'>Explore thousands of job opportunities with all the information you need. Its your future.</p>
                <div className='grid grid-cols-2 gap-4'>
                    {/* console.log(featuresItems); */}
                    {
                        
                        featuresData.map(fData => <Features
                            key={fData.id}
                            fData={fData}
                            // showJobDetails={showJobDetails}
                        ></Features>)
                    }
                </div>
                <div onClick={() => setFeaturesItems(true)} className='text-center mt-6'>
                    <button className='primary-btn'>Show More</button>
                </div>
            </div>
        </div>
    );
};

export default Home;