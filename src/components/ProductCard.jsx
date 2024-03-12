import {Link} from "react-router-dom";
import {FaStar} from "react-icons/fa6";
import {FaRegEye, FaRegHeart} from "react-icons/fa";

const ProductCard = ({product, addCart, addWish}) => {
    return (
        <>
            <div className="product-item hover-product" data-aos="flip-up">
                <Link to={`products/${product.id}`} className="product-img">
                    <img src={product.thumbnail} alt={product.title}/>
                </Link>
                <p className={product.discountPercentage === 0 ? "none" : "discount"}>{product.discountPercentage}%
                    Off</p>
                <div className="product-info">
                    <ul className="product-rate">
                        <li className="rate-item">
                            <FaStar/>
                        </li>
                        <li className="rate-item">
                            <FaStar/>
                        </li>
                        <li className="rate-item">
                            <FaStar/>
                        </li>
                        <li className="rate-item">
                            <FaStar/>
                        </li>
                        <li className="rate-item">
                            <FaStar/>
                        </li>
                    </ul>
                    <Link to={`/products/${product.id}`} className="product-name">
                        {product.title}
                    </Link>
                    <div className="product-prices">
                        <p className={product.discountPercentage === 0 ? "none" : "price sale-price"}>
                            ${product.price - (product.price * (product.discountPercentage) / 100)}
                        </p>
                        <p className={product.discountPercentage === 0 ? "price" : "price product-price"}>
                            ${product.price}
                        </p>
                    </div>
                </div>
                <div className="cart-action">
                    <button className="btn action-btn look-btn">
                        <FaRegEye/>
                    </button>
                    <button className="btn cart-btn" onClick={() => addCart(product)}>
                        Add to Cart
                    </button>
                    <button className="btn action-btn wish-btn"
                            onClick={() => addWish(product)}>
                        <FaRegHeart/>
                    </button>
                </div>
            </div>
        </>
    )
}

export default ProductCard