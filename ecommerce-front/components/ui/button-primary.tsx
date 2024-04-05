import { cn } from '@/app/libs/utils';
import { FC } from 'react';
interface ButtonPrimaryProps {
    type: "button" | "submit";
    text: string;
    className?: string;

}
const ButtonPrimary: FC<ButtonPrimaryProps> = ({type, text, className}) => {
    return (
        <button
            type={type}
            className={cn("py-2 px-4 bg-primary text-white rounded-lg border-2 border-transparent hover:bg-transparent hover:border-primary hover:text-primary transition-colors duration-300", className)}
            >
            {text}
        </button>
    )
}

export default ButtonPrimary;