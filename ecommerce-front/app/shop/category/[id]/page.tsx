'use client'

import { useState } from "react";
import { ProductGrid, Title } from "@/components";
import { Category } from '@/interfaces/category.enum';
import Container from "@/components/shared/container";

interface Props {
  params: {
    id: Category;
  };
}

export default function CategoryPage({ params }: Props) {
  const { id } = params;

  const [selectedCategory, setSelectedCategory] = useState<Category>(id);


  const gender: Record<Category, string> = {
    'fiestas': 'Fiestas',
    'fluor': 'Fluor',
    'luminoso': 'Luminoso',
    'infantiles': 'Infantiles',
    'reposteria': 'Repostería',
    'decoracion': 'Decoración',
    'globos': 'Globos',
    'otros': 'Otros',
  }

  const handleCategoryGender = (category: Category) => {
    setSelectedCategory(category);
  }

  return (
    <>
      <Container>
        <Title title='Elegí' titlePrimary={`${(gender as any)[id]}`} />

        <ProductGrid />

      </Container>
    </>
  );
}