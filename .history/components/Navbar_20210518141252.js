import Link from 'next/link'

const Navbar = props => {
    return (
        <div className="navbar">
            <img src="/favicon.ico" alt="" />
            <ul className="navbar_menu">
                <li>Menu</li>
                <li>Catalogue</li>
                <li>About</li>
            </ul>
        </div>
    )
}

export default Navbar
