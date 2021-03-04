import React,  {useState} from 'react';

function MenueComponent(props)
{
    const [count, setCount] = useState(0);
    return(
        <div>
<h1> Course name is {props.name}</h1>
<p>you clicked {count} times </p>
<button onClick={() => setCount(count + 1)}>
        Click me
        </button>
        </div>
    )
}
export default MenueComponent