import { useContext, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { Helmet } from "react-helmet";

// Layouts
import HomeServices from "/src/pages/home/HomeServices";
import { ProductContext } from "/src/context/Products/ProductContext.jsx";

// Icons
import { CiStar } from "react-icons/ci";
import { FaRegStar, FaStar, FaShoppingBag, FaShoppingCart } from "react-icons/fa";

// Actions
import { addToCart, decrement } from "/src/features/cart";


// CSS
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const ProductDetail = () => {
    const [count, setCount] = useState(1)
    const { products } = useContext(ProductContext);
    const { id } = useParams();
    const dispatch = useDispatch();
    const addCart = (product) => {
        dispatch(addToCart(product));
        setCount(count => count + 1);
    }
    const dec = (product) => {
        dispatch(decrement(product))
        count > 1 && setCount(count => count - 1);
    }
    const product = products.find(product => product.id === parseInt(id));

    return (
        product &&
        <>
            <Helmet>
                <title> eTrade | {product.title} </title>
            </Helmet>
            <div className="product-detail-box">
                <div className="container">
                    <div className="product-detail-block">
                        <div className="detail-item">
                            <Swiper
                                spaceBetween={30}
                                pagination={{
                                    el: "#containerForBullets",
                                    type: "bullets",
                                    clickable: true,
                                }}
                                loop={true}
                                navigation={true}
                                modules={[Pagination, Navigation]}
                                className="detail-slide"
                            >

                                <div>
                                    {product.images.map((img, i) => {
                                        return (
                                            <SwiperSlide key={i}>
                                                <div className="product-img">
                                                    <img src={img} alt={product.title} />
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })}
                                </div>
                            </Swiper>
                        </div>
                        <div className="detail-item">

                            <div className="product-detail">
                                <p className="product-title">
                                    {product.title}
                                </p>
                                <div className="prices">
                                    <span>${product.price}</span>
                                    <span
                                        className={product.discountPercentage === 0 ? "none" : ""}> - ${product.price - (product.price * (product.discountPercentage) / 100)}</span>
                                </div>
                                <div className="reviews">
                                    <div className="review-block">
                                        <div className="ratings">
                                            <button className="btn btn-rating">
                                                <FaStar />
                                            </button>
                                            <button className="btn btn-rating">
                                                <FaStar />
                                            </button>
                                            <button className="btn btn-rating">
                                                <FaStar />
                                            </button>
                                            <button className="btn btn-rating">
                                                <FaStar />
                                            </button>
                                            <button className="btn btn-rating">
                                                <FaRegStar />
                                            </button>
                                        </div>
                                        <div className="review-count">
                                            <strong>100+</strong> Review
                                        </div>
                                    </div>
                                </div>
                                <div className="cart-section">
                                    <p className="subhead">Storage: </p>
                                    <ul className="cart-item">
                                        <li>
                                            <NavLink to={`/products/3`}>128 GB</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={`/products/2`}>256 GB</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={`/products/1`}>512 GB</NavLink>
                                        </li>
                                    </ul>
                                </div>
                                <div className="cart-section">
                                    <p className="subhead">Colors: </p>
                                    <div className="colors-section">
                                        <button className="btn color-btn titanium"></button>
                                        <button className="btn color-btn tit-black"></button>
                                        <button
                                            className={"btn color-btn "}></button>
                                        <button className="btn color-btn tit-white"></button>
                                    </div>
                                </div>
                                <div className="cart-section">
                                    <p className="subhead">Quantity: </p>
                                    <ul className="cart-item">
                                        <li>
                                            <button className="btn btn-dec" onClick={() => dec({ id: product.id })}>-</button>
                                        </li>
                                        <li>
                                            <input type="text" className="quantity" value={count} />
                                        </li>
                                        <li>
                                            <button className="btn btn-inc" onClick={() => addCart(product)}>+</button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="buttons">
                                    <button className="btn btn-sm cart-btn"><FaShoppingBag />Buy now</button>
                                    {/* <button className="btn btn-sm btn-blue"
                                        onClick={() => addCart(product)}>
                                        <FaShoppingCart />Add to cart
                                    </button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-specification-block">
                    <div className="container">
                        <p className="uni-head head1">About This Product</p>
                        <div className="product-spes">
                            <div className="tab-btns">
                                <button className="btn tab-btn active">Specification</button>
                                <button className="btn tab-btn">Review</button>
                            </div>
                            <p className="subhead">Key feature</p>
                            <ul className="all-specific">
                                <>
                                    <li className="specif-item">Display: {product.display}</li>
                                    <li className="specif-item">Storage: {product.storage}</li>
                                    <li className="specif-item">Main Camera: {product.main}</li>
                                    <li className="specif-item">Front Camera: {product.front}</li>
                                    <li className="specif-item">RAM: {product.ram}</li>
                                    <li className="specif-item">Battery: {product.battery}</li>
                                </>
                            </ul>
                            <div className="product-reviews">
                                <div className="review-item review-left">
                                    <p className="subhead">Review for this product</p>
                                    <div className="comments-box">
                                        <div className="user-comment">
                                            <div className="user-img">
                                                <img
                                                    src={"../assets/images/users/author-5.png"}
                                                    alt="" />
                                            </div>
                                            <div className="comment-inner">
                                                <div className="user-name">
                                                    <span>Eleanor Pena</span>
                                                    <div className="ratings">
                                                        <button className="btn btn-rating">
                                                            <FaStar />
                                                        </button>
                                                        <button className="btn btn-rating">
                                                            <FaStar />
                                                        </button>
                                                        <button className="btn btn-rating">
                                                            <FaStar />
                                                        </button>
                                                        <button className="btn btn-rating">
                                                            <FaStar />
                                                        </button>
                                                        <button className="btn btn-rating">
                                                            <FaRegStar />
                                                        </button>
                                                    </div>
                                                </div>
                                                <p className="inner">
                                                    “We’ve created a full-stack structure for our working
                                                    workflow processes, were from the funny the century
                                                    initial
                                                    all the made, have spare to negatives. ”
                                                </p>
                                            </div>
                                        </div>
                                        <div className="user-comment">
                                            <div className="user-img">
                                                <img
                                                    src={"../assets/images/users/author-4.png"}
                                                    alt="" />
                                            </div>
                                            <div className="comment-inner">
                                                <div className="user-name">
                                                    <span>Eleanor Pena</span>
                                                    <div className="ratings">
                                                        <button className="btn btn-rating">
                                                            <FaStar />
                                                        </button>
                                                        <button className="btn btn-rating">
                                                            <FaStar />
                                                        </button>
                                                        <button className="btn btn-rating">
                                                            <FaStar />
                                                        </button>
                                                        <button className="btn btn-rating">
                                                            <FaStar />
                                                        </button>
                                                        <button className="btn btn-rating">
                                                            <FaRegStar />
                                                        </button>
                                                    </div>
                                                </div>
                                                <p className="inner">
                                                    “We’ve created a full-stack structure for our working
                                                    workflow processes, were from the funny the century
                                                    initial
                                                    all the made, have spare to negatives. ”
                                                </p>
                                            </div>
                                        </div>
                                        <div className="user-comment">
                                            <div className="user-img">
                                                <img
                                                    src={"../assets/images/users/author-1.png"}
                                                    alt="" />
                                            </div>
                                            <div className="comment-inner">
                                                <div className="user-name">
                                                    <span>Eleanor Pena</span>
                                                    <div className="ratings">
                                                        <button className="btn btn-rating">
                                                            <FaStar />
                                                        </button>
                                                        <button className="btn btn-rating">
                                                            <FaStar />
                                                        </button>
                                                        <button className="btn btn-rating">
                                                            <FaStar />
                                                        </button>
                                                        <button className="btn btn-rating">
                                                            <FaStar />
                                                        </button>
                                                        <button className="btn btn-rating">
                                                            <FaRegStar />
                                                        </button>
                                                    </div>
                                                </div>
                                                <p className="inner">
                                                    “We’ve created a full-stack structure for our working
                                                    workflow processes, were from the funny the century
                                                    initial
                                                    all the made, have spare to negatives. ”
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="review-item review-right">
                                    <p className="subhead">Add a Review</p>
                                    <p className="req-mes">Your email address will not be published.
                                        Required
                                        fields are marked *</p>
                                    <div className="rating-action">
                                        <p>Your Rating<span className="req">*</span></p>
                                        <div className="ratings">
                                            <button className="btn btn-rating">
                                                <CiStar />
                                            </button>
                                            <button className="btn btn-rating">
                                                <CiStar />
                                            </button>
                                            <button className="btn btn-rating">
                                                <CiStar />
                                            </button>
                                            <button className="btn btn-rating">
                                                <CiStar />
                                            </button>
                                            <button className="btn btn-rating">
                                                <CiStar />
                                            </button>
                                        </div>
                                    </div>
                                    <form action="">
                                        <div className="comment-form">
                                            <div className="form-group">
                                                <label className="absolute-item">Other notes
                                                    (optional)</label>
                                                <textarea name="review-message"
                                                    className="form-item form-textarea" cols="30"
                                                    rows="10"
                                                    placeholder="Your comment"></textarea>
                                            </div>
                                            <div className="user-info">
                                                <div className="form-group">
                                                    <label className="absolute-item">
                                                        Name
                                                        <span className="req">*</span>
                                                    </label>
                                                    <input type="text" className="form-item" />
                                                </div>
                                                <div className="form-group">
                                                    <label className="absolute-item">
                                                        Email
                                                        <span className="req">*</span>
                                                    </label>
                                                    <input type="text" className="form-item" />
                                                </div>
                                            </div>
                                            <div className="btn btn-blue">Submit comment</div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <HomeServices />
            </div>
        </>
    )
}
export default ProductDetail;