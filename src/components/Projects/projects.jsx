import React, { useState } from "react";
import "./projects.scss";
import "../Porjectlist/projectlist.jsx";
import { Projectlist } from "../Porjectlist/projectlist.jsx";

export const Project = () =>{

    const [selected , setSelected] = useState("ReactJs")

    const list = [
        {
            id:"ReactJs",
            title: "ReactJs",
        },

        {
            id:"ReactNative",
            title: "ReactNative",
        },

        {
            id:"AngularJs",
            title: "Machine Learning",
        },

        {
            id:"MERN Stack",
            title: "MERN Stack",
        }


        

    ]


    return(
        <div className="project" id="project">
            <h1>Projects </h1>
            <ul> {list.map((item) => (
                <Projectlist title={item.title} active ={selected === item.id } setSelected={setSelected} id={item.id}></Projectlist>
            ))}</ul>

            <div className="container">
                <div className="item">  
                    <img src="assets/Project.jpg"  alt=""></img>
                    <h3>Object Recognition</h3>

                </div>

                <div className="item">  
                    <img src="assets/Project.jpg"  alt=""></img>
                    <h3>Object Recognition</h3>

                </div>
                
                <div className="item">  
                    <img src="assets/Project.jpg"  alt=""></img>
                    <h3>Object Recognition</h3>

                </div>
                
                <div className="item">  
                    <img src="assets/Project.jpg"  alt=""></img>
                    <h3>Object Recognition</h3>

                </div>

                <div className="item">  
                    <img src="assets/Project.jpg"  alt=""></img>
                    <h3>Object Recognition</h3>

                </div>


                <div className="item">  
                    <img src="assets/Project.jpg"  alt=""></img>
                    <h3>Object Recognition</h3>

                </div>



            </div>

        </div>
    )
}
