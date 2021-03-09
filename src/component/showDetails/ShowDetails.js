import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ShowDetails = () => {
    const { countryName } = useParams();
    const [countrys, setCountrys] = useState([]);
    // console.log(countrys);

    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCountrys(data[0]))
    }, []);

    const { name, alpha2Code, population, subregion, flag, region, capital, callingCodes, timezones } = countrys;
    return (
        <div className='text-center text-primary'>
            <img className='w-25 rounded py-5' src={flag} alt=""/>
            <h3 className='pb-4'>{name}</h3>
            <table className="table table-striped">
                <tbody className='text-center text-primary'>
                    <tr>
                        <th scope="row">Country Name </th>
                        <td>{name} ({alpha2Code})</td>
                    </tr>
                    <tr>
                        <th scope="row">Capital</th>
                        <td>{capital}</td>
                    </tr>
                    <tr>
                        <th scope="row">Region</th>
                        <td>{region}</td>
                    </tr>
                    <tr>
                        <th scope="row">Population</th>
                        <td>{population}</td>
                    </tr>
                    <tr>
                        <th scope="row">Time Zone</th>
                        <td>{timezones}</td>
                    </tr>
                    <tr>
                        <th scope="row">Calling Codes</th>
                        <td>({callingCodes})</td>
                    </tr>
                    <tr>
                        <th scope="row">Sub Region</th>
                        <td>{subregion}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ShowDetails;