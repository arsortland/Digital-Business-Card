import React from "react"
import twittericon from "../pictures/twittericon.png"
import facebookicon from "../pictures/facebookicon.png"
import instaicon from "../pictures/instaicon.png"
import githubicon from "../pictures/githubicon.png"


export default function Footer() {
    return (
        <div className="footer">
            <img src={twittericon} />
            <img src={facebookicon} />
            <img src={instaicon} />
            <img src={githubicon} />
        </div>
    )
}