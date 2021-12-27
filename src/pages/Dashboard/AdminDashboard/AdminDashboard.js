import React from 'react';
import { Link } from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
const AdminDashboard = () => {
    const { isAdmin } = useAuth();
    return (
        <div >
            <h2>this is  dashboard </h2>
            {
                isAdmin && <div >
                    <Link to="/" className='text-decoration-none'>Home</Link><br />
                    <Link to="/dashboard/admin" className='text-decoration-none'>Make Admin</Link><br />
                    <Link to="/dashboard/addProgram" className='text-decoration-none'>Add Program</Link><br />
                    <Link to="/dashboard/manageAllBooking" className='text-decoration-none'>Manage All Booking</Link><br />
                    <Link to="/dashboard/manageAllPrograms" className='text-decoration-none'>Manage All Programs</Link>
                </div>
            }
            {
                !isAdmin && <div>
                    <Link to="/" className='text-decoration-none'>Home</Link><br />
                    <Link to="/dashboard/myBooking" className='text-decoration-none'>My Booking</Link><br />
                    {/* 
                    <Link to="/dashboard/addProgram">Add Program</Link><br />
                    <Link to="/dashboard/tax">tax</Link> */}
                </div>
            }
        </div>
    );
};

export default AdminDashboard;