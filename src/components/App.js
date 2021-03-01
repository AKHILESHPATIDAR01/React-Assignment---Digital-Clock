import React, {Component, useState} from "react";
import '../styles/App.css';
// import Clock from "./Clock";

// function App(){
//     let time = new Date().toLocaleTimeString();
        
//     const [displayTime , setDisplayTime] = useState(time);
    
//     // componentDidMount(){
//     //     setInterval(updateTime,1000);
//     // };

//     var timeer = setInterval(updateTime,1000);

//         // setInterval(()=>{
//         //     time = new Date().toLocaleTimeString();
//         //     // console.log(time);
//         //     setDisplayTime(time);
//         // },1000);

//         // let time = new Date();

        

//         function updateTime(){
//             time = new Date().toLocaleTimeString();
//             // console.log(time);
//             setDisplayTime(time);
//         };


//         // componentWillUnmount() {
//         //     clearInterval(this.timeer);
//         // }

        

//         return(
//             <div className="Clock">
//                <h3 id="time">{displayTime}</h3>
//             </div>
//         )
    
//     }


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            date: new Date() 
        };
    }

    componentDidMount() {
        this.interval = setInterval(
            () => this.timer(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    timer() {
        this.setState({
            date: new Date()
        });
    }

    render() {
//         let hours = this.state.date.getHours();
//         hours = hours % 12;
//         let minutes = this.state.date.getMinutes();
//         let seconds = this.state.date.getSeconds();
//         let ampm = this.state.date.getHours() >= 12 ? 'PM' : 'AM';
//         let result = ` ${hours}:${minutes}:${seconds}`
//         return (
//             <div className="Clock">
//                 <h3 id="time">
//                     {result}{ampm}

//                 </h3>
//             </div>
//         );
            
                let hours = this.state.date.getHours() < 12 ? this.state.date.getHours() : this.state.date.getHours() - 12;
                let minutes = this.state.date.getMinutes();
                let seconds = this.state.date.getSeconds();
                let ampm = this.state.date.getHours() >= 12 ? 'PM' : 'AM';
                return (
                    <div className="Clock">
                        <h3 id="time">
                            {hours == 0 ? 12 : hours > 12 ? hours - 12 : hours}:
                            {minutes > 9 ? minutes : `0${minutes}`}:
                            {seconds > 9 ? seconds : `0${seconds}`} {ampm}
                        </h3>
                    </div>
                );
            
    }
}




export default App;
