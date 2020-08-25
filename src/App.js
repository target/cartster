import React from 'react';
import './App.css';
import data from "./data/recipes.json";
import Menu from "./components/Menu";

function App() {
  return (
        <Menu recipes={data} />
  );
}

export default App;
