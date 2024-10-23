import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Main from './Main'; // Importujeme komponentu Main

function App() {
  const [name, setName] = useState(''); // Uloží hodnotu z inputu
  const navigate = useNavigate(); // Pro přesměrování na jinou stránku

  const handleButtonClick = () => {
    if (name) {
      navigate(`/main`, { state: { name } }); // Předáme hodnotu inputu přes state
    }
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <div className="user_input">
              <label>Zadejte jméno: </label>
              <input
                type="text"
                placeholder="Jméno..."
                value={name}
                onChange={(e) => setName(e.target.value)} // Získá obsah inputu
              />
              <button onClick={handleButtonClick}>Pokračovat</button>
            </div>
          }
        />
        {/* Definujeme cestu pro Main */}
        <Route path="/main" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
