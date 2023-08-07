import React from 'react';
import { Link } from 'react-router-dom';

const FluffDetails = ({ puppyList, setPuppyList }) => {
    return (
        <ul>
            {puppyList.map((puppy) => (
                <li key={puppy.id}>
                    <Link to={`/puppy/${puppy.id}`}>{puppy.name}</Link>
                    <button onClick={() => setPuppyList(puppy)}>Select</button>
                </li>
            ))}
        </ul>
    );
};

export default FluffDetails;