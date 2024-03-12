import {createContext, useEffect, useState} from "react";

export const ProductContext = createContext();

const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [categories, setCategory] = useState([]);
    const [brands, setBrands] = useState([]);
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.products))

    }, []);
    if (products.length > 0) {
        products.forEach(product => {
            if (!categories.includes(product.category)) {
                categories.push(product.category)
                setCategory(categories)
            }
            if(!brands.includes(product.brand)) {
                brands.push(product.brand);
                setBrands(brands);
            }
        })
        console.log(products)
    }
    return (
        <ProductContext.Provider value={{products, setProducts, categories, brands}}>
            {children}
        </ProductContext.Provider>
    )
}
export default ProductProvider;