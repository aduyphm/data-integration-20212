import React from 'react';
import { useState, useEffect} from "react";
import './App.css';
import { useLocation } from 'react-router-dom'

// Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home';
import Search from './components/Search/Search';
import Admin from './components/Admin';
import LogIn from './components/Login/Login';
import ResetPassword from './components/Login/ResetPassword';
import UserRoutes from './routes/UserRoutes';

// Routes
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




function App() {
  useEffect(() => {
    setToken(null);
    localStorage.removeItem("token")
}, [])

  const [token, setToken] = useState(localStorage.getItem("token"));
  const MergeRoutes = () => {
    if (useLocation().pathname.includes("/admin")) {
      if(token == null){
        return(
          <Routes>
            <Route path="/admin/*" element={<LogIn setToken={setToken}/>}/>
            <Route path="/admin/reset-password" element={<ResetPassword/>} />
          </Routes>
        )
      }else{
        return(
          <Routes>
            <Route path="/admin/*" element={<Admin/>}/>
          </Routes>
        ) 
      }
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
    <MergeRoutes/>
  );
}

export default App;
