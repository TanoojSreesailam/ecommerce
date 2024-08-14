import React, { useContext } from 'react'
import {ShopContext} from "../Context/ShopContext"
import ProDetail from '../components/ProDetail';
import { useParams } from 'react-router-dom';
import ProDisplay from '../components/ProDisplay';
import RelatedPro from '../components/RelatedPro';


function Products() {
    const {all_product} = useContext(ShopContext);
    const {productId}  = useParams();
    const product = all_product.find((e)=> e.id === Number(productId))
    return (
        <div>
            <ProDetail product = {product}/>
            <ProDisplay product = {product}/>
            <RelatedPro/>
        </div>
    )
}

export default Products
