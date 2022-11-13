import React, { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();
    const [myBooking, setMyBooking] = useState([]);
    const [isDeleting, setIsDeleting] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`https://stay-fit.onrender.com/myBooking/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMyBooking(data)
                setIsLoading(false)
            })
    }, [isDeleting])


    const handleDeleteBooking = id => {
        const proceed = window.confirm('are you sure ,you want to delete the items');
        if (proceed) {
            fetch(`https://stay-fit.onrender.com/myBooking/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        setIsDeleting(true)
                        alert('successfully deleted')
                    }
                })
        }
    }
    // const handleUpdate = (id) => {

    //     const url = `https://thawing-sands-06340.herokuapp.com/update/${id}`;
    //     fetch(url, {
    //         method: 'PUT',
    //         headers: { 'content-type': 'application/json' },
    //         body: JSON.stringify()
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.modifiedCount) {
    //                 alert('status approved');
    //                 setIsDeleting(true)
    //             }
    //         })
    // }
    return (
        <div className="row mx-auto m-3">
            <h2>My Orders</h2>
            {
                isLoading && <div className="text-center">< Spinner animation="border" variant="secondary" /></div>
            }
            {myBooking.map(booking => <div
                className="col-md-6 my-3"
                key={booking._id}
            >
                <img className="w-75 h-50" src={booking.program.image} alt="" />
                <p>order id: {booking._id}</p>
                <p>name: {booking.programs?.offer}</p>
                <p>status: {booking.status}</p>
                <button className="btn btn-danger" onClick={() => handleDeleteBooking(booking._id)}>Delete</button>
            </div>)
            }
        </div>
    );
};

export default MyOrders;