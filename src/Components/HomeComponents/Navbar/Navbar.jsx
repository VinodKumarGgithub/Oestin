import { NavRight } from "./NavRight"
import { NavbarLeft } from "./NavbarLeft"


export const Navbar = () => {

    return (
        <>
         <header class="header-area fixed header-sticky">
        <NavbarLeft />
       <NavRight />
    </header>
        </>
    )
}