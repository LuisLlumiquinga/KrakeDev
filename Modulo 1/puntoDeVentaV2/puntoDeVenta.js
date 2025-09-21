calcularValorTotal = function () {
  //variables para recuperar los valores de las cajas de texto
  let nombreProducto;
  let precioProducto; // SE UTILIZA PARA RECUPERAR EL PRECIO COMO FLOAT
  let cantidad; // SE UTILIZA PARA RECUPERAR LA CANTIDAD COMO INT
  let porcentajeDescuento;

  //variables para almacenar los retornos de las funciones
  let valorSubtotal;
  let valorDescuento;
  let valorIVA;
  let valorTotal;

  //1. Recuperar el nombre del producto como String
  nombreProducto = recuperarTexto("txtProducto");

  //2. Recuperar el precio como float
  precioProducto = recuperarFloat("txtPrecio");

  //3. Recuperar cantidad como int
  cantidad = recuperarInt("txtCantidad");

  if (
    esProductoValido(nombreProducto, "lblError1") &
    esPrecioValido(precioProducto, "lblError3") &
    esCantidadValida(cantidad, "lblError2")
  ) {
    //4. Recuperar el porcentaje de descuento como int
    // porcentajeDescuento=recuperarInt("txtPorcentajeDescuento");

    //5. Invocar a calcularSubtotal y el retorno guardar en la variable valorSubtotal
    // Tomar en cuenta el orden de como pasa los parametos de la funcion y colocar bien
    // los parametros cuando invoca la funcion.
    valorSubtotal = calcularSubtotal(precioProducto, cantidad);

    //5. Mostrar valorSubtotal en el componente lblSubtotal
    // Utilizar mostrarTexto
    /*
        Caso de prueba: 
            - cantidad: 10
            - precioProducto: 5.4  
            Subtotal esperado: 54
        Si el caso de prueba es exitoso, hacer un commit
     */
    mostrarTexto("lblSubtotal", valorSubtotal);

    //6. Invocar a calcularValorDescuento y lo que devuelve guardar en la variable valorDescuento
    valorDescuento = calcularDescuentoPorVolumen(valorSubtotal, cantidad);

    //7. Mostrar el resultado en el componente lblDescuento
    /*
        Caso de prueba: 
            - cantidad: 10 
            - precioProducto: 5.4  
            - descuento: 10
            - Descuento esperado: 5.4
        Si el caso de prueba es exitoso, hacer un commit
     */
    mostrarTexto("lblDescuento", valorDescuento);

    //8. Invocar a calcularIVA y lo que devuelve guardar en la variable valorIVA
    // El IVA debe calcularse sobre el valor del subtotal menos el descuento
    valorIVA = calcularIVA(valorSubtotal - valorDescuento);

    //9. Mostrar el resultado en el componente lblValorIVA
    /*
            Caso de prueba: 
                - cantidad: 10 
                - precioProducto: 5.4  
                - descuento: 10

                    - valorSubtotal: 54
                    - descuento:5.4
                    - valorSubtotal 
                    - descuento: 48.6

                IVA esperado: 5.832

            Si el caso de prueba es exitoso, hacer un commit
        */
    mostrarTexto("lblValorIVA", valorIVA);

    //10. Invocar a calcularTotal y lo que devuelve guardar en la variable valorTotal
    valorTotal = calcularTotal(valorSubtotal, valorDescuento, valorIVA);

    //11. Mostrar el resultado en el componente lblTotal
    /*
        Caso de prueba: 
            - cantidad: 10
            - precioProducto: 5.4 
            - descuento: 10

                --valorSubtotal: 5.4
                --descuento: 5.4
                --IVA: 5.832

                Total esperado: 54.432

                Si el caso de prueba es exitoso, hacer un commit
       */
    mostrarTexto("lblTotal", valorTotal);

    //12. Mostrar un resumen en el componente lblResumen, si no existe debe agregarlo
    /*
        Ejemplo: 
            Valor a pagar por 20 cerveza corona con 10% de descuento: USD 48.75
        Si funciona, hacer un commit
    */
    mostrarTexto(
      "lblResumen",
      "Valor a pagar por " +
        cantidad +
        " " +
        nombreProducto +
        " con " +
        porcentajeDescuento +
        "% de descuento: USD " +
        valorTotal
    );
  } else {
    mostrarTexto("lblSubtotal", "0.0");
    mostrarTexto("lblDescuento", "0.0");
    mostrarTexto("lblValorIVA", "0.0");
    mostrarTexto("lblTotal", "0.0");
  }
};
limpiar = function () {
  /*
        Dejar todas las cajas de texto con el valor cadena vacía, 0 ó 0.0 según el tipo de dato
        Dejar todos los textos de los montos con el valor 0.0
        Si funciona, hacer un commit
     */
  mostrarTextoEnCaja("txtProducto", "");
  mostrarTextoEnCaja("txtCantidad", "");
  mostrarTextoEnCaja("txtPrecio", "");
  mostrarTextoEnCaja("txtPorcentajeDescuento", "");

  mostrarTexto("lblSubtotal", "0.0");
  mostrarTexto("lblDescuento", "0.0");
  mostrarTexto("lblValorIVA", "0.0");
  mostrarTexto("lblTotal", "0.0");
  mostrarTexto("lblResumen", "");
};
/* SI TODO FUNCIONA, HACER UN PUSH */

esProductoValido = function (producto, idComponenteError) {
  let hayErrores = false;

  if (producto.length < 0 || producto.length > 10) {
    mostrarTexto(
      idComponenteError,
      "Nombre no puede tener mas de 10 caracteres"
    );
    hayErrores = true;
  }

  if (producto == "" || producto == null || producto == undefined) {
    mostrarTexto(idComponenteError, "CAMPO OBLIGATORIO");
    hayErrores = true;
  }

  if (hayErrores == false) {
    mostrarTexto(idComponenteError, "");
  }

  return !hayErrores;
};

esCantidadValida = function (cantidad, idComponenteError) {
  let hayErrores = false;

  if (cantidad < 0 || cantidad > 100) {
    mostrarTexto(idComponenteError, "La cantidad debe ser entre 0 y 100");
    hayErrores = true;
  }

  if (isNaN(cantidad)) {
    mostrarTexto(idComponenteError, "CAMPO OBLIGATORIO");
    hayErrores = true;
  }

  if (hayErrores == false) {
    mostrarTexto(idComponenteError, "");
  }

  return !hayErrores;
};

esPrecioValido = function (precio, idComponenteError) {
  let hayErrores = false;

  if (precio < 0 || precio > 50) {
    mostrarTexto(idComponenteError, "El precio debe ser entre 0 y 50");
    hayErrores = true;
  }

  if (isNaN(precio)) {
    mostrarTexto(idComponenteError, "CAMPO OBLIGATORIO");
    hayErrores = true;
  }

  if (hayErrores == false) {
    mostrarTexto(idComponenteError, "");
  }

  return !hayErrores;
};
