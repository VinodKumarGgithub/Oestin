import { Routes, Route } from 'react-router-dom'
import { Home } from '../Components/Home'
import { HotelDetails } from '../Components/HotelDetails'
import { Signup } from '../Components/Registration/Signup'
import { HotelList } from '../Components/HotelList'
import { Payment } from '../Components/Payment'
import { Otp } from '../Components/Registration/OTP'
import ErrorPage from '../Components/Error'
export const AllRoutes = () => {

    return (
        <Routes>
            {/* <Route path='/' element={<Login /> } /> */}
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<Signup/> }/>
            <Route path='/otp' element={<Otp/> }/>
            <Route path='*' element={<Home />} />
            <Route path='/Payment' element={<Payment />} />
            <Route path='/room-list' element={<HotelList /> } />
            <Route path='/room-details' element={<HotelDetails />} />
        </Routes>
    )
}