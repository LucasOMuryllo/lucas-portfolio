import { GitHubIcon } from "../icons/github-icon";
import { InstaIcon } from "../icons/insta-icon";
import { LinkedInIcon } from "../icons/linkedin-icon";
import { TwitterIcon } from "../icons/twitter-icon";

import "./social-btns.scss"


export function SocialBtns() {
    return (
        <div className="social">
            <a target="_blank" href="https://www.instagram.com/lcs.muryllo/">
                <InstaIcon />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/lucasmuryllo/">
                <LinkedInIcon />
            </a>
            <a target="_blank" href="https://github.com/LucasOMuryllo">
                <GitHubIcon />
            </a>
            <a target="_blank" href="https://twitter.com/lcsmuryllo">
                <TwitterIcon />
            </a>
        </div>
    )
}