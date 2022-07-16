import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import DisplayBooks from './components/DisplayBooks';
import Category from './components/Categories';

const App = () => (
  <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<DisplayBooks />} />
        <Route path="/categories" element={<Category />} />
      </Routes>
    </Router>
  </>
);

export default App;
