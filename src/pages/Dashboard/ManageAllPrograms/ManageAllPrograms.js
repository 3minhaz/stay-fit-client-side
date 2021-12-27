import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Card, Col, Row, Spinner } from 'react-bootstrap';

const ManageAllPrograms = () => {
    const [isDelete, setIsDeleted] = useState(false);
    const [programs, setPrograms] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`https://boiling-sierra-59765.herokuapp.com/programs`)
            .then(res => res.json())
            .then(data => {
                setPrograms(data)
                setIsDeleted(true);
                setIsLoading(false);
            })
    }, [isDelete])

    const handleProgramDelete = (id) => {
        const proceed = window.confirm('are you sure you want to delete the program')
        if (proceed) {
            fetch(`https://boiling-sierra-59765.herokuapp.com/manageAllPrograms/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                },
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('deleted successfully');
                    }
                    setIsDeleted(true);
                })
        }

    }
    console.log(programs);
    return (
        <div>
            {
                isLoading && <div className="text-center">< Spinner animation="border" variant="secondary" /></div>
            }
            <Row xs={1} md={2} className="g-4">
                {
                    programs.map(program => <div>
                        <Col>
                            <Card>
                                <Card.Img height='200px' variant="top" src={program.image} />
                                <Card.Body>
                                    <Card.Title>{program.program_name}</Card.Title>
                                    <h4>Price: ${program.price}</h4>
                                    <Button onClick={() => handleProgramDelete(program._id)}>Delete</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </div>)

                }
                {
                    // setIsLoading(false)
                }
            </Row>
        </div>
    );
};

export default ManageAllPrograms;