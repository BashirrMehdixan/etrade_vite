import {useContext} from "react";
import {PostsContext} from "../../context/Posts/PostsContext";
import {BlogGridCard, LatestBlogCard} from "../../components/BlogCards";
import Breadcrumb from "../../layouts/Breadcrumb";

const Blog = () => {
    const {posts} = useContext(PostsContext);
    return (
        <>
            <section>
                <Breadcrumb/>
                <div className="container">
                    <div className="blog-box">
                        <div className="left-side">
                            {posts.length && posts.map((post, index) => <BlogGridCard key={index} post={post}/>)}
                        </div>
                        <div className="right-side">
                            <div className="right-item">
                                <h4 className="auth-name">
                                    Latest posts
                                </h4>
                                {posts.map((post, index) => index < 4 && <LatestBlogCard key={index} post={post}/>)}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog;