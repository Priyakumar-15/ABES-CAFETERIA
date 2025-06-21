import React from 'react';
import {Link} from "react-router-dom";
import {HiOutlineArrowNarrowRight} from 'react-icons/hi';

const About = () => {
  return (
    <>
    <section className="about" id="about">
        <div className="container">
            <div className="banner">
                <div className="top">
                    <h1 className="heading">Craving a study break but short on time?</h1>
                    <p>ABES Cafeteria has you covered. </p>

                    </div>
                    <p className="mid">  We offer a diverse menu designed to fit your busy schedule and diverse tastes.  Whether you're grabbing a quick coffee and pastry on the way to class, settling in for a satisfying lunch with friends, or fueling a late-night study session with your go-to comfort food, you'll find exactly what you need, right here on campus.  We're committed to providing variety, convenience, and quality, so you can focus on what matters most.</p>
                    <Link to ={"/"}>Explore Menu{" "}
                    <span> <HiOutlineArrowNarrowRight/> </span></Link>

                        </div> 
                        <div className="banner">
                            <img src ="/aboutus.webp" alt="about"/>
                            </div>
            </div>

    </section>
    </>
  );
};


export default About;