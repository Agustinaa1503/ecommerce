import Container from "@/components/shared/container";
import {Title} from '@/components/ui/title/title';
import Category from "@/components/ui/category";

const Categorys = () => {
    return (
        <section id="categorys" className="min-h-screen flex items-center justify-center">
            <Container>
                <Title title="Elige tu" titlePrimary="Categoria"/>
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                    <Category title="Ventas" category="Minoristas"/>
                    <Category title="Ventas" category="Mayoristas"/>
                </div>
            </Container>
        </section>
    )
}

export default Categorys;