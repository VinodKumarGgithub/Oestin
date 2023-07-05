import { Link } from "react-router-dom"

export const PricingCard = ({title,Price,clas}) => {
    return (
        <>
        
        <div className="row">
        <div className="col-md-4 col-sm-6">
            <div className={clas==1?"single-pricing best-offer":"single-pricing"}>
                <div className="package-name">
                    <h3>{title}</h3>
                    <h1>
                        <span className="currency">$</span>{Price}
                        <span className="count">/per night</span>
                    </h1>
                </div>
                <div className="package-offer">
                    <span>Flight Ticket</span>
                    <span>Music Concert (30% Off)</span>
                    <span>Restaurant (Lunch)</span>
                    <span className={clas==2?"light":''}>Treatment</span>
                    <span className={clas==1?"light":''}>Face Make</span>
                </div>
                <div className="signup-btn">
                    <Link to="/" className="default-btn">SIGN UP</Link>
                </div>
            </div>
        </div>
        </div>
        </>
    )
} 