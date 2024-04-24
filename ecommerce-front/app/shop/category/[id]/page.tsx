'use client'

import { useState } from "react";
import { ProductGrid, Title } from "@/components";
import { Category, optionsCategory } from '@/interfaces/product.interface';
import Container from "@/components/shared/container";

interface Props {
  params: {
    id: Category;
  };
}

export default function CategoryPage({ params }: Props) {
  const { id } = params;

  const [selectedCategory, setSelectedCategory] = useState<Category>(id);

  const handleCategoryGender = (category: Category) => {
    setSelectedCategory(category);
  }

  return (
    <>
      <Container>
      <Title title='Elegí' titlePrimary={optionsCategory[id]} />

        <ProductGrid />

      </Container>
    </>
  );
}