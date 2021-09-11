import React, { useState, useEffect } from 'react';
import Tableau from './Component/Tableau';
import { block$ } from './block';
import './App.css';

function App() {
  const [block, Setblock] = useState([])

  useEffect(() => {

    async function fetchData() {
      await block$.then(response => {
        Setblock(response)
      }).catch(error => {
        console.log(error)
      })
    }

    fetchData();

  }, [])

  return (
    <div className="App">
      <Tableau arrays={block} />
    </div>
  );
}

export default App;
