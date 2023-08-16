import React from 'react';
import {Link} from "react-router-dom";

export default function HomeScreen() {
    return (
        <>
            <section className="hero">
                <div className="content">
                    <p className="welcome">Welcome to Triple Wealth Driving School</p>
                    <address>
                        <a href="tel:+1-647-562-3376" className="phone">+1(647)562-3376</a>
                        <a className="mail" href="mailto:triplewealthds@gmail.com">triplewealthds@gmail.com</a>
                    </address>
                </div>
            </section>


            <section className="services container" id="services">
                <h1>SERVICES</h1>
                <p>Results that Last</p>

                <div className="content">
                    <div className="incar">
                        <div className="image-wrapper">
                            <div className="box1">
                                <div className="box2">
                                </div>
                            </div>
                        </div>

                        <div className="content-text">
                            <p className="title">Customized Lessons</p>
                            <Link to="/lessons" className="lesson">In-Car Lessons</Link>
                        </div>
                    </div>

                    <div className="road">
                        <div className="content-text">
                            <p className="title">Guaranteed Success</p>
                            <Link to="/test" className="test">Road Test</Link>
                        </div>

                        <div className="image-wrapper">
                            <div className="box1">
                                <div className="box2">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about container" id="about">

                <h1>ALL ABOUT ME</h1>
                <p>Personalized. Friendly. Quality Education</p>

                <div className="content ">

                    <div className="circle">
                        {/* <img src="../public/logo512.png" /> */}
                    </div>

                    <p className="text">
                        With over 30 years of experience in driving, you can be assured that you are getting the best learning experience from an expert, with the full knowlegde of the ontario road network.
                        By teaching students, I am also a student, by learning from previous students and continuously applying that previous knowledge to continue getting better and making this experience easier for you.
                        I know that doing something new can be stressful and a certain level of empathy comes along with making sure you as a student, is getting the best learning environment you can.

                    </p>
                    <p className="name">
                        OLAYINKA OLALERE

                    </p>

                    <p className="mot"> MOT APPROVED DRIVING INSTRUCTOR (ONTARIO)</p>


                </div>
            </section>

            <section className="contact container" id="contact">

                <h1> CONTACT ME </h1>
                <p className="">Get free Advice on the G1 Knowledge Test</p>

                <div className="contact-info">

                    <img src="../public/logo512.png"/>

                    <div className="address-wrapper">
                        <address className='address '>
                            <div className="contact-wrapper">

                                <div>
                                    <a href="tel:+1-647-562-3376" className="phone">+1(647)562-3376</a>

                                </div>
                                <div>
                                    <a className="mail" href="mailto:triplewealthds@gmail.com">triplewealthds@gmail.com</a>
                                </div>
                            </div>
                        </address>
                    </div>
                </div>
            </section>
        </>



    )
} 