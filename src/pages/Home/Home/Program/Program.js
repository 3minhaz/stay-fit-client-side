import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Program = (props) => {

    const { image, price, duration, program_name, details, _id } = props.program;

    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{program_name}</Card.Title>
                        <Card.Text>
                            {details.slice(0, 30)}...
                        </Card.Text>
                        <Card.Text>
                            Price : {price} <br />  <span className='text-success'>Duration : {duration}</span>
                        </Card.Text>
                        <Link to={`/bookNow/${_id}`}><Button variant="primary">Book Now</Button></Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Program;