import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

export default function Buttons() {
    return (
        <div className="button-container">
            <a href="mailto:mlynnleigland@gmail.com">
                <button className="header-button email-button"><MdOutlineEmail className="email-icon" /> Email
                </button>
            </a>
            <div className="button-space"></div>
            <a href="https://www.linkedin.com/in/maggieleigland/">
                <button className="header-button linkedin-button"><FaLinkedin className="linkedin-icon" />LinkedIn</button>
            </a>
        </div>
    )
}