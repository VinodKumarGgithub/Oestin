import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
    getHotelFailure,
    getHotelRequest,
    getHotelSuccess
} from "../Redux/action";
import axios from "axios";

export const HotelDetails = () => {

    // const [data, setData] = useState([]);
    const singleHotel = useSelector((state) => state)
    console.log(singleHotel)

    const dispatch = useDispatch();

    const { id } = useParams();

    const getSingleData = () => {
        dispatch(getHotelRequest());
        axios.get(`http://localhost:8080/hotellist/${id}`)
            .then((res) => {
                console.log(res.data)
                dispatch(getHotelSuccess(res.data))
            }).catch((error) => {
                console.log(error)
                dispatch(getHotelFailure())
            })
    }

    useEffect(() => {
        getSingleData();
    }, [])

    if (singleHotel.isLoading) {
        return (
            <h1>Loading...</h1>
        )
    }

    return (
        <div>
            <h1>Hotes</h1>
        </div>
    )
}