import ButtonPrimary from "@/components/ui/buttons/button-primary"
import { FC } from "react";

interface CategoryProps {
    title: string;
    category: string;
}
const Category: FC<CategoryProps> = ({ title, category}) => {
    return (
        <div className="w-full mx-8 bg-gray-light/30 p-8 rounded-lg flex flex-col items-center gap-y-10 relative border-2 border-primary">
            <h5 className="absolute bg-red-400 text-white py-2 px-4 rounded-lg -top-4 left-1/2 -translate-x-1/2">¡Tú Elección!</h5>
            <h2 className="text-3xl text-white font-semibold">{title}</h2>
            <h1 className="text-5xl text-white font-semibold">{category}</h1>
            <ButtonPrimary type="button" text="Ingresar"
                className="border-2 border-primary bg-transparent hover:text-red-400 w-full"/>
        </div>
    )
}

export default Category