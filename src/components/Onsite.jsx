import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { getShoppingCart } from '../../public/fakedb';

const Onsite = () => {
    const getData = useLoaderData();
    // console.log(getData);

    const dd= getShoppingCart()
    // console.log(dd);

    return (
        <div>
            <h2>Onsite is here</h2>
        </div>
    );
};

export default Onsite;