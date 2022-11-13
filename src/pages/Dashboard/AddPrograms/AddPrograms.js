import React from 'react';
import { useForm } from 'react-hook-form';

const AddPrograms = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('https://stay-fit.onrender.com/addPrograms', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('new programs added successfully');
                    reset();
                }
            });
    };
    return (
        <div>
            <h2>Give Information to add new program</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className='w-50 my-1' {...register("program_name")} placeholder='program-name' /> <br />
                <input className='w-50 my-1' {...register("duration")} placeholder='duration' /> <br />
                <input className='w-50 my-1' type="number" {...register("price")} placeholder='price' /> <br />
                <input className='w-50 my-1' type="text" {...register("details")} placeholder='details' /> <br />
                <input className='w-50 my-1' type="text" {...register("image")} placeholder='image-link' /> <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddPrograms;