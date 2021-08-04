import Link from 'next/link'

const Navbar = props => {
    return (
        <div className="navbar">
            {/* <img className="nav-logo" src="/favicon.ico" alt="" /> */}
            <ul className="navbar_menu">
                <li className="zoom">Menu</li>
                <Link href="/">

                    <li className="zoom-dropdown">Catalogue</li>
                </Link>
                <li className="zoom">About</li>
            </ul>
        </div>
    )
}

export default Navbar
