'use client';

import { useState, useEffect } from 'react';
import { ProductGridItem } from './ProductGridItem';
import { getProductsRequest } from '@/app/api/products';
import { Product } from '@/interfaces';

export const ProductGrid = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getProductsRequest();
        const contentType = res.headers.get('Content-Type');
        
        if (!res.ok) {
          // Si la respuesta no es OK, lanza un error con el contenido recibido
          const text = await res.text();
          console.error('Error al obtener los productos:', text);
          setError('Error al obtener los productos');
          return;
        }

        if (contentType && contentType.includes('application/json')) {
          const data = await res.json();
          console.log('Productos obtenidos:', data); // <-- Verifica la estructura de los datos
          setProducts(data);
        } else {
          const text = await res.text();
          console.error('Respuesta no JSON:', text);
          setError('Respuesta no válida del servidor');
        }
      } catch (error) {
        console.error('Error al obtener los productos:', error);
        setError('Error al obtener los productos');
      }
    };
    fetchProducts();
  }, []);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10">
      {products.map((product) => (
        <ProductGridItem key={product._id} product={product} />
      ))}
    </div>
  );
};



// 'use client';

// import { useState, useEffect } from 'react';
// import { ProductGridItem } from './ProductGridItem';
// import { getProductsRequest } from '@/app/api/products';
// import { Product } from '@/interfaces';

// export const ProductGrid = () => {
//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await getProductsRequest();
//         if (!res.ok) {
//           throw new Error('Error al obtener los productos');
//         }
//         const data = await res.json();
//         console.log('Productos obtenidos:', data); // <-- Verifica la estructura de los datos
//         setProducts(data);
//       } catch (error) {
//         console.error('Error al obtener los productos:', error);
//       }
//     };
//     fetchProducts();
//   }, []);

//   return (
//     <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10">
//       {products.map((product) => (
//         <ProductGridItem key={product._id} product={product} />
//       ))}
//     </div>
//   );
// };
