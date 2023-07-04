
import { Link } from 'react-router-dom'
export const NavbarLeft = () => {

    return (
        <>
        <div class="container">
            <div class="row">
                <div class="col-xl-5 col-lg-4 col-sm-4 col-12">
                    <div class="logo" id='logo'>
                        <Link to="/"><img src="https://htmldemo.net/oestin/oestin/img/logo/logo.png" alt="Oestin"
              /></Link>
                    </div>
                </div>
                <div class="col-xl-7 col-lg-8 col-sm-8 col-12">
                    <div class="header-top fix">
                        <div class="header-contact">
                            <span class="text-theme">Contact:</span>
                            <span>0123456789</span>
                        </div>
                        <div class="header-links">
                            <Link to="https://www.facebook.com/"><i class="fa-brands fa-facebook-f" ></i
                ></Link>
                            <Link to="https://twitter.com/"><i class="fa-brands fa-twitter"></i
                ></Link>
                            <Link to="https://plus.google.com/"><i class="fa-solid fa-rss"></i
                ></Link>
                            <Link to="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i
                ></Link>
                            <Link to="https://www.pinterest.com/"><i class="fa-brands fa-pinterest-p"></i
                ></Link>
                        </div>
                    </div>
                    <div class="main-menu d-none d-lg-block">
                        <nav>
                            <ul>
                                <li><Link to="/">HOME</Link></li>
                                <li>
                                    <Link to="/hotel-list">ROOMS</Link>
                                    <ul class="submenu">
                                            <li><Link to="/hotel-list">ROOM LIST</Link></li>
                                            <li><Link to="/hotel-details">ROOM DETAILS</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="#">ACTIVITIES</Link>
                                    <ul class="submenu megamenu">
                                        <li>
                                            <Link to="#">Megamenu List</Link>
                                            <ul>
                                                <li><Link to="#">Location</Link></li>
                                                <li><Link to="/hotel-list">Room List</Link></li>
                                                <li><Link to="/hotel-details">Room Details</Link></li>
                                                <li><Link to="#">Mega menu</Link></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link to="#">Megamenu List</Link>
                                            <ul>
                                                <li><Link to="event.html">Event</Link></li>
                                                <li><Link to="#">Mega menu</Link></li>
                                                <li><Link to="contact.html">Contact</Link></li>
                                                <li><Link to="team.html">Team</Link></li>
                                                <li><Link to="#">Mega menu</Link></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link to="#">Megamenu List</Link>
                                            <ul>
                                                <li><Link to="room-list.html">Room List</Link></li>
                                                <li><Link to="#">Mega menu</Link></li>
                                                <li><Link to="room-grid.html">Room Grid</Link></li>
                                                <li><Link to="room-details.html">Room Details</Link></li>
                                                <li><Link to="#">Mega menu</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li><Link to="location.html">LOCATION</Link></li>
                                <li><Link to="event.html">EVENT</Link></li>
                                <li><Link to="team.html">TEAM</Link></li>
                                <li><Link to="contact.html">CONTACT</Link></li>
                            </ul>
                        </nav>
                    </div>
                    {/*  Mainmenu End  */}
                </div>
            </div>
        </div>
        </>
    )
}