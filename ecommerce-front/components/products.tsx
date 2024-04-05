"use client";

import Container from "@/components/shared/container";
import {Title} from "@/components/ui/title/title";
import Link from "next/link";

const Products = () => {
    return (

        <section id="tienda" className="min-h-screen flex items-center justify-center">
        <Container>
            <div className="flex justify-center mb-40 mt-40">
            <Link href="/shop">
                <Title title="TIENDA" titlePrimary="ONLINE"></Title>
            </Link>
            </div>
        </Container>
        </section>
    );
};

export default Products;
