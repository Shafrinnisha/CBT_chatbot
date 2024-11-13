import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
import Chatbot from './components/Chatbot';
import Home from './components/Home';
// import About from './components/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chatbot />} />
        {/* <Route path="/about" component={About} /> */}
      </Routes>
    </Router>
  );
}

export default App;
