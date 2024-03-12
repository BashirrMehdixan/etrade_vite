import {createContext, useEffect, useState} from "react";

export const ProductContext = createContext();

const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState([]);
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.products))

    }, []);
    if (products.length > 0) {
        products.forEach(product => {
            if (!category.includes(product.category)) {
                category.push(product.category)
                return setCategory(category)
            }
        })
        console.log(category)
    }
    return (
        <ProductContext.Provider value={{products, setProducts}}>
            {children}
        </ProductContext.Provider>
    )
}
export default ProductProvider;