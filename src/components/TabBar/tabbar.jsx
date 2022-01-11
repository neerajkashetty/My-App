import React from "react";
import "./tabbar.scss"
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import ReorderIcon from '@material-ui/icons/Reorder';
import GitHubIcon from '@material-ui/icons/GitHub';
import { BrowserRouter, Link } from "react-router-dom";



export const Nav = ()=>{
    return(
        <div id="nav">
            <h1>hey bitch</h1>
            <Link to='/Project'>Contact</Link>
        </div>
    )
}


export const Tabbar = ({menu , setMenu}) =>{

    return(
        <div className={"tabbar  " +  (menu && "active")}>
            <div className="wrapper">
            <div className="left">
                <a href="#intro" className="logo"> Neeraj Kashetty</a>
                <div className="itemcontainer">
                    <LinkedInIcon/>
                    {/* <a href="https://www.instagram.com/neerajkashetty/">Insta</a> */}
                    <span className="span">Neeraj Kashetty</span>
                </div>

                <div className="itemcontainer">
                    <InstagramIcon/>
                    {/* <span className="span"> */}
                    <a href="https://www.instagram.com/neerajkashetty/">neerajkashetty
                    </a>

                    {/* </span> */}
                </div>

                <div className="itemcontainer">
                    <MailIcon/>
                    <span className="span">neeraj.kashetty29@gmail.com</span>
                </div>

                <div className="itemcontainer">
                    <GitHubIcon/>
                    <span className="span">neeraj.kashetty29</span>
                </div>
            </div>
            <div className="right">
                <div className="hamburger" onClick={()=> setMenu(!menu)}>
                    <ReorderIcon/>
                </div>
                
            </div>
            </div>

        </div>
    )
}
