import { useContext } from "react";
import { useDispatch } from "react-redux";

// Components
import { PopularCard } from "/src/components/ProductCards.jsx";
// Context
import { ProductContext } from "/src/context/Products/ProductContext.jsx";

// Icons
import { FaStar } from "react-icons/fa";

// Actions
import { addToCart } from "/src/features/cart";
import { addToWishlist } from "/src/features/wishlist";

// CSS
import "./css/PopularProducts.css";

const PopularProducts = () => {
    const { products } = useContext(ProductContext);
    const dispatch = useDispatch();
    const addCart = (product) => {
        dispatch(addToCart(product));
    }
    const addWish = (product) => {
        dispatch(addToWishlist(product));
    }
    return (
        <section className="popular-products">
            <div className="container">
                <div className="head-box products-head centered-head" data-aos="fade-down">
                    <p className="best-deal">
                        <span>
                            <FaStar />
                        </span>
                        most sold
                    </p>
                    <p className="uni-head head1">
                        Most Sold in a eTrade Store
                    </p>
                </div>
                <div className="popular-products-block">
                    {products.map((product, index) => {
                        return (
                            <PopularCard key={index} product={product} addWish={addWish} addCart={addCart} />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
export default PopularProducts;