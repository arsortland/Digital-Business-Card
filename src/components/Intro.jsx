import React from "react"
import pictureofme from "../pictures/me.jpeg"

export default function Intro() {
    return (
        <div className="intro">
            <img src={pictureofme} alt="Picture of me" />
            <h2>André Sortland</h2>
            <h3>Software & Cloud developer</h3>
            <a href="https://andresortland.com" target="_blank">andresortland.com</a>
        </div>
    )
}