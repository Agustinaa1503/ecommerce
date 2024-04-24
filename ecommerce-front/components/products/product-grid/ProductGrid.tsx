'use client';

import {useState, useEffect} from 'react';
import {ProductGridItem} from './ProductGridItem';
import {getProductsRequest} from '@/app/api/products';
import {Product} from '@/interfaces';

export const ProductGrid = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getProductsRequest();
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      }
    }
    fetchProducts();
}, []);

return (
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10">
    {products.map((product) => (
      <ProductGridItem
        key={product._id}
        product={product}
      />
    ))}
  </div>

);

};
