import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import axios from "axios";
import "../Components/hotelDetails.css"

export const HotelDetails = () => {

    const [dateStart, setDateStart] = useState("")
    const [dateEnd, setDateEnd] = useState("")
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [showRequiredMessage, setShowRequiredMessage] = useState(false);

    const { id } = useParams();

    const [data, setData] = useState([]);


    // Get Single Hotel Data Sart

    const getSingleData = () => {
        axios.get(`http://localhost:8080/hotellist/${id}`)
            .then((res) => {
                setData(res.data)
            }).catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getSingleData();
    }, [])

    // Get Single Hotel Data End

    // Posting Date Data Start

    const handleSubmit = (e) => {
        e.preventDefault();
        let newVales = {
            dateStart: dateStart,
            dateEnd: dateEnd,
            adults: adults,
            children: children,
            price: price,
            numOfNights: numNights
        }
        console.log(newVales);
        axios.post(`http://localhost:8080/booking`, newVales)
            .then((res) => {
                console.log(res.data);
            }).catch((err) => {
                console.log(err);
            })
    }

    // Posting Date Data End

    const checkRequiredFields = () => {
        if (!dateStart || !dateEnd || adults < 1) {
            setShowRequiredMessage(true);
        } else {
            setShowRequiredMessage(false);
        }
    };

    var price = data.perNight;
    const checkInDate = new Date(dateStart);
    const checkOutDate = new Date(dateEnd);
    const perNightPrice = price;

    console.log(checkInDate - checkOutDate)
    // Calculate the number of nights
    const numNights = Math.round((checkOutDate - checkInDate)/ (1000 * 60 * 60 * 24)) + 1;

    var totalPrice;

    if (data.name === "Single Room" && adults <= 2 && children <= 1) {
        totalPrice = "₹ " + (numNights * perNightPrice)
    } else if (data.name === "Royal Suit" && adults <= 3 && children <= 3) {
        totalPrice = "₹ " + (numNights * perNightPrice)
    } else if (data.name === "Delux Suit" && adults <= 4 && children <= 5) {
        totalPrice = "₹ " + (numNights * perNightPrice)
    } else if (data.name === "Double Room" && adults <= 6 && children <= 6) {
        totalPrice = "₹ " + (numNights * perNightPrice)
    } else {
        totalPrice = data.name + " Can't Go With More Members"
    }

    console.log('Number of nights:', numNights);
    console.log('Total price:', totalPrice);

    return (
        <section>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-8 right">
                        <div style={{ position: "relative" }}>
                            <img src={data.image} alt={data.name} />
                            <div className="cost">
                                <h2>₹ {price}</h2>
                                <p>Per Night</p>
                            </div>
                        </div>

                        <div className="my-4">
                            <div>
                                <img src={data.image_1} alt={data.name} />
                            </div>
                            <div>
                                <img src={data.image_2} alt={data.name} />
                            </div>
                            <div>
                                <img src={data.image_3} alt={data.name} />
                            </div>
                            <div>
                                <img src={data.image_4} alt={data.name} />
                            </div>
                        </div>


                        <div className="my-4">
                            <h2 className="room-details-title mb-4 pb-2">DESCRIPTION OF ROOM</h2>
                            <p>{data.descriptionsingle_1}</p>
                            <p>{data.descriptionsingle_2}</p>
                            <p>{data.descriptionsingle_3}</p>
                            <p>{data.descriptionsingle_4}</p>
                        </div>
                        <div>
                            <h2 className="room-details-title mb-4 pb-2">ROOM FACILITIES</h2>
                            <ul>
                                <li><span className="rightIcon"><i className="fa-solid fa-check"></i></span>{data.name}</li>
                                <li><span className="rightIcon"><i className="fa-solid fa-check"></i></span>{data.roomsize}</li>
                                <li><span className="rightIcon"><i className="fa-solid fa-check"></i></span>{data.perperson}</li>
                                <li><span className="rightIcon"><i className="fa-solid fa-check"></i></span>{data.freeinternet}</li>
                                <li><span className="rightIcon"><i className="fa-solid fa-check"></i></span>{data.breakfastinclide}</li>
                                <li><span className="rightIcon"><i className="fa-solid fa-xmark"></i></span>{data.freewifi}</li>
                                <li><span className="rightIcon"><i className="fa-solid fa-check"></i></span>{data.privatebalcony}</li>
                                <li><span className="rightIcon"><i className="fa-solid fa-check"></i></span>{data.freenewspaper}</li>
                                <li><span className="rightIcon"><i className="fa-solid fa-check"></i></span>{data.fullac}</li>
                                <li><span className="rightIcon"><i className="fa-solid fa-xmark"></i></span>{data.FlatScreenTV}</li>
                                <li><span className="rightIcon"><i className="fa-solid fa-check"></i></span>{data.BeachView}</li>
                                <li><span className="rightIcon"><i className="fa-solid fa-xmark"></i></span>{data.RoomService}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="reservation">
                            <h4 className="room-details-title">YOUR RESERVATION</h4>
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="date"
                                    placeholder="MM/DD/YYYY"
                                    value={dateStart}
                                    onChange={(e) => setDateStart(e.target.value)}
                                    required
                                />
                                <input
                                    type="date"
                                    placeholder="MM/DD/YYYY"
                                    value={dateEnd}
                                    onChange={(e) => setDateEnd(e.target.value)}
                                    required
                                />
                                <select value={adults} onChange={(e) => setAdults(parseInt(e.target.value))} required>
                                    <option>ADULTS</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                                <select value={children} onChange={(e) => setChildren(parseInt(e.target.value))} required>
                                    <option>CHILDREN</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                                {showRequiredMessage && <p>Please fill in all required fields.</p>}
                                <div>
                                    <button className="btn texr-center" type="submit" onClick={checkRequiredFields} data-bs-toggle="modal" data-bs-target="#exampleModal">CHECK AVAILABILITY</button>
                                </div>
                            </form>
                        </div>
                        <div className="contact my-4">
                            <p>If you have any question please don't hesitate to contact us</p>
                            <div className="phoneEmail">
                                <p><i className="fa-solid fa-phone"></i></p>
                                <div>
                                    <p>0123456789</p>
                                    <p>0123456789</p>
                                </div>
                            </div>
                            <div className="phoneEmail">
                                <p><i className="fa-solid fa-envelope"></i></p>
                                <div>
                                    <p>demo@example.com</p>
                                    <p>demo@example.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="popular">
                            <h4 className="room-details-title">POPULAR POSTS</h4>
                            <div className="phoneEmail mt-4">
                                <div>
                                    <img src="https://htmldemo.net/oestin/oestin/img/sidebar/1.jpg" alt="s1" />
                                </div>
                                <div>
                                    <p>POST DEMO TITLE</p>
                                    <p>22 Dec, 2019</p>
                                </div>
                            </div>
                            <div className="phoneEmail mt-3">
                                <div>
                                    <img src="https://htmldemo.net/oestin/oestin/img/sidebar/2.jpg" alt="s2" />
                                </div>
                                <div>
                                    <p>POST DEMO TITLE</p>
                                    <p>10 Feb, 2019</p>
                                </div>
                            </div>
                            <div className="phoneEmail mt-3">
                                <div>
                                    <img src="https://htmldemo.net/oestin/oestin/img/sidebar/3.jpg" alt="s3" />
                                </div>
                                <div>
                                    <p>POST DEMO TITLE</p>
                                    <p>06 Mar, 2019</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*  Modal */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">{data.name}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>Check In Date: {dateStart}</p>
                            <p>Check Out Date: {dateEnd}</p>
                            <p>Adults: {adults}</p>
                            <p>Childrens: {children}</p>
                            <p>Per Night Price: ₹ {price}</p>
                            <p>Number of Nights: {numNights}</p>
                            <p>Total Price: {totalPrice} </p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            {/* <button type="button" className="btn btn-primary">Save changes</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}