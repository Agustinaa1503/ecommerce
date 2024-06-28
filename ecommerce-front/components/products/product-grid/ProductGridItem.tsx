'use client';

import { Product } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

interface Props {
  product: Product;
}

export const ProductGridItem = ({ product }: Props) => {
  const defaultImage = "/img/logo1.webp"; // Imagen predeterminada
  const [displayImage, setDisplayImage] = useState<string>(defaultImage);

  useEffect(() => {

    console.log('Product images:', product.images);
    
    if (Array.isArray(product.images) && product.images.length > 0) {
      setDisplayImage(product.images[0]); // Usa la primera imagen del array
    }
  }, [product.images]);

  console.log('Display image:', displayImage);

  return (
    <>
      <div className="rounded-md overflow-hidden fade-in">
        <Link href={`/shop/product/${product._id}`}>
          <Image
            src={displayImage}
            alt={product.title}
            className="w-full object-cover rounded"
            width={500}
            height={500}
          />
        </Link>
        <div className="p-4 flex flex-col">
          <Link
            className="hover:text-blue-500"
            href={`/shop/product/${product._id}`}
          >
            {product.title}
          </Link>
          <span className="font-bold">${product.price}</span>
        </div>
      </div>
    </>
  );
};









// "use client";

// import { Product } from "@/interfaces";
// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";

// interface Props {
//   product: Product;
// }
// export const ProductGridItem = ({ product }: Props) => {
//   const [displayImage, setDisplayImage] = useState(product.images);

//   return (
//     <>
//       <div className="rounded-md overflow-hidden fade-in">
//         <Link href={`/shop/product/${product._id}`}>
//           <Image
//             src={
//               Array.isArray(displayImage)
//                 ? displayImage[0]
//                 : displayImage || "/img/logo1.webp"
//             }
//             alt={product.title}
//             className="w-ful object-cover rounded"
//             width={500}
//             height={500}
//             onMouseEnter={() => setDisplayImage(product.images)}
//             onMouseLeave={() => setDisplayImage(product.images)}
//           />
//         </Link>
//         <div className="p-4 flex flex-col">
//           <Link
//             className="hover:text-blue-500"
//             href={`/shop/product/${product._id}`}
//           >
//             {product.title}
//           </Link>
//           <span className="font-bold">${product.price}</span>
//         </div>
//       </div>
//     </>
//   );
// };
