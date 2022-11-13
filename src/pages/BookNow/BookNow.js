import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Header from '../Shared/Header/Header';

const BookNow = () => {
    const { id } = useParams();
    const [book, setBook] = useState({});
    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    useEffect(() => {
        fetch(`https://stay-fit.onrender.com/programs/${id}`)
            .then(res => res.json())
            .then(data => setBook(data));
    }, [])
    // console.log(book);
    const onSubmit = data => {
        data.email = user.email;
        data.program = book;
        data.status = 'pending';
        fetch('https://stay-fit.onrender.com/programBook', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('successfully ordered placed');
                    reset();
                }
            })
    };
    const { image, price, duration, program_name, details, _id } = book;
    return (
        <div>
            <Header></Header>
            <Container>

                <h2>this is book now</h2>
                <div className="row">
                    <div className='col-md-6'>
                        <img width='90%' src={image} alt="" />
                        <h2>{program_name}</h2>
                        <p>Price : ${price}</p>
                        <p><span>Program Duration : {duration}</span></p>
                        <p>{details}</p>
                    </div>
                    <div className='col-md-6 text-center'>
                        <h3>Give your information to book</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className='w-75' {...register("name", { required: true })} defaultValue={user.displayName} type="text" /> <br />
                            <input className='my-3 w-75' defaultValue={user.email} {...register("email_add_by_user", { required: true })} type="email" /> <br />
                            <input className='w-75' {...register("address", { required: true })} label="address" placeholder='address' type="address" /> <br />
                            <input className='my-3 w-75' {...register("contact", { required: true })} placeholder='phone-number' type="number" /> <br />
                            <Button type="submit">place order</Button>
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default BookNow;