import { titleFont } from "@/config/fonts";
import { FC } from "react";

interface TitleProps {
    title: string;
    titlePrimary: string;
    subtitle?: string;
    className?: string;
}

export const Title: FC<TitleProps> = ({ title, titlePrimary, subtitle, className }) => {
    return (
        <div className={`mt-3 ${className}`}>
            <h1 className={`${titleFont.className} antialiased text-4xl flex flex-col sm:flex-row items-center gap-2 font-semibold ml-6 mt-8 mb-8`}>
                {title}
                <span className="text-primary">{titlePrimary}</span>
            </h1>
            {
                subtitle && (<h3 className="text-xl mb-5">{subtitle}</h3>)
            }
        </div>
    )
};
