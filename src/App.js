import React from 'react'
import './index.css';
import Estatus from './components/Estatus';
import Posteos from './components/Posteos';
import { useState } from 'react';

function App() {

  const [meGustaTotal, setMeGustaTotal] = useState(0)
  
  const AumentaMegustaTotal = () => (
    setMeGustaTotal(meGustaTotal + 1)
  );

  return (
    <div className="App">
      <Estatus 
      posteos={meGustaTotal}/>
      <Posteos
      totalMeGusta={AumentaMegustaTotal} />
    </div>
  );
}

export default App;