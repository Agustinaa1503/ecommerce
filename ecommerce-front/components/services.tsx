import {Title} from "@/components/ui/title/title";
import Container from '@/components/shared/container';
import Service from '@/components/ui/service';

const Services = () => {
    return (
        <section id="services" className="min-h-screen flex items-center justify-center">
            <Container>
                <Title title="Nuestros" titlePrimary="Servicios" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
                    <Service image="/icons/icon1.webp"  title="FIESTAS" description="¡Celebra tus eventos con estilo y diversión, con nuestros productos para fiestas!"/>
                    <Service image="/icons/icon2.webp"  title="FIESTAS INFANTILES / LÍNEAS" description="Agrega un toque de magia a tu evento, ¡La diversión está garantizada para todas las edades!"/>
                    <Service image="/icons/icon3.webp"  title="COTILLÓN LUMINOSO" description="Enciende la fiesta, brilla con estilo, donde la diversión se ilumina."/>
                    <Service image="/icons/icon4.webp"  title="FLÚOR" description="¡Destaca en la oscuridad, tus noches son de fiesta con colores vibrantes y diversión sin límites!"/>
                    <Service image="/icons/icon5.webp"  title="REPOSTERÍA" description="Endulza y elabora tus momentos más especiales. ¡Encuentra todo lo que necesitas para tus fiestas!"/>
                    <Service image="/icons/icon6.webp"  title="EVENTOS Y MÁS" description="Transformando sueños en momentos inolvidables. Celebra siempre de la mejor manera."/>
                </div>
            </Container>
            
        </section>
    )
}

export default Services