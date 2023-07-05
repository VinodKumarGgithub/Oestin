import { Routes, Route } from 'react-router-dom'
import { Home } from '../Components/Home'
import { HotelDetails } from '../Components/HotelDetails'
import { Login } from '../Components/Login'
import { Singup } from '../Components/Signup'
import { HotelList } from '../Components/HotelList'
import { Payment } from '../Components/Payment'

export const AllRoutes = () => {

    return (
        <Routes>
            {/* <Route path='/' element={<Login /> } /> */}
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<Singup /> }/>
            <Route path='/Payment' element={<Payment />} />
            <Route path='/hotel-list' element={<HotelList /> } />
            <Route path='/hotel-details/:id' element={<HotelDetails />} />
        </Routes>
    )
}