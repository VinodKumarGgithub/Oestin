import {
    GET_HOTEL_FAILURE,
    GET_HOTEL_REQUEST,
    GET_HOTEL_SUCCESS,
    POST_HOTEL_FAILURE,
    POST_HOTEL_REQUEST,
    POST_HOTEL_SUCCESS
} from "./actionTypes";

const initState = {
    hotels: [],
    isLoading: false,
    isError: false,
    booking: []
}
export const reducer = (state = initState, { type, payload }) => {

    switch (type) {
        case GET_HOTEL_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case GET_HOTEL_SUCCESS:
            return {
                ...state,
                isLoading: false,
                hotels: payload,
                isError: false
            }
        case GET_HOTEL_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
            }

        case POST_HOTEL_REQUEST:
            return {
                ...state,
                isLoading: true,
            }

        case POST_HOTEL_SUCCESS:
            return {
                ...state,
                isLoading: false,
                booking: payload,
                isError: false
            }

        case POST_HOTEL_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
            }

        default:
            return state;
    }
}