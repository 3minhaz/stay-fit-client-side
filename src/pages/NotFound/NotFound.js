import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='text-center mt-5'>
            <h2>404!! Not found</h2>
            <Link className='text-decoration-none' style={{ fontSize: '30px' }} to='/'>Click to go back</Link>
        </div>
    );
};

export default NotFound;