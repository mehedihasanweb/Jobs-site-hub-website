import React, { useEffect, useState } from 'react';
import "./Category.css"

const Category = ({ catItem }) => {
    // console.log(catItem);
    const { image, title, totalJobs } = catItem
    return (
        <div className='category p-4'>
            <img className='py-3' src={image} alt="" />
            <h3 className='text-2xl py-3 font-semibold'>{title}</h3>
            <p className='text-gray-400'>{totalJobs}</p>
        </div>
    );
};

export default Category;