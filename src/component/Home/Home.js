import React, { useEffect, useState } from 'react';
import ShowCountry from '../showCountry/ShowCountry';

const Home = () => {
    const [countrys, setCountry] = useState([])

    useEffect(() =>{
        const url = 'https://restcountries.eu/rest/v2/all';
        fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data))

    }, [])

    return (
        <div className='bg-light pt-4'>
            {
                countrys.map(country => <ShowCountry key={country.name} country={country}/>)
            }
        </div>
    );
};

export default Home;