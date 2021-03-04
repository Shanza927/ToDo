import React from 'react';
import ReactDOM from 'react-dom';
import Challenge1 from './Practicecomponents/Challenge1';
import Currdate from './Practicecomponents/Currdate';
import Greetings from './Practicecomponents/Greetings';
import 'tachyons'
function Practice()
{
    return(
        <div>
        <h1 className="tc"> Create A simple Webpage CH#1</h1> <br/>
     <Challenge1/>
     <br/> <br/> <h1 className="tc"> Current Date And Time (Template Literals) CH#2 </h1> <br/>
     <Currdate/>
     <br/> <h1 className="tc"> Greetings </h1> <br/><br/>
     <Greetings/> <br/> <hr width="4"/>
      </div>
      );
}
export default Practice;