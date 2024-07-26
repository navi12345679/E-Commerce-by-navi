import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext.jsx';
import Breadcrum from '../Components/Breadcrum/Breadcrum.jsx';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay.jsx';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox.jsx';
import RelatedProduct from '../Components/RelatedProducts/RelatedProduct.jsx';

const Product = () => {
    const {all_products} = useContext(ShopContext);
    const {productId} = useParams(); 
    const product = all_products.find((e) => e.id === Number(productId));
    const product1 = all_products.find((e) => e.id === Number(productId));
    return (
        <div>
           <Breadcrum product={product}/>
           <ProductDisplay product={product1}/>
           <DescriptionBox/>
           <RelatedProduct/>
        </div>
    );
};

export default Product;