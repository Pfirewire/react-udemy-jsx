// import react and reactDOM libraries
import React from "react";
import ReactDOM from 'react-dom/client';

// get a reference to div with id root
const el = document.getElementById("root");

// tell react to take control of that element
const root = ReactDOM.createRoot(el);

// create component
function App() {

    let message = 'Bye there!';

    if(Math.random() > 0.5) {
        message = 'Hello there!';
    }

    return (
        <h1>{message}</h1>
    );
}

// show component on screen
root.render(<App />);