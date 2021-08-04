import Link from 'next/link'

const Navbar = props => {
    return (
        <div className="navbar">
            <ul className="navbar_menu">
                <h1 className="zoom">Reswara Product Catalogue</h1>
                <Link href="/">
                    <li className="zoom">Menu</li>
                </Link>
                <Link href="/catalogue">
                    <li className="zoom-dropdown">Catalogue</li>
                </Link>
                <Link href="/about">
                    <li className="zoom">About</li>
                </Link>
            </ul>
        </div>
    )
}

export default Navbar
