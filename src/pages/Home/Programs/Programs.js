import React, { useEffect, useState } from 'react';
import Program from '../Home/Program/Program';
import { Container, Row, Spinner } from 'react-bootstrap';

const Programs = () => {
    const [programs, setPrograms] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://stay-fit.onrender.com/programs')
            .then(res => res.json())
            .then(data => {
                setPrograms(data)
                setIsLoading(false);
            });
    }, [])
    return (
        <Container>
            <h2 className='text-center my-4'>Our programs</h2>
            {
                isLoading && <div className="text-center">
                    <Spinner animation="border" variant="success" />
                </div>
            }
            <Row xs={1} md={3} className="g-4">
                {
                    programs.map(program => <Program key={program._id} program={program}></Program>)
                }
            </Row>
        </Container>
    );
};

export default Programs;