
import { TitleDescription } from "../TitleDescription";
import { PricingCard } from "./PricingCard";

export const Pricing = () => {


    return (
        <section className="pricing-area ptb-90">
        <div className="container">
            
        <TitleDescription title='OUR PRICING' desc='
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis velit
        dignissimos ex minima atque earum tempora. Cum fugit, eligendi sequi
        doloremque unde'  />
        

            <div className="row price_container" >
                <PricingCard
                 title='Silver Pack'
                 Price='150'
                 clas='2'
                />
                <PricingCard
                 title='Gold Pack'
                 Price='140'
                 clas='1'
                />
                <PricingCard
                 title='Diamond Pack'
                 Price='190'
                 clas='0'
                />
            </div>
        </div>
    </section>
    )
} 