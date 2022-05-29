import React from "react";
import "./App.css";
import card from "./data/card.json";
import Card from "./components/Card";


import './data/card.json';

function App() {
  return (
    <div>
      <Card card={card}/>
    </div>
  );
}

export default App;
