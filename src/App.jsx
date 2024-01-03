import React from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Test from './components/Test';
import Resultados from './components/Resultados';
import { useState } from 'react';

const App = () => {
  let [kind, setKind] = useState('');
  let [id, setId]= useState('');
  console.log(kind);
  return (
    <Router>

      <div>
        <NavBar />
      </div>
      <div>

      </div>
      <Routes >
        <Route path="/" element={<Header setId={setId} />} />
        <Route path="/test" element={<Test id={id} setKind={setKind} />} />
        <Route path="/res" element={<Resultados id={id} kind={kind} />} />
      </Routes>

    </Router>
  )
}

export default App