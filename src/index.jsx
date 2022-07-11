import ReactDOM from "react-dom/client"
import React from "react"
import Header from "./Header.jsx"
import Cockpit from "./Cockpit/Cockpit.jsx"
import Footer from "./Footer.jsx"
import Info from "./Info/Info.jsx"
import "./custom.scss"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className="bg-primary">
        <Header />
        <Cockpit />
        <Info />
        <Footer />
    </div>
);