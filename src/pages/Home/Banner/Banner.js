import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        style={{ height: '600px' }}
                        className="d-block w-100"
                        src="https://e3.365dm.com/20/10/2048x1152/skynews-gym-gyms-exercise-workout_5145632.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: '600px' }}
                        className="d-block w-100 "
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRtFwMR0axnwLTl4IEas_765FF5qg6euTjlA&usqp=CAU"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: '600px' }}
                        className="d-block w-100    "
                        src="https://d18zdz9g6n5za7.cloudfront.net/plan/1020/1020-3614-fb-fit-round-3-intense-4-week-workout-program-a946.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;