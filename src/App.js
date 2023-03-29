import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './Pages/Home';
import Quotes from './Pages/Quotes';
import Navbar from './Pages/Navbar';

const App = () => (
  <div className="App">
    <header>
      <Navbar />
    </header>
    <main id="main-section">
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/calculator"
          element={<Calculator />}
        />
        <Route
          path="/Quote"
          element={<Quotes />}
        />
      </Routes>
    </main>
  </div>
);

export default App;
