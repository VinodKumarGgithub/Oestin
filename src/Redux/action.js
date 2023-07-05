import {
    GET_HOTEL_FAILURE,
    GET_HOTEL_REQUEST,
    GET_HOTEL_SUCCESS
} from "./actionTypes"

export const getHotelRequest = () => {
    return ({ type: GET_HOTEL_REQUEST })
}

export const getHotelSuccess = (payload) => {
    return ({ type: GET_HOTEL_SUCCESS, payload: payload })
}

export const getHotelFailure = () => {
    return ({ type: GET_HOTEL_FAILURE })
} 