import {
    GET_HOTEL_FAILURE,
    GET_HOTEL_REQUEST,
    GET_HOTEL_SUCCESS,
    POST_HOTEL_FAILURE,
    POST_HOTEL_REQUEST,
    POST_HOTEL_SUCCESS
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

export const postHotelRequest = () => {
    return ({type: POST_HOTEL_REQUEST})
}

export const postHotelSuccess = (payload) => {
    return ({ type: POST_HOTEL_SUCCESS, payload: payload })
}

export const postHotelFailure = () => {
    return ({ type: POST_HOTEL_FAILURE })
} 