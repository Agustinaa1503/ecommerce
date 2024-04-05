import MainMenu from "@/components/ui/top-menu/main-menu";
import { cn } from "@/app/libs/utils";
import { FC } from "react";

interface MenuMobileProps {
    isOpen: boolean;
    onClose: () => void;
}
const MenuMobile: FC<MenuMobileProps> = ({ isOpen, onClose }) => {
    return (
    <>
        <div
            className={cn(
            "fixed left-0 top-0 w-[80%] sm:w-[40%] h-full z-50 bg-black flex items-center justify-center transition-all duration-300 ease-in-out",
            !isOpen ? "-left-full" : "left-0"
            )}>
            <MainMenu />
        </div>
        <div
            onClick={onClose}
            className={cn(
            'fixed left-0 top-0 w-full h-full z-40 bg-black/30',
            !isOpen ? 'hidden' : 'block')}>

        </div>
    </>
    );
};

export default MenuMobile;
