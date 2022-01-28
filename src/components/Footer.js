import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';


export default function Footer() {
    return (
        <footer>
            
            <ul className="footer--list">
                <li>
                    <a href="https://www.instagram.com/chamakoonleigland/">
                        <FaInstagram className="social-icon" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/CodeOfPanda">
                        <FaGithub className="social-icon" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/maggieleigland/">
                        < FaLinkedin className="social-icon" />
                    </a>
                </li>
            </ul>
        </footer>
    )
}