import { NavbarLeft } from "./NavbarLeft"


export const NavRight = () => {

    return (
        <>
        {/*  Mobile Menu Area start  */}
        <div className="mobile-menu-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="mobile-menu">
                            <nav id="dropdown">
                                <ul>
                                    <li><a href="/">HOME</a></li>
                                    <li>
                                        <a href="/room-list">ROOMS</a>
                                        <ul className="submenu">
                                            <li><a href="/room-list">ROOM LIST</a></li>
                                            <li><a href="/hotel-details">ROOM DETAILS</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">LOCATION</a></li>
                                    <li><a href="#">EVENT</a></li>
                                    <li><a href="#">TEAM</a></li>
                                    <li><a href="#">CONTACT</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}