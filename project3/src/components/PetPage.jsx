import React from 'react';


const PetPage = ({ puppyList, setPuppyList }) => {
    if (!setPuppyList) {
        return <div>No puppy selected</div>;
    }

    return (
        <div>
            <h2>Pet Page</h2>
            <p>Name: {setPuppyList.name}</p>
            <p>Breed: {setPuppyList.breed}</p>
        </div>
    );
};

export default PetPage;