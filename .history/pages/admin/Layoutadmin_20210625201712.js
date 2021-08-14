import React, { useEffect } from "react"
import Link from 'next/link'


    export default function LayoutAdmin({ children, withBackground, judul }) {
        UEffect(() => {
            document.querySelector("body").classList.add("light")
        })
            rn (
            <div id="page-top">
                <div className="sidebar">
                    <div className="sidebar_brand">
                        <h3><span className="lab la-accusof"></span> Accusoft</h3>
                    </div>
                        
                    <div className="sidebar_menu">
                    <ul>
                            <li>
                                <a href="" className="active"><span className="las la-igloo"></span>
                                    <span>Dashboard</span></a>
                                >
                                    
                                <Link href={`./datafeedback`}>
                                    <a href=""><span className="las la-users"></span>
                                        <span>Feedback From Customer</span></a>
                                    nk>
                                        
                                
                                <Link href={`./dataproduct`}>
                                    <a href=""><span className="las la-clipboard-list"></span>
                                        <span>Data Of Product</span> </a>
                                    nk>
                                        
                                
                                <Link href={`./recentorder`}>
                                    <a><span className="las la-shopping-bag"></span>
                                        <span>Recent Orders</span></a>
                                    nk>
                                        
                                
                            
                        
                     className="main_content">
                    {/* aslinya header */}
                    <div className="main_content_nav">
                        <h3>
                            <label for="nav_toggle">
                                <span className="las la-bars"></span>
                            </label>
                                boarad
                            >
                             className="search_wrapper">
                            <span className="las la-search"></span>
                            <input type="search" placeholder="Search Here"></input>
                            v>
                            
                        <div className="user_wrapper">
                        <img src="img/2.jpg" width="30px" height="30px"></img>
                            <div>
                                <h5>Fauzan Muhammad</h5>
                                <small>Super Admin</small>
                                v>
                                
                            
                        n>
                        {children}
                    </main>
                        

                        )
}