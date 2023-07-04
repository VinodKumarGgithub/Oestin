import { NavbarLeft } from "./NavbarLeft"


export const NavRight = () => {

    return (
        <>
        {/*  Mobile Menu Area start  */}
        <div class="mobile-menu-area">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="mobile-menu">
                            <nav id="dropdown">
                                <ul>
                                    <li><a href="/">HOME</a></li>
                                    <li>
                                        <a href="/hotel-list">ROOMS</a>
                                        <ul class="submenu">
                                            <li><a href="/hotel-list">ROOM LIST</a></li>
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