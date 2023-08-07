import { useParams } from 'react-router-dom';
import React from 'react';

const PuppyDetails = ({ puppy }) => {

    if (!puppy) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Puppy Details</h2>
            <p>Name: {puppy.name}</p>
            <p>Breed: {puppy.breed}</p>
            <p>ID: {puppy.id}</p>
        </div>
    );
};

export default PuppyDetails;

