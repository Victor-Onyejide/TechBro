// import logo from './logo.svg';
import React, { Component, useEffect, useState }  from 'react';

import HomeScreen from './screens/HomeScreen';
import InCarScreen from './screens/InCarScreen';
import RoadScreen from './screens/RoadScreen';
import {Routes, Link, Route} from "react-router-dom";

import './App.css';

// const [option, setOption] = useState('');



function App() {
  const toggle =() => {
    const toggleButton = document.getElementsByClassName('menu')[0]
    const navbarLinks = document.getElementsByClassName('nav-links')[0]
    
      toggleButton.addEventListener('click', () => {
        navbarLinks.classList.toggle('active')
      })
    }

  
  //   function scroll (choice) {

  //     setOption(choice);
  //     console.log(choice);
  //     console.log("CLICKED!");
  // }

//   useEffect(()=>{
//     scroll(option);
//  })

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
                <li><Link to="#"  className='serv'>Services <i class="fa fa-caret-down"></i> </Link></li>

                <ul className='dropdown-content'>
                  <li>
                    <Link to="/lessons">In-Car Lessons</Link>
                  </li>

                  <li>
                    <Link to="/test">Road Test</Link>
                  </li>

                </ul>
              </div>

              <li><Link to="/#about" className='ab' >About </Link></li>
              <li><Link to="/#book" className='b'>Book Now!</Link></li>
            </ul>

         
        </nav>

    

     

      <main>

        <Routes>
          <Route path="/" element={<HomeScreen/>} />
          <Route path="/lessons" element={<InCarScreen/>}/>
          <Route path="/test" element={<RoadScreen/>}/>
        </Routes>


      </main>

   
      <footer><i class="fa fa-copyright"></i> Triple Wealth Driving School </footer>
    </div>
  );
}

export default App;
