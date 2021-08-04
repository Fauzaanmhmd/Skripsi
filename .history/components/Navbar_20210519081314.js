import Link from 'next/link'

const Navbar = props => {
    return (
        <div className="navbar">
            <img className="navimg" src="/favicon.ico" alt="" />
            <ul className="navbar_menu">
                <li className="zoom">Menu</li>
                <li className="zoom">Catalogue</li>
                <li className="zoom">About</li>
            </ul>
        </div>
    )
}

export default Navbar
