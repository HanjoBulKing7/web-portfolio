import React from "react";
import "../styles/Global.scss";

export default function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li><a href="#">&gt; About me</a></li>
                <li><a href="#">&gt; Education</a></li>
                <li><a href="#">&gt; Projects</a></li>
                <li><a href="#">&gt; Contact info</a></li>
            </ul>
        </nav>
    );
}