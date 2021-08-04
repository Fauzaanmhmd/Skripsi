import Link from 'next/link'

const Navbar = props => {
    return (
        <div className="navbar">
            <img className="navimg" src="/favicon.ico" alt="" />
            <ul className="zoom">
                <li>Menu</li>
                <li>Catalogue</li>
                <li>About</li>
            </ul>
        </div>
    )
}

export default Navbar
