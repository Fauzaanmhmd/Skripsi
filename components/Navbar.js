import Link from 'next/link'

const Navbar = props => {
    return (
        <div className="navbar">
            <ul className="navbar_menu">
                <Link href="/">
                    <li>Menu</li>
                </Link>
                <Link href="/catalogue">
                    <li>Catalogue</li>
                </Link>
                <Link href="/about">
                    <li>About</li>
                </Link>
            </ul>
            <Link href="/admin">
                <div className="navbar_admin">Admin</div>
            </Link>
        </div>
    )
}

export default Navbar
