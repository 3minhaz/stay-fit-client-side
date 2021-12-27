import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';

const ManageAllBooking = () => {
    console.log();
    const [myBooking, setMyBooking] = useState([]);
    const [isDeleted, setIsDeleted] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://boiling-sierra-59765.herokuapp.com/myBooking')
            .then(res => res.json())
            .then(data => {
                setMyBooking(data)
                setIsLoading(false)
            })
    }, [isDeleted])


    const handleServiceDelete = id => {
        const proceed = window.confirm('are you sure ,you want to delete');
        if (proceed) {
            fetch(`https://boiling-sierra-59765.herokuapp.com/bookingDelete/${id}`,
                {
                    method: 'DELETE',
                    headers: {
                        'content-type': 'application/json'
                    }
                })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('deleted successfully');
                        setIsDeleted(true);
                    }

                })
        }

    };

    const handleUpdate = (id) => {

        const url = `https://boiling-sierra-59765.herokuapp.com/confirm/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('status change to confirm');
                    setIsDeleted(true)
                }
            })
    }

    return (
        <div>
            <h2 className="text-center my-3">Total Orders: {myBooking.length}</h2>
            {
                isLoading && <div className="text-center">< Spinner animation="border" variant="secondary" /></div>
            }
            <div>
                {myBooking.map((booking, index) => <div
                    key={booking._id}
                    className="d-flex justify-content-between    align-items-between p-3 m-4 border-secondary bg-light"
                >
                    <span className="p-2">Serial: {index + 1}</span>
                    <span > <h5 className="">Name: {booking?.program?.program_name}</h5></span>
                    <span >email: {booking.email}</span>
                    {/* <p className="mx-3 w-50">Location: {order?.details.location}</p> */}
                    <small className="">id: {booking._id}</small>
                    < span > <p className=""> Status: {booking.status}</p></span>
                    <button className="btn btn-danger h-50 me-2" onClick={() => handleServiceDelete(booking._id)}>Delete</button>
                    {booking.status === 'pending' ? <button className="btn btn-success h-50" onClick={() => handleUpdate(booking._id)}>Confirm</button> : <p>Booked</p>}

                </div>)
                }
            </div >

        </div >
    );
};

export default ManageAllBooking;