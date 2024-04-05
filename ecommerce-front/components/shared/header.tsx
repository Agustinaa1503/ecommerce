'use client';

import { useState } from "react";
import  Container  from "@/components/shared/container";
import Logo from "@/components/shared/logo";
import MainMenu from "@/components/ui/top-menu/main-menu";
import { RiMenu3Line } from "react-icons/ri";
import MenuMobile from "@/components/ui/top-menu/menu-mobile";




const Header = () => {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            <header className="fixed left-0 top-0 w-full p-5 z-40">
                <Container className="flex items-center justify-between">
                    <section>
                        <Logo />
                    </section>
                    <section className="hidden lg:block">
                        <MainMenu />
                    </section>
                    <section className="lg:hidden">
                        <button 
                            type="button" onClick={() => setShowMenu(true)} className="text-white">
                            <RiMenu3Line size={24}/>
                        </button>
                    </section>
                </Container>
            </header>
            <MenuMobile isOpen={showMenu} onClose={() => setShowMenu(false)} />
        </>
    )
}

export default Header
