import React from 'react';

const Courses = (props) => {
    
    const {name , teacher , price } = props.course;
    
    return (
        <div>
            <h1>Name : {name}</h1>
            <h4>Teacher : {teacher}</h4>
            <h5>Price : {price}</h5>
        </div>
    );
};

export default Courses;