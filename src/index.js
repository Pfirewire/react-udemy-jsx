// import react and reactDOM libraries
import React from "react";
import ReactDOM from 'react-dom/client';

// get a reference to div with id root
const el = document.getElementById("root");

// tell react to take control of that element
const root = ReactDOM.createRoot(el);

// create component
function App() {

    const name = 'Samantha';
    const age = 23;

    return (
        <h1>
            Hi, my name is {name} and my age is {age}
        </h1>
    );
}

// show component on screen
root.render(<App />);