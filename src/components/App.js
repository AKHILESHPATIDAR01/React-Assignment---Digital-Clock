import React, {Component, useState} from "react";
import '../styles/App.css';
// import Clock from "./Clock";

function App(){
    let time = new Date().toLocaleTimeString();
        
    const [displayTime , setDisplayTime] = useState(time);
    
    // componentDidMount(){
    //     setInterval(updateTime,1000);
    // };

    var timeer = setInterval(updateTime,1000);

        // setInterval(()=>{
        //     time = new Date().toLocaleTimeString();
        //     // console.log(time);
        //     setDisplayTime(time);
        // },1000);

        // let time = new Date();

        

        function updateTime(){
            time = new Date().toLocaleTimeString();
            // console.log(time);
            setDisplayTime(time);
        };


        // componentWillUnmount() {
        //     clearInterval(this.timeer);
        // }

        

        return(
            <div className="Clock">
               <h3 id="time">{displayTime}</h3>
            </div>
        )
    
    }


export default App;
