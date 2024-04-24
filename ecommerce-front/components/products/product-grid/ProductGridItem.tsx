'use client'

import { Product } from '@/interfaces';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface Props {
    product: Product;
}
export const ProductGridItem = ({ product }: Props) => {

    const [displayImage, setDisplayImage] = useState(product.images);


  return (
    <>
    <div className='rounded-md overflow-hidden fade-in'>
        <Link href={`/shop/product/${product._id}`}>
            <Image
                src={displayImage?.includes('image1') ? '/products/9877040-00-A_1.jpg' : '/products/9877040-00-A_0_2000.jpg'}
                 // src={`/products/9877040-00-A_1.jpg`}
                // src={`/products/${product.images}`}
                alt={product.title}
                className='w-ful object-cover rounded' 
                width={500} 
                height={500}
                onMouseEnter={() => setDisplayImage(product.images)}
                onMouseLeave={() => setDisplayImage(product.images)}
                />
        </Link>
        <div className='p-4 flex flex-col'>
            <Link
            className='hover:text-blue-500'
                href={`/shop/product/${product._id}`}>
                {product.title}
            </Link>
            <span className='font-bold'>${product.price}</span>
        </div>
    </div>
    </>
  )
}

