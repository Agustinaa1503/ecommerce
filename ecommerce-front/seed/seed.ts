
interface SeedProduct {
    _id: string;
    description: string;
    images: string[];
    inStock: number;
    price: number;
    sizes?: Size[];
    color?: Colors[];
    slug?: string;
    tags?: string[];
    title: string;
    type?: Types;
    gender?: Category;
}

type Category = 'fiestas'|'fluor'|'luminoso'|'infantiles' | 'reposteria' | 'decoracion' | 'globos' | 'otros';
type Size = 'XS'|'S'|'M'|'L'|'XL'|'XXL'|'XXXL';
type Types = 'fiestas'|'fluor'|'luminoso'|'infantiles' | 'reposteria' | 'decoracion' | 'globos' | 'otros';
type Colors = 'blanco'|'negro'|'rojo'|'azul'|'amarillo'|'verde'|'morado'|'gris';

interface SeedData {
    products: SeedProduct[];
}

export const initialData: SeedData = {
    products: [
        {
            description: 'Vestido floral',
            images: [
                '9877040-00-A_0_2000.jpg',
                '9877040-00-A_1.jpg',
            ],
            inStock: 10,
            price: 100,
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
            color: ['blanco','negro','rojo','azul','amarillo','verde','morado','gris'],
            slug: 'vestido',
            tags: ['fiesta'],
            title: 'Vestido floral',
            type: 'fiestas',
            gender: 'fiestas'
        },
        {
            description: 'Vestido floral',
            images: [
                '9877040-00-A_0_2000.jpg',
                '9877040-00-A_1.jpg',
            ],
            inStock: 10,
            price: 100,
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
            color: ['blanco','negro','rojo','azul','amarillo','verde','morado','gris'],
            slug: 'vestido-floral',
            tags: ['fiesta'],
            title: 'Vestido floral',
            type: 'fiestas',
            gender: 'fiestas'
        },
        {
            description: 'Vestido floral',
            images: [
                '9877040-00-A_0_2000.jpg',
                '9877040-00-A_1.jpg',
            ],
            inStock: 10,
            price: 100,
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
            color: ['blanco','negro','rojo','azul','amarillo','verde','morado','gris'],
            slug: 'vestido-floral',
            tags: ['fiesta'],
            title: 'Vestido floral',
            type: 'fiestas',
            gender: 'fiestas'
        },
        {
            description: 'Vestido floral',
            images: [
                '9877040-00-A_0_2000.jpg',
                '9877040-00-A_1.jpg',
            ],
            inStock: 10,
            price: 100,
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
            color: ['blanco','negro','rojo','azul','amarillo','verde','morado','gris'],
            slug: 'vestido-floral',
            tags: ['fiesta'],
            title: 'Vestido floral',
            type: 'fiestas',
            gender: 'fiestas'
        },
        {
            description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
            images: [
                '9877040-00-A_0_2000.jpg',
                '9877040-00-A_1.jpg',
            ],
            inStock: 7,
            price: 75,
            sizes: ['XS','S','M','L','XL','XXL'],
            color: ['blanco','negro','rojo','azul','amarillo','verde','morado','gris'],
            slug: "mens_chill_crew_neck_sweatshirt",
            type: 'fluor',
            tags: ['sweatshirt'],
            title: "Men’s Chill Crew Neck Sweatshirt",
            gender: 'fluor'
        },
        {
            description: "Inspired by our popular home battery, the Tesla Powerwall Tee is made from 100% cotton and features the phrase 'Pure Energy' under our signature logo in the back. Designed for fit, comfort and style, the exclusive tee promotes sustainable energy in any",
            images: [
                '9877040-00-A_0_2000.jpg',
                '9877040-00-A_1.jpg',
            ],
            inStock: 10,
            price: 130,
            sizes: ['XS','S','M','L','XL','XXL'],
            color: ['blanco','negro','rojo','azul','amarillo','verde','morado','gris'],
            slug: "women_powerwall_tee",
            type: 'otros',
            tags: ['shirt'],
            title: "Women’s Powerwall Tee",
            gender: 'otros'
        }
    ]
}