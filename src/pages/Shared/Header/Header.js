import React from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate()
    const handleLogin = () => {
        navigate('/login')
    }
    return (
        <div>
            <Navbar style={{ backgroundColor: '#198754' }} expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="/home" className='text-white'>STAY-FIT</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text className='text-white text-white'>
                            {/* <Link to='/dashboard'>dashboard</Link>
                            Signed in as: <a href="#login">Mark Otto</a> */}
                            <Link to='/' className='text-white text-decoration-none me-2'>Home</Link>
                            <Link to='/programs' className='text-white text-decoration-none me-2'>Programs</Link>
                            {user.email && <>
                                <Link to='/dashboard' className='text-white text-decoration-none me-2'>Dashboard</Link>
                                <span className='me-2'>{user.displayName}</span>
                            </>}

                            {user.email && <button className='btn btn-info' onClick={logout}>logout</button>}
                            {!user.email && <Button variant="info" onClick={() => handleLogin()}>Login</Button>}

                        </Navbar.Text>
                        {/* <Link to='/login'>Login</Link> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;