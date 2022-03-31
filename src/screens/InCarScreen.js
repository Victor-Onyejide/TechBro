import React, { Component }  from 'react';
import { Link} from "react-router-dom";

export default function InCarScreen () {
  return (
      <>  
          <section className="service-screen">
              <div className="header">
                  <h1>In-Car Lessons</h1>
                  <p>Customized Lessons</p>
              </div>

              <div className="content container">
                <strong>
                    <p className="text">Student 
                    would be picked up with the car and get to use it for lessons.
                    Then would be droped off after lesson.</p>
                </strong>  

                    <div className="prices">

                        <div className="price">
                            <p className="service">Hourly Rate</p>
                            
                            <div className="circle">
                                <p className="amount"> $40</p>
                                <p className="tag">per hour</p>
                            </div>

                            <p className="des">
                                Price is $40 per hour + pickup/dropoff location 
                            </p>

                                {/* <div className='contacts'> */}
                                    <a href="tel:+1-647-562-3376" className="phone">+1(647)562-3376</a>
                                    <a className="mail" href="mailto:triplewealthds@gmail.com">triplewealthds@gmail.com</a>


                                {/* </div> */}

                               


                        </div>

                        <div className="price space">
                            <p className="service">Full Package</p>
                            
                            <div className="circle">
                                <p className="amount "> $650</p>
                                <p className="tag">full package</p>

                            </div>

                            <ul className="des">
                                <li>10 Lessons</li>
                                <li>Online Coaching</li>
                                <li>Certification</li>
                            </ul>

                                    <a href="tel:+1-647-562-3376" className="phone">+1(647)562-3376</a>
                                    <a className="mail" href="mailto:triplewealthds@gmail.com">triplewealthds@gmail.com</a>
                        </div>

                    </div>
                </div>
                  


              

          </section>

      </>
  )
}