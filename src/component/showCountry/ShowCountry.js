import React from 'react';
import { Link } from 'react-router-dom';

const ShowCountry = (props) => {
    // console.log(props.country)
    const { name, flag } = props.country

    return (
        <div className='container w-50 rounded border shadow p-4 mb-4 text-center'>
            <img className='w-25 rounded' src={flag} alt="" />
            <h4 className='text-primary p-3'>{name}</h4>
            <Link className='btn btn-primary' to={`/country/${name}`}>Show Details</Link>
        </div>
    );
}; 

export default ShowCountry;