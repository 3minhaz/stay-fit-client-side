import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import AdminDashboard from '../AdminDashboard/AdminDashboard';
const DashboardLayout = () => {
    return (
        <div>
            <h2>Welcome to dashboard</h2>
            <div className="row mt-5">
                <div style={{ borderRight: '1px solid black' }} className="col-md-3 px-4">
                    <AdminDashboard></AdminDashboard>
                </div>
                <div className="col-md-9 ps-5 pt-4">
                    {/* <Routes>
                        <Route path='dashboard/invoices' element={<Header></Header>} />
                        <Route path='dashboard/tax' element={<Footer></Footer>} />
                    </Routes> */}
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;