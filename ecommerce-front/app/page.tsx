import Inicio from "@/components/inicio";
import Services from "@/components/services";
import Categorys from "@/components/categorys";
import Products from "@/components/products";


export default function Page() {
  return (
    <div>
      <Inicio />
      <Services />
      {/* <Categorys /> */}
      <Products />
    </div>
    
  );
}
