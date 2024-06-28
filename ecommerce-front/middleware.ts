export { default } from "next-auth/middleware";

export const config = {
  matcher: [ 
  "/shop/checkout/address", 
  "/shop/checkout",
  "/shop/orders",
  "/shop/orders/:id"],
};

//dashboard = panel de perfil
//shop/checkout/address = formulario de envio de dirección
//shop/checkout = formulario confirmación de envio de pedido.
//shop/orders = panel de ordenes de todos los pedidos realizados.
//shop/orders/:id = panel de ordenes de un pedido especifico.