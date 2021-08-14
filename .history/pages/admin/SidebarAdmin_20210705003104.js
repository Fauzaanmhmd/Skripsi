import Link from 'next/link';

export default function SidebarAdmin({ SidebarAdmin }) {
    return (
        <div className="sidebar">
            <div className="sidebar_brand">
                <h3><span className="lab la-accusof"></span>Reswara Digital </h3>
                <h3><span className="lab la-accusof"></span>Printing</h3>
            </div>

            <div className="sidebar_menu">
                <ul>
                    <li>
                        <Link href={`./dashboard`}>
                            <a href="" className="active"><span className="las la-igloo"></span>
                                <span>Dashboard</span></a>
                        </Link>
                    </li>
                    <li>
                        <Link href={`./datafeedback`}>
                            <a href=""><span className="las la-users"></span>
                                <span>Feedback From Customer</span></a>
                        </Link>
                    </li>
                    <li>
                        <Link href={`./dataproduct`}>
                            <a href=""><span className="las la-clipboard-list"></span>
                                <span>Data Of Product</span> </a>
                        </Link>
                    </li>
                    <li>
                        <Link href={`./recentorder`}>
                            <a><span className="las la-shopping-bag"></span>
                                <span>Recent Orders</span></a>
                        </Link>
                    </li>
                    <li>
                        <Link href={`../`}>
                            <a><span className="las la-shopping-bag"></span>
                                <span>Menu</span></a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div >

    )
}