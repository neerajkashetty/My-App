import { colors } from "@material-ui/core";
import { Label } from "@material-ui/icons";
import react, { Component } from "react";
import { VictoryPie , VictoryTooltip} from "victory";
import { VictoryChart, VictoryAxis, VictoryBar,VictoryTheme,VictoryCandlestick} from "victory";
import "./testino.scss"


const mydata = [ 
    { x : "Azure Iot", y:200, z: "50%" },
    { x : "Mobile App Development (IOS)", y:300 , z:"55%"},
    { x : "Machine Learning", y:400, z: "70%"},
    {x:"Full Stack (MERN) " , y:500, z : "90%"}
];


 
export const Testino = () =>{
    return(
        <div className="Test" id="Test">
            <h1>About Me</h1>
            <div className="about">
                <h3>I am Neeraj Kashetty, I am passionate about building excellent software that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations. What would you do if you had a software expert available at your fingertips?<br></br><br></br>
                <em> Reach out to me for any project ideas</em>
                </h3>
            </div >
            <div className="pie">
            {/* <VictoryPie
                 className=""
                 data={mydata}
                 colorScale={["grey","whitesmoke","yellow","red","lightblue"]} 
                 style={{labels: {fontSize:15, fill:"white" , padding:30}}}

                />
                </div> */}
 
<VictoryChart horizontal
    theme={VictoryTheme.material}
  >
    <VictoryAxis />
    <VictoryBar horizontal
      labels={({datum})=> datum.z }
      data={mydata}
      style={{ data: { fill: "#c43a31", stroke: "black", strokeWidth: 2 }}}
      />
      
  </VictoryChart>




</div>

        </div>
    )
}