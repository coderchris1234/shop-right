import Shoe from "../assets/Shoe.png"
import "./HeroStyle.css"
const Hero =()=> {
    return(
        <div className="Hero_body">
            <div className="Hero_Wrapper">
                <article className="Hero-right">
                    <div className="shoe_description">
                        <p>
                            A lightweight blue running shoe built for both speed and comfort, featuring breathable mesh material, a cushioned midsole for shock absorption, and a durable outsole for excellent traction on every stride
                        </p>
                        <button>Shop Now</button>
                    </div>
                </article>
                <div className="Hero-left">
                    <div className="button"></div>
                    <div className="product_display">
                        <img src={Shoe} alt="Product-Shoe" 
                        width={"100%"}
                        className="product_img"
                        title="Running Shoe"/>
                    </div>
                     <div className="button"></div>
                </div>
            </div>

        </div>
    )
}
export default Hero