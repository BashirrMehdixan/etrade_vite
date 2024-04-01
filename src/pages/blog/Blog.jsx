import { useContext } from "react";
import { PostsContext } from "/src/context/Posts/PostsContext";
import { BlogGridCard, LatestBlogCard } from "/src/components/BlogCards";
import Breadcrumb from "/src/layouts/Breadcrumb";
import {RecentViewedCard} from "/src/components/ProductCards.jsx";
import {ProductContext} from "/src/context/Products/ProductContext.jsx";

const Blog = () => {
    const { posts } = useContext(PostsContext);
    const {products} = useContext(ProductContext)
    return (
        <>
            <section>
                <Breadcrumb />
                <div className="container">
                    <div className="blog-box">
                        <div className="left-side">
                            {posts.length && posts.map((post, index) => <BlogGridCard key={index} {...post} />)}
                        </div>
                        <div className="right-side">
                            <div className="right-item">
                                <h4 className="auth-name">
                                    Latest posts
                                </h4>
                                {posts.map((post, index) => index < 4 && <LatestBlogCard key={index} {...post} />)}
                            </div>
                            <div className="right-item">
                                <h4 className="auth-name">
                                    Recent Viewed Products
                                </h4>
                                {products.map((product, index) => index < 4 &&
                                    <RecentViewedCard key={index} {...product} />)}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog;