
import { Link } from 'react-router-dom'
export const NavbarLeft = ({scrollDistance}) => {

    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-xl-5 col-lg-4 col-sm-4 col-12">
                    <div className="logo"  id={scrollDistance>=11?"NavHomeLogo-resize":""} >
                        <Link to="/"><img src="https://htmldemo.net/oestin/oestin/img/logo/logo.png" alt="Oestin"
              /></Link>
                    </div>
                </div>
                <div className="col-xl-7 col-lg-8 col-sm-8 col-12">
                    <div className="header-top fix" id={scrollDistance>=11?"NavTopSec-Hide":""}>
                        <div className="header-contact">
                            <span className="text-theme">Contact:</span>
                            <span>0123456789</span>
                        </div>
                        <div className="header-links">
                            <Link to="https://www.facebook.com/"><i className="fa-brands fa-facebook-f" ></i></Link>
                            <Link to="https://twitter.com/"><i className="fa-brands fa-twitter"></i></Link>
                            <Link to="https://plus.google.com/"><i className="fa-solid fa-rss"></i></Link>
                            <Link to="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i ></Link>
                            <Link to="https://www.pinterest.com/"><i className="fa-brands fa-pinterest-p"></i></Link>
                        </div>
                    </div>
                    <div className="main-menu d-none d-lg-block" >
                        <nav>
                            <ul>
                                <li><Link to="/">HOME</Link></li>
                                <li>
                                    <Link to="/room-list">ROOMS</Link>
                                    <ul className="submenu">
                                            <li><Link to="/room-list">ROOM LIST</Link></li>
                                            <li><Link to="/room-details">ROOM DETAILS</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="#">ACTIVITIES</Link>
                                    <ul className="submenu megamenu">
                                        <li>
                                            <Link to="#">Megamenu List</Link>
                                            <ul>
                                                <li><Link to="#">Location</Link></li>
                                                <li><Link to="/room-list">Room List</Link></li>
                                                <li><Link to="/room-details">Room Details</Link></li>
                                                <li><Link to="#">Mega menu</Link></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link to="#">Megamenu List</Link>
                                            <ul>
                                                <li><Link to="/">Event</Link></li>
                                                <li><Link to="/">Mega menu</Link></li>
                                                <li><Link to="/">Contact</Link></li>
                                                <li><Link to="/">Team</Link></li>
                                                <li><Link to="/">Mega menu</Link></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link to="#">Megamenu List</Link>
                                            <ul>
                                                <li><Link to="room-list">Room List</Link></li>
                                                <li><Link to="#">Mega menu</Link></li>
                                                <li><Link to="room-list">Room Grid</Link></li>
                                                <li><Link to="room-details">Room Details</Link></li>
                                                <li><Link to="#">Mega menu</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li><Link to="/">LOCATION</Link></li>
                                <li><Link to="/">EVENT</Link></li>
                                <li><Link to="/">TEAM</Link></li>
                                <li><Link to="/">CONTACT</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}