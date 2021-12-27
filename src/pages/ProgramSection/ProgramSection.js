import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Program from '../Home/Home/Program/Program';
import Header from '../Shared/Header/Header';

const ProgramSection = () => {
    const [programs, setPrograms] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://boiling-sierra-59765.herokuapp.com/programs')
            .then(res => res.json())
            .then(data => {
                setPrograms(data)
                setIsLoading(false);
            });
    }, [])
    return (
        <div>
            <Header></Header>
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
        </div>
    );
};

export default ProgramSection;