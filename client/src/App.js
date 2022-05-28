import React from 'react';
import './App.css';
import { useLocation } from 'react-router-dom'

// Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home';
import Search from './components/Search/Search';
import Admin from './components/Admin';
import UserRoutes from './routes/UserRoutes';

// Routes
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

  const MergeRoutes = () => {
    if (useLocation().pathname.includes("/admin")) {
      return (
        <Routes>
          <Route path="/admin/*" element={<Admin/>} />
        </Routes>
      );
    } else {
      return (
        <div id="app-container">
          <Header />
          <NavBar />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/tim-kiem/:query" element={<Search/>}/>
            <Route path="/chu-de/*" element={<UserRoutes/>}/>
          </Routes>
          <Footer />
        </div>
      );
    }
  }

  return (
    <MergeRoutes />
  );
}

export default App;
