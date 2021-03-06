import Link from 'next/link'

export default function NavbarAdmin({ NavbarAdmin }) {
    return (
        <div className="main_content_nav">
            <h3>
                <label>
                    <span className="las la-bars"></span>
                </label>
                Dashboard
            </h3>
            <div className="search_wrapper">
                <span className="las la-search"></span>
                <input type="search" placeholder="Search Here"></input>
            </div>

            <div className="user_wrapper">
                <img src="/img/ojan.jpeg" width="30px" height="30px"></img>
                <div>
                    <h5>Fauzan Muhammad</h5>
                    <small>Super Admin</small>
                </div>
            </div>
        </div>

    )
}