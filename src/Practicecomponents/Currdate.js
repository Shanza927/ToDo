import React from 'react';
//import ReactDOM from 'react-dom';
function Currdate()
{
    const name = "Shanza Amin" ;
    let currDate = new Date().toLocaleDateString();
    let currTime = new Date().toLocaleTimeString();

    return(
        <div className="bg-washed-blue bb bw2">
            <h2 contentEditable="true"> Hellow My Name is {name}  </h2>
            <p> {`Current Date is${currDate}`} </p>
            <p>{`Current Time is =${currTime}`} </p>
           
        </div>
    );
}
export default Currdate ;