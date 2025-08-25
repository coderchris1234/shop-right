import './ProductListStyle.css'
import Shoe from "../assets/Shoe.png"
const Product =({product})=>{
    return(
        // <div className="product-container">
        //     <div className='product-image-container'>
        //         <img src={product.image} alt="" width={'100px'} height={'100px'} />
        //     </div>
        //     <div>
        //         <p>{product.title}</p>
        //     </div>
        // </div>
   
            <div className='wrapper1'>
              <img src={product.image} alt="" title={product.title} />
              <span>{product.brand}</span>
                <p>{product.title}</p>
                <p>{product.model}</p>
                <span className='price'>NGN{product.price}</span>
                <button>Buy Now</button>
            </div>
    )
}
export default Product;