import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-primary py-4 container-fluid'>
            <Link to='/home'>
                <h3 className='text-white'>Country Details</h3>
            </Link>
        </div>
    );
};

export default Header;