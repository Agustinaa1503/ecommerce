'use client'

import { ProductGrid, Title } from "@/components";
// import { initialData } from "@/seed/seed";
import Container from "@/components/shared/container";

// const products = initialData.products;

export default function ShopPage() {

  return (
    <Container>
    <div className="container">
      <Title 
        title="Tienda" 
        titlePrimary="Online" />

      <ProductGrid />
    </div>
    </Container>
  );
}

