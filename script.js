/* ==============================
   CALCULAR TOTAL
============================== */

function calcularTotal() {

    const productos =
        document.querySelectorAll(".cantidad");

    const resumen =
        document.getElementById("resumen-productos");

    const totalElemento =
        document.getElementById("total");


    let total = 0;

    let hayProductos = false;

    let contenido = "";


    productos.forEach(producto => {

        const cantidad =
            parseInt(producto.value) || 0;

        const precio =
            parseFloat(producto.dataset.precio);

        const nombre =
            producto.dataset.nombre;


        if (cantidad > 0) {

            hayProductos = true;

            const subtotal =
                cantidad * precio;

            total += subtotal;


            contenido += `
                <div class="linea-producto">

                    <span>
                        ${nombre} x ${cantidad}
                    </span>

                    <strong>
                        Bs. ${subtotal}
                    </strong>

                </div>
            `;
        }

    });


    if (!hayProductos) {

        resumen.innerHTML = `
            <p>
                Aún no seleccionaste ningún producto.
            </p>
        `;

    } else {

        resumen.innerHTML = contenido;

    }


    totalElemento.textContent =
        "Bs. " + total;

}



/* ==============================
   PEDIDO POR WHATSAPP
============================== */

function realizarPedido() {

    const productos =
        document.querySelectorAll(".cantidad");


    let mensaje =
        "PEDIDO - DEYMI ED GLOW\n\n";


    let total = 0;

    let hayProductos = false;


    productos.forEach(producto => {

        const cantidad =
            parseInt(producto.value) || 0;

        const precio =
            parseFloat(producto.dataset.precio);

        const nombre =
            producto.dataset.nombre;


        if (cantidad > 0) {

            hayProductos = true;


            const subtotal =
                cantidad * precio;


            total += subtotal;


            mensaje +=
                nombre +
                " x " +
                cantidad +
                " = Bs. " +
                subtotal +
                "\n";

        }

    });


    if (!hayProductos) {

        alert(
            "Primero selecciona al menos un producto."
        );

        return;

    }


    const nombreCliente =
        document.getElementById(
            "nombrePedido"
        ).value;


    const numeroCliente =
        document.getElementById(
            "numeroPedido"
        ).value;


    const lugar =
        document.getElementById(
            "lugarPedido"
        ).value;


    if (
        nombreCliente === "" ||
        numeroCliente === "" ||
        lugar === ""
    ) {

        alert(
            "Completa tus datos antes de realizar el pedido."
        );

        return;

    }


    mensaje +=
        "\nTOTAL: Bs. " +
        total +
        "\n\n";


    mensaje +=
        "Nombre: " +
        nombreCliente +
        "\n";


    mensaje +=
        "WhatsApp: " +
        numeroCliente +
        "\n";


    mensaje +=
        "Lugar de entrega: " +
        lugar;


    const numeroDeymi =
        "59174446418";


    const url =
        "https://wa.me/" +
        numeroDeymi +
        "?text=" +
        encodeURIComponent(mensaje);


    window.open(url, "_blank");

}



/* ==============================
   FORMULARIO DE CONTACTO
============================== */

function enviarMensaje(event) {

    event.preventDefault();


    const nombre =
        document.getElementById(
            "nombreContacto"
        ).value;


    const correo =
        document.getElementById(
            "correoContacto"
        ).value;


    const opcion =
        document.getElementById(
            "opcionContacto"
        ).value;


    const mensaje =
        document.getElementById(
            "mensajeContacto"
        ).value;


    let texto =

        "CONSULTA - DEYMI ED GLOW\n\n" +

        "Nombre: " +
        nombre +
        "\n" +

        "Correo: " +
        correo +
        "\n" +

        "Consulta: " +
        opcion +
        "\n\n" +

        "Mensaje:\n" +
        mensaje;


    const numeroDeymi =
        "59174446418";


    const url =
        "https://wa.me/" +
        numeroDeymi +
        "?text=" +
        encodeURIComponent(texto);


    window.open(url, "_blank");


    document.querySelector(
        ".formulario-contacto"
    ).reset();

}