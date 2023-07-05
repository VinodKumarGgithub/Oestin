import { Link } from "react-router-dom"
export const Navbar = () => {
    return (
       <>
       <Link to={'/'} >Home</Link>
       <Link to={'/hotel-list'} >HotelList</Link>
       {/* <Link to={'/hotel-details'} >HotelDetails</Link> */}
       <Link to={'/Payment'} >Payment</Link>
       </>
    )
}