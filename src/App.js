// import logo from './logo.svg';
import React, { Component }  from 'react';

import HomeScreen from './screens/HomeScreen';
import InCarScreen from './screens/InCarScreen';
import RoadScreen from './screens/RoadScreen';
import {Routes, Link, Route} from "react-router-dom";

import './App.css';

function App() {
  const toggle =() => {
    const toggleButton = document.getElementsByClassName('menu')[0]
    const navbarLinks = document.getElementsByClassName('nav-links')[0]
    
    toggleButton.addEventListener('click', () => {
      navbarLinks.classList.toggle('active')
    })
  }

  return (
      
    <div className="App">
      
        <nav >
          <Link to="/" className="logo">TWD</Link> 


          <div  className="menu"  onClick={toggle}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>

          </div>
        
            <ul className="nav-links">
              <div className='dropdown'>
                <li><a href="#services">Services <i class="fa fa-caret-down"></i> </a></li>

                <ul className='dropdown-content'>
                  <li>
                    <Link to="/lessons">In-CarLessons</Link>
                  </li>

                  <li>
                    <Link to="/test">Road Test</Link>
                  </li>

                </ul>
            
            
              </div>
            
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Book Now!</a></li>
            </ul>

         
        </nav>

    

     

      <main>

        <Routes>
          <Route path="/" element={<HomeScreen/>} />
          <Route path="/lessons" element={<InCarScreen/>}/>
          <Route path="/test" element={<RoadScreen/>}/>
        </Routes>
{/* 
        { false && <HomeScreen/>}
        {false && <InCarScreen />}
        {true && <RoadScreen />} */}
        {/* <HomeScreen/> */}

      </main>

   
      <footer><i class="fa fa-copyright"></i> Triple Wealth Driving School </footer>
    </div>
  );
}

export default App;
