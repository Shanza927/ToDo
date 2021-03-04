import React from 'react';
import ReactDOM from 'react-dom';
import './Greetings.css';
function Greetings()
{
    let currTime = new Date(2020 , 12 , 7,18).getHours();
    let greet = "";
    let cssStyle = {};
    if (currTime >= 1 && currTime < 12 )  {
        greet = "Good Morning";
        cssStyle.color= "green";
    }
    else if (currTime >= 12 && currTime < 19)  {
        greet = "Good Afternoon";
        cssStyle.color= "Orange";
    }
    else {
        greet="Good Night";
        cssStyle.color= "Blue";
    }
    return(
        <div className=" greet bg-light-purple bb bw2 ">
                <h1 className="msg-box br4 b--solid b--pink p4 bg-light-blue grow shasow-4">Hey Sir ! <span style={cssStyle}>{greet} </span> </h1>
            
        </div>
    );
}
export default Greetings;
