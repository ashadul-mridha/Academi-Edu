import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';

const Courses = (props) => {
    
    const {name , teacher , price , img , rateCount , rate } = props.course;
    
    return (
        <div>
            
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                    <Card.Title className="text-primary">{name}</Card.Title>
                    <Card.Text className="text-secondary">
                        by: {teacher}
                    </Card.Text>
                    <Card.Text className="fs-3 fw-bold text-danger">
                       Price: ${price}
                    </Card.Text>
                    <Card.Text className="fs-5 fw-normal text-warning">
                    <Rating
                        initialRating={rate}
                        readonly
                        emptySymbol="far fa-star"
                        fullSymbol="fas fa-star"
                    />
                    ({rateCount} Review)
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
};

export default Courses;