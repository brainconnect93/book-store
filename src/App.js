import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import DisplayBooks from './components/DisplayBooks';

const App = () => (
  <>
    <Router>
      <Navbar />
	  <Routes>
	    <Route path="/" element={<DisplayBooks />} />
	    <Route path="/categories" element={<Categories />} />
	  </Routes>
	</Router>
  </>
)

export default App;
