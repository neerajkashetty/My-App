import React, { useEffect, useRef } from "react";
import "./intro.scss"
import { KeyboardArrowDown } from "@material-ui/icons";
import ITyped from 'react-ityped';


export const Intro = () =>{

    const strings = ["Full Stack Developer","Azure Iot Specialist"," AI Engineer ", " Data Scientist", " UI/UX Designer"]

    return(
        <div className="intro" id="intro">

            <div className="left">
                <div className="imagecontainer">
                    <img src="assets/Mee.png" alt=" "/>
                </div>
            </div>

            <div className="right">
                
                <div className="wrapper">
                    <h2>Hey Guys <span>This is</span></h2>
                    <h1>Neeraj <span>Kashetty</span></h1>
                    <h2><span>
                    <ITyped 
                    showCursor={false}
                    strings={strings}
                    typeSpeed={50}
                    backSpeed={40}
                    startDelay={100}
                    backDelay={1500}
                    
                    ></ITyped></span></h2>
                </div>
                <a href="#project" >
                    <KeyboardArrowDown className="arrow"/>
                </a>
            </div>

            
        </div>
    )
}
