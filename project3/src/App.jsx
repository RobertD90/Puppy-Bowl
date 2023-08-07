import { useEffect, useState } from 'react';
import './App.css';
import NavBar from "./components/NavBar.jsx";
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Link } from "react-router-dom";
import PlayerList from './components/PlayerList';
import FluffDetails from './components/FluffDetails';
import AddPuppy from './components/AddPuppy';
import PuppyDetails from './components/PuppyDetails';

const App = () => {
  const [puppyList, setPuppyList] = useState([]);
  const [selectedPuppy, setSelectedPuppy] = useState({});

  useEffect(() => {
    const getBowl = async () => {
      const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2306-fsa-et-web-ft-sf/players`);
      const data = await response.json();
      const allPuppy = data.data.players;
      setPuppyList(allPuppy);
    };
    getBowl();
  }, []);

  const clickHandler = (fluff) => {
    setSelectedPuppy(fluff);
  };

  const handleAddPuppy = async (newPuppy) => {
    try {
      const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2306-fsa-et-web-ft-sf/players`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newPuppy)
      });

      const data = await response.json();
      setSelectedPuppy(data);
    } catch (error) {
      console.error("Error adding new puppy:", error);
    }
  };

  return (
    <>

      <NavBar />
      <Routes>

        <Route path="/" element={<PlayerList puppyList={puppyList} />} />
        <Route path="/puppy/:id" element={<PuppyDetails puppy={selectedPuppy} />} />
      </Routes>

      <FluffDetails puppyList={puppyList} />

      <AddPuppy onAddPuppy={handleAddPuppy} />
    </>
  );
};

export default App;



