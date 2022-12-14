import React, { useState } from 'react'

export default function CounterHooks(props){
    const [counter, setcounter] = useState(0);

    const sumar = () => setcounter(counter + 1);
    const restar = () => setcounter(counter - 1);
    return(
        <>
            <h2>Hooks useState {props.name}</h2>
            <nav>
                <button onClick={restar}>-</button>
                <button onClick={sumar}>+</button>
            </nav>
            <h3>el valor es: {counter}</h3>
        </>  
    )
}

CounterHooks.defaultProps = {
    titulo: "Defaul Props",
};