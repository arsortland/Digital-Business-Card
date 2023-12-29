import React from "react"
import MailIcon from "../pictures/mailicon.png"
import LinkedInIcon from "../pictures/linkedin.png"

export default function Contact() {
    const mailto = () => {
        window.open("mailto:arsortland@gmail.com", "_blank")
    }
    const linkedin = () => {
        window.open("https://www.linkedin.com/in/arsortland/", "_blank")
    }

    return (
        <div className="contact">
            <button className="mailbtn" onClick={mailto}>
                <img src={MailIcon}></img>Mail
            </button>
            <button className="linkedinbtn" onClick={linkedin}>
                <img src={LinkedInIcon}></img> LinkedIn
            </button>
        </div>
    )
}