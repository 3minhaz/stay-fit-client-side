import React from 'react';
import { useForm } from 'react-hook-form';

const IsAdmin = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('https://boiling-sierra-59765.herokuapp.com/addUsers/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('successfully made admin')
                    reset();
                }
            })
    };
    return (
        <div>
            <h2>this is make admin dashboard</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("email")} placeholder='enter admin email' />
                <input value='makeAdmin' type="submit" />
            </form>
        </div>
    );
};

export default IsAdmin;