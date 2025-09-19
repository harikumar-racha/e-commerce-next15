'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {Category, productsList, Product, categories} from '@/app/data/products';

const ProductDetails = (props: {params: Promise<{category: string, productId: string }> }) => {

    const [product, setProduct] = useState<Product | null>(null);
    const [category, setCategory] = useState<Category | null>(null);
    const [quantity, setQuantity] = useState<number>(1);

    const incrementQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const decrementQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity - 1);
    };

    useEffect(() => {
        const getProductDetails = async () => {
            const resolvedParams = await props.params;
            const { productId } = resolvedParams;

            const requiredProduct = productsList.find((product) => {
                return productId.toLowerCase() === product.id;
            });
            setProduct(requiredProduct || null);
        };

        const getCategoryDetails = async () => {
            const resolvedParams = await props.params;
            const { category } = resolvedParams;

            const requiredCategory = categories.find((cat) => {
                return category.toLowerCase() === cat.slug;
            });
            setCategory(requiredCategory || null);
        };

        getProductDetails();
        getCategoryDetails();
    }, [props.params]);

    let categoryColor = category ? category.color : '#ccc';

    return (
        <div className='max-w-7xl mx-auto px-4 py-12'>
            <div className='flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-lg'>
                <div className='md:w-1/2 bg-gray-50 p-8 flex items-center justify-center relative'>
                    <div className='relative w-full h-[300px] md:h-[400px]'>
                        <Image src={product ? product.image : '/images/placeholder.png'} alt={product ? product.name : 'product name'} fill priority sizes='(max-width: 768px) 100vw, 50vw' className='object-contain' />
                    </div>
                </div>
                <div className='md:w-1/2 p-8 md:p-12 space-y-5'>
                    <div>
                        <h1 className='text-3xl font-bold text-[#003d5b] mb-2'>{product ? product.name : null}</h1>
                        <p className='text-xl font-semibold mb-4' style={{color: categoryColor}}>${product ? product.price : null}</p>
                        <p className='text-[#30638e] leading-relaxed'>{product ? product.description : null}</p>
                    </div>
                    <div className='pt-6 border-t border-gray-100'>
                        <div className='mb-6'>
                            <label className='block text-[#003d5b] font-medium mb-2'>Quantity</label>
                            <div className='flex items-center'>
                                <button className='size-10 rounded-l-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer' onClick={decrementQuantity} disabled={quantity === 1}>
                                    <i className='bx bx-minus text-gray-600 text-lg'></i>
                                </button>
                                <input type='text' value={quantity} readOnly className='w-14 h-10 border-t border-b border-gray-300 text-center text-[#003d5b] font-medium outline-none' />
                                <button className='size-10 rounded-r-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer' onClick={incrementQuantity}>
                                    <i className='bx bx-plus text-gray-600 text-lg'></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col sm:flex-row gap-4'>
                        <button className='flex-1 px-8 py-3 rounded-full flex items-center justify-center font-medium text-white cursor-pointer' style={{backgroundColor: categoryColor}}>
                            <i className='bx bx-cart mr-2 text-2xl'></i>Add to cart
                        </button>
                        <Link href='/cart' className='flex-1 px-8 py-3 bg-gray-100 hover:bg-gray-200 text-[003d5b] rounded-full flex items-center justify-center font-medium transition-colors'>Go to Cart</Link>
                    </div>
                </div>
            </div>

            {/* back navigation */}
            <div className='mt-12 pt-6 border-t border-gray-200'>
                <Link href={`/products/${category?.slug}`} className='inline-flex items-center text-[#00798c] hover:text-[#003d5b] transition-colors'>
                    <i className='bx bx-left-arrow-alt mr-2 text-xl'></i> Back to Categories Page
                </Link>
            </div>
        </div>
    )
}

export default ProductDetails;