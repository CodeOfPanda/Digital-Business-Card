import profilePicture from '../profilePicture.jpg'

export default function Header() {
    return (
        <header>
            <img src={profilePicture} alt="head shot of Maggie Leigland"/>
            <h1 className="header--name">Maggie Leigland</h1>
            <h3 className="header--occupation">Computer Science Student</h3>
            <a className="header-a-link" href="https://maggieleigland.me"><h4 className="header--link">maggieleigland.me</h4></a>
        </header>
    )
}