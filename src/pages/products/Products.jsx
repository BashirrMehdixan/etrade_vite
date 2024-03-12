import {useContext, useState} from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Helmet } from "react-helmet";

// Layouts
import Breadcrumb from "../../layouts/Breadcrumb";

// Actions
import { addToWishlist } from "../../features/wishlist";
import { addToCart } from "../../features/cart";

// CSS
import "./css/Products.css";
import ProductCard from "../../components/ProductCard.jsx";
import {ProductContext} from "../../context/ProductContext.jsx";

const Smartphones = () => {
    const {products} = useContext(ProductContext);
    console.log(products)
    const { id } = useParams();
    const [openCategories, setOpenCategories] = useState({});
    const dispatch = useDispatch();
    const catSlide = (category) => {
        setOpenCategories(prevState => ({
            ...prevState,
            [category]: !prevState[category]
        }));
    };

    const uniqueStorages = Array.from(new Set(products.map(product => product.storage)));
    const uniqueModels = Array.from(new Set(products.map(product => product.brand)));
    const uniqueRams = Array.from(new Set(products.map(product => product.ram)));
    const uniqueColors = Array.from(new Set(products.map(product => product.colors)));
    const addWish = (product) => {
        dispatch(addToWishlist(product))
    }
    const addCart = (product) => {
        dispatch(addToCart(product));
    }
    return (
        <>
            <Helmet>
                <title>All Products | eTrade</title>
            </Helmet>
            <Breadcrumb products={products} />
            <section className="products-section">
                <div className="container">
                    <div className="products-block">
                        <div className="products-left products-item">
                            <div className="product-category">
                                <div className={`category-title ${openCategories['Model'] ? 'active' : ''}`}
                                     onClick={() => catSlide('Model')}>
                                    <span>Model</span>
                                </div>
                                <ul className={`category-list ${openCategories['Model'] ? 'open' : ''}`}>
                                    {uniqueModels.map((model, index) => (
                                        <li key={index}>
                                            <label className="custom-radio">
                                                <input type="radio" name="brand" />
                                                <span className="checkmark"></span>
                                                <span className="cat-name">{model}</span>
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="product-category">
                                <div className={`category-title ${openCategories['Storage'] ? 'active' : ''}`}
                                     onClick={() => catSlide('Storage')}>
                                    <span>Storage</span>
                                </div>
                                <ul className={`category-list ${openCategories['Storage'] ? 'open' : ''}`}>
                                    {uniqueStorages.map((storage, index) => (
                                        <li key={index}>
                                            <label className="custom-radio">
                                                <input type="radio" name="storage" />
                                                <span className="checkmark"></span>
                                                <span className="cat-name">{storage}</span>
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="product-category">
                                <div className={`category-title ${openCategories['RAM'] ? 'active' : ''}`}
                                     onClick={() => catSlide('RAM')}>
                                    <span>RAM</span>
                                </div>
                                <ul className={`category-list ${openCategories['RAM'] ? 'open' : ''}`}>
                                    {uniqueRams.map((ram, index) => (
                                        <li key={index}>
                                            <label className="custom-radio">
                                                <input type="radio" name="ram" />
                                                <span className="checkmark"></span>
                                                <span className="cat-name">{ram}</span>
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="product-category">
                                <div className={`category-title ${openCategories['Colors'] ? 'active' : ''}`}
                                     onClick={() => catSlide('Colors')}>
                                    <span>Colors</span>
                                </div>
                                <ul className={`category-list ${openCategories['Colors'] ? 'open' : ''}`}>
                                    {uniqueColors.map((color, index) => (
                                        <li key={index}>
                                            <label className="custom-radio">
                                                <input type="radio" name="color" />
                                                <span className="checkmark"></span>
                                                <span className="cat-name">{color}</span>
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <button className="btn btn-blue btn-reset">All reset</button>
                        </div>
                        <div className="products-right products-item">
                            <div className="sort-box">
                                <p className="showing">
                                    Showing 1-12 of {products.length} results
                                </p>
                                <div className="filter-box">
                                    <select name="" id="" className="product-filter">
                                        <option value="latest">Short by Latest</option>
                                        <option value="oldest">Short by Oldest</option>
                                        <option value="name">Short by Name</option>
                                        <option value="price">Short by Price</option>
                                    </select>
                                </div>
                            </div>
                            <div className="all-products">
                                {products.map((product, index) => (
                                    <ProductCard key={index} product={product} addWish={addWish} addCart={addCart} />
                                ))}

                            </div>
                            <div className="btn-more">
                                <Link to="/products" className="btn btn-more">Load more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Smartphones;