import React from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Test from './components/Test';

const App = () => {
  return (
    <Router>

      <div>
        <NavBar />
      </div>
      <div>
        
      </div>
      <Routes >
        <Route path="/" element={<Header />} />
        <Route path="/test" element={<Test />} />
      </Routes>

    </Router>
  )
}

export default App