import React from 'react'
import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';

const Products = () => {
    const products = useSelector((state) => state.products.products);
    return (
        <div className='px-4 py-6'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {
                products.map((product,index)=>{
                    return <ProductCard key={index} product={product}/>
                })
            }
        </div>
        </div>
    )
}

export default Products
