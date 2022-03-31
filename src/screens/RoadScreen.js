import React, { Component }  from 'react';
export default function RoadScreen () {
    return (
        <>  
            <section className="service-screen">
                <div className="header">
                    <h1>Road Test</h1>
                    <p>Guaranteed Success</p>
  
                </div>
  
                <div className="content">
                  <strong>
                    <p className="text">
                        Stduent would be picked up with the car and get to use it for the road test.
                        Then would be droped off after the test</p>
                  </strong>  
  
                    <div className="prices">
  
                        <div className="price">
                              <p className="service">In/OutSide Toronto</p>
        
                              <div className="circle">
                                  <p className="amount"> $200+</p>
                                  <p className="tag">rate</p>
                              </div>
  
                              <p className="des">
                                  Price is $200 + pickup/dropoff location 
                              </p>
  
                                  <a href="tel:+1-647-562-3376" className="phone">+1(647)562-3376</a>
                                  <a className="mail" href="mailto:triplewealthds@gmail.com">triplewealthds@gmail.com</a>
                          </div>
  
                         
  
                    </div>
                    
  
  
                </div>
  
            </section>
  
        </>
    )
  }