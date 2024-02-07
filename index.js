import ProductMannager from "./productManager.js";

let cambios = {
  rutaDeImagen: "esta si",
  precio: 370,
};
async function pruebas() {
  const manejadorDeProducto = new ProductMannager("./productos.json");
  await manejadorDeProducto.getProductos();
  await manejadorDeProducto.agregarProductos(
    "Porducto Prueba 50",
    "Esto es un producto prueba",
    300,
    "sin ruta",
    "Codigo1234567",
    50
  );
  await manejadorDeProducto.agregarProductos(
    "pantalon",
    "Esto es un producto prueba",
    200,
    "sin ruta",
    "Codigo12345",
    50
  );

  await manejadorDeProducto.agregarProductos(
    "franela",
    "Esto es un producto prueba",
    200,
    "sin ruta",
    "Codigo123456",
    50
  );

  console.log(manejadorDeProducto.getProductoById(2));
  //manejadorDeProducto.deleteProduct(5);
  //manejadorDeProducto.deleteProduct(6);
  await manejadorDeProducto.agregarProductos(
    "remera",
    "Esto es un producto prueba",
    300,
    "sin ruta",
    "Codigo12345678",
    50
  );

  await manejadorDeProducto.agregarProductos(
    "pantys",
    "Esto es un producto prueba",
    300,
    "sin ruta",
    "Codigo123456789",
    50
  );
}

pruebas();
