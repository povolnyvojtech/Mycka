import React from 'react';
import { useLocation } from 'react-router-dom';

function Main() {
  const location = useLocation();
  const { name } = location.state || {}; // Získáme přenesený state

  return (
    <div className="Main">
      <h1>Vítejte!</h1>
      {name && <label>Jméno: {name}</label>}
    </div>
  );
}

export default Main;
