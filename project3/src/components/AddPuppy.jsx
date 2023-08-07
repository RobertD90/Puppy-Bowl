import React, { useState } from 'react';

const AddPuppy = ({ onAddPuppy }) => {
    const [newPuppy, setNewPuppy] = useState({
        name: "",
        breed: "",
        id: 0
    });

    const handleNewPuppyChange = (e) => {
        const { name, value } = e.target;
        setNewPuppy((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleAddNewPuppy = () => {
        onAddPuppy(newPuppy);
        setNewPuppy({
            name: "",
            breed: "",
            id: "",
        });
    };

    return (
        <div>
            <input
                type="text"
                name="name"
                value={newPuppy.name}
                onChange={handleNewPuppyChange}
                placeholder="Name"
            />
            <input
                type="text"
                name="breed"
                value={newPuppy.breed}
                onChange={handleNewPuppyChange}
                placeholder="Breed"
            />
            <input
                type="number"
                name="id"
                value={newPuppy.id}
                onChange={handleNewPuppyChange}
                placeholder="id"
            />
            <button onClick={handleAddNewPuppy}>Add New Puppy</button>
        </div>
    );
};

export default AddPuppy;
