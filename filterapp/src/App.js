import React, { useState } from "react";
import "./App.css";
import { data } from "./data";
import Card from "./Card";
import Button from "./Button";

function App() {
  const [cards, setCards] = useState(data);
  const cats = ["all", ...new Set(data.map((card) => card.category))];

  const filter = (cat) => {
    if (cat === "all") {
      setCards(data);
      return;
    }
    setCards(data.filter((item) => item.category === cat));
  };

  return (
    <div className="App">
      <h1>FILTER SERACH</h1>
      <Button categories={cats} handleClick={filter} />
      <Card allcards={cards} />
    </div>
  );
}

export default App;
