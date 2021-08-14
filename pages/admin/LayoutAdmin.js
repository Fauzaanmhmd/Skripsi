import React, { useEffect } from "react"
import SidebarAdmin from "./SidebarAdmin"
import NavbarAdmin from "./NavbarAdmin"


export default function LayoutAdmin({ children, withBackground, judul }) {
    return (
        <div id="page-top">
            <SidebarAdmin />
            <div className="main_content">
                {/* aslinya header */}
                <NavbarAdmin />
                <main>
                    {children}
                </main>
            </div>
        </div >
    )
}