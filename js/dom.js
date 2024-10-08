// El evento 'DOMContentLoaded' asegura que todo el DOM esté cargado antes de ejecutar el código
document.addEventListener('DOMContentLoaded', () => {

    // Referencia al contenedor principal de la tarjeta y el menú de personalización
    const contenedor = document.querySelector('.contenedor');



// 1. CREACION DE LA VISTA PREVIA  -----------------------------------------------------------------------------------------------------------------------------------
    
    // 1.1 Creación del espacio de la vista previa
    const vistaPrevia = document.createElement('div');
    vistaPrevia.id = 'vistaPrevia';
    vistaPrevia.classList.add('seccion-vistaPrevia'); // Añade clase para estilos CSS

    // 1.2 Creación de la tarjeta
    const tarjeta = document.createElement('div');
    tarjeta.id = 'tarjeta';
    tarjeta.classList.add('tarjeta');

    // 1. 3 Título de la tarjeta
    const tituloTarjeta = document.createElement('h2');
    tituloTarjeta.id = 'tituloTarjeta';
    tituloTarjeta.textContent = '[Título]'; // Texto predeterminado del título

    // 1.4 Contenedor para la imagen en la tarjeta
    const contenedorMarco = document.createElement('div');
    contenedorMarco.classList.add('contenedor-marco'); // Clase CSS para estilos
    contenedorMarco.id = 'contenedorMarco';

    // 1.5 Imagen dentro de la tarjeta
    const imagenTarjeta = document.createElement('img');
    imagenTarjeta.id = 'imagenTarjeta';
    imagenTarjeta.src = ''; // Fuente vacía inicialmente, se llenará con la selección de un tema
    //imagenTarjeta.alt = 'Dibujo'; // Texto alternativo
    imagenTarjeta.classList.add('imagen-centrada'); // Clase para centrar la imagen
    contenedorMarco.appendChild(imagenTarjeta);

    // 1.6 Nombre del destinatario de la tarjeta
    const nombreDestinatario = document.createElement('h3');
    nombreDestinatario.id = 'nombreDestinatario';
    nombreDestinatario.textContent = '[Nombre del destinatario]'; // Texto predeterminado

    // 1.7 Mensaje en la tarjeta
    const mensajeTarjeta = document.createElement('p');
    mensajeTarjeta.id = 'mensajeTarjeta';
    mensajeTarjeta.textContent = '[Mensaje]'; // Texto predeterminado del mensaje

    // 1.8 Agregar el título, la imagen, el nombre y el mensaje como "hijos" de la tarjeta
    tarjeta.appendChild(tituloTarjeta);
    tarjeta.appendChild(contenedorMarco);
    tarjeta.appendChild(nombreDestinatario);
    tarjeta.appendChild(mensajeTarjeta);

    // 1.9 Agregar la tarjeta a la vista previa
    vistaPrevia.appendChild(tarjeta);



// 2. CREACION DEL MENÚ DE PERSONALIZACIÓN  ------------------------------------------------------------------------------------------------------------------------------

    // 2.1 Creación del menú de personalización de la tarjeta
    const menuPersonalizacion = document.createElement('div');
    menuPersonalizacion.id = 'menuPersonalizacion';
    menuPersonalizacion.classList.add('seccion-personalizacion'); // Clase para estilos

    // -------------------------------------------------------------------------------

    // 2.2 Título de la sección para seleccionar el tema
    const tituloTema = document.createElement('h2');
    tituloTema.textContent = 'Elige un tema'; // Texto descriptivo

    // 2.2.1 Elemento select para elegir el tema de la tarjeta
    const seleccionarTema = document.createElement('select');
    seleccionarTema.id = 'seleccionarTema';

    // 2.2.2 Lista de opciones de tema
    const opcionesTema = 
    [
        { valor: 'navidad', texto: 'Navidad' },
        { valor: 'añonuevo', texto: 'Año Nuevo' },
        { valor: 'sanvalentin', texto: 'San Valentín' },
        { valor: 'cumpleaños', texto: 'Cumpleaños' }
    ];

    // Iterar (repetir) sobre las opciones de tema y agregarlas al elemento <select> del menú de personalización
    // Se recorre el arreglo 'opcionesTema', que contiene objetos con el 'valor' y 'texto' de cada opción
    // Por cada tema en 'opcionesTema', se crea un nuevo elemento <option> del tipo select
    // Luego, se asigna el 'valor' y 'texto' correspondientes a cada opción del arreglo
    // Finalmente, cada <option> se añade al elemento <select> 'seleccionarTema' que permitirá al usuario elegir un tema
    opcionesTema.forEach(opcion => {
        const opcionElemento = document.createElement('option'); // Crear nuevo elemento <option>
        opcionElemento.value = opcion.valor; // Asignar el valor de la opción (ej. 'navidad')
        opcionElemento.textContent = opcion.texto; // Asignar el texto visible de la opción (ej. 'Navidad')
        seleccionarTema.appendChild(opcionElemento); // Añadir la opción al <select> del menú
    });

    // ----------------------------------------------------------------------------------------

    // 2.3 Título para seleccionar el color de fondo
    const tituloColorFondo = document.createElement('h2');
    tituloColorFondo.textContent = 'Color de fondo'; // Texto descriptivo

    // 2.3.1 Input para seleccionar el color de fondo de la tarjeta
    const selectorColorFondo = document.createElement('input');
    selectorColorFondo.type = 'color';
    selectorColorFondo.id = 'selectorColorFondo'; // Input tipo color

    // ------------------------------------------------------------------------------------------

    // 2.4 Título de la sección de dibujo
    const tituloDibujo = document.createElement('h2');
    tituloDibujo.textContent = 'Dibujo'; // Texto descriptivo

    // 2.4.1 Contenedor de opciones de dibujo
    const opcionesDibujo = document.createElement('div');
    opcionesDibujo.id = 'opcionesDibujo';
    opcionesDibujo.classList.add('contenedor-opciones'); // Clase para estilos

    // --------------------------------------------------------------------------------------------

    // 2.5 Sección de datos del destinatario
    const tituloDatosDestinatario = document.createElement('h2');
    tituloDatosDestinatario.textContent = 'Datos del destinatario'; // Texto descriptivo

    // 2.5.1 Contenedor del formulario de destinatario 
    const formularioDestinatario = document.createElement('div');
    formularioDestinatario.classList.add('contenedor-formulario'); // Clase para estilos

            // 2.5.1.1 Primera columna del formulario //////////////////////////////////////////////////////////
            const columna1 = document.createElement('div');
            columna1.classList.add('columna'); // Clase para disposición en columna

                    // 2.5.1.1.1 Input para el nombre del destinatario
                    const inputNombreDestinatario = document.createElement('input');
                    inputNombreDestinatario.type = 'text';
                    inputNombreDestinatario.id = 'inputNombreDestinatario';
                    inputNombreDestinatario.placeholder = 'Captura el nombre del destinatario';

                    // 2.5.1.1.2 Input para el título de la tarjeta
                    const inputTituloTarjeta = document.createElement('input');
                    inputTituloTarjeta.type = 'text';
                    inputTituloTarjeta.id = 'inputTituloTarjeta';
                    inputTituloTarjeta.placeholder = 'Captura un título';

                // 2.5.1.1.3 Agregar inputs a la primera columna
                columna1.appendChild(inputNombreDestinatario);
                columna1.appendChild(inputTituloTarjeta);

            // 2.5.1.2 Segunda columna del formulario ////////////////////////////////////////////////////////
            const columna2 = document.createElement('div');
            columna2.classList.add('columna'); // Clase para disposición en columna

                    // 2.5.1.2.1 Input para el mensaje de la tarjeta
                    const inputMensaje = document.createElement('textarea');
                    inputMensaje.id = 'inputMensaje';
                    inputMensaje.placeholder = 'Dedica un mensaje'; // Placeholder predeterminado

                // 2.5.1.2.2 Agregar input a la segunda columna
                columna2.appendChild(inputMensaje);

    // 2.5.2 Ambas columnas "hacerlas hijas" del formulario
    formularioDestinatario.appendChild(columna1);
    formularioDestinatario.appendChild(columna2);

    // ---------------------------------------------------------------------------------------------

    // 2.6 Botón
    const botonListo = document.createElement('button');
    botonListo.id = 'botonListo';
    botonListo.textContent = 'LISTO'; // Texto del botón

    // -------------------------------------------------------------------------------------------

    // 3. Todas las secciones "hacerlas hijos" del menú de personalización
    menuPersonalizacion.appendChild(tituloTema);
    menuPersonalizacion.appendChild(seleccionarTema);
    menuPersonalizacion.appendChild(tituloColorFondo);
    menuPersonalizacion.appendChild(selectorColorFondo);
    menuPersonalizacion.appendChild(tituloDibujo);
    menuPersonalizacion.appendChild(opcionesDibujo);
    menuPersonalizacion.appendChild(tituloDatosDestinatario);
    menuPersonalizacion.appendChild(formularioDestinatario);
    menuPersonalizacion.appendChild(botonListo);

    // 3.1 La vista previa y el menú de personalización "hacerlos hijos" del contenedor principal
    contenedor.appendChild(vistaPrevia);
    contenedor.appendChild(menuPersonalizacion);

    // -------------------------------------------------------------------------------------------

    // 4. Ponerle las imágenes a los contenedores de la seleccion de "dibujos"
    const temas = {
        navidad: [
            'imagenes/dibujo/dibujo-navidad1.jpg', 
            'imagenes/dibujo/dibujo-navidad2.jpg', 
            'imagenes/dibujo/dibujo-navidad3.jpg',
            'imagenes/dibujo/dibujo-navidad4.jpg',
            'imagenes/dibujo/dibujo-navidad5.jpg'
        ],
        añonuevo: [
            'imagenes/dibujo/dibujo-añonuevo1.jpg', 
            'imagenes/dibujo/dibujo-añonuevo2.jpg', 
            'imagenes/dibujo/dibujo-añonuevo3.jpg',
            'imagenes/dibujo/dibujo-añonuevo4.jpg',  
            'imagenes/dibujo/dibujo-añonuevo5.jpg'   
        ],
        sanvalentin: [
            'imagenes/dibujo/dibujo-sanvalentin1.jpg', 
            'imagenes/dibujo/dibujo-sanvalentin2.jpg', 
            'imagenes/dibujo/dibujo-sanvalentin3.jpg',
            'imagenes/dibujo/dibujo-sanvalentin4.jpg', 
            'imagenes/dibujo/dibujo-sanvalentin5.jpg'  
        ],
        cumpleaños: [
            'imagenes/dibujo/dibujo-cumple1.jpg', 
            'imagenes/dibujo/dibujo-cumple2.jpg', 
            'imagenes/dibujo/dibujo-cumple3.jpg',
            'imagenes/dibujo/dibujo-cumple4.jpg', 
            'imagenes/dibujo/dibujo-cumple5.jpg'  
        ]
    };



    // Termanos de realizar la parte visual ////////////////////////////////



    // -------------------------------------------------------------------------------------------



    // 5. Función que actualiza las imágenes de los dibujos según el tema seleccionado
    function actualizarOpcionesDibujo() 
    {
        const temaSeleccionado = seleccionarTema.value;   // 5.1 Obtiene el valor del tema seleccionado por el usuario en el menú desplegable
        const imagenes = temas[temaSeleccionado];         // 5.2 Recupera el arreglo de imágenes correspondiente al tema seleccionado

        /* 5.3  Limpia las opciones anteriores de imágenes de la sección de dibujos
                Eliminando cualquier imagen que se haya mostrado previamente */
        opcionesDibujo.innerHTML = '';

        // 5.4 Agregar nuevas imágenes según el tema
        imagenes.forEach(imagen => 
        {
            const img = document.createElement('img'); // Crea un nuevo elemento 'img' para cada imagen del tema
            img.src = imagen; // Establece la fuente de la imagen con la URL obtenida del arreglo de imágenes
            img.classList.add('opcion-dibujo'); // Añade una clase CSS 'opcion-dibujo' para aplicar estilos a cada imagen

            /* 5.4.1    Agrega un evento 'click' a cada imagen; cuando se hace clic en una imagen, 
                        la fuente de la imagen de la tarjeta se actualiza con la imagen seleccionada */
            img.addEventListener('click', () => 
            {
                imagenTarjeta.src = img.src; // 5.4.1.1 Actualiza la imagen de la tarjeta cuando se hace clic
            });

            opcionesDibujo.appendChild(img); // 5.4.2 Agrega la imagen creada al contenedor de opciones de dibujo en el menú de personalización
        });
    }

    // -------------------------------------------------------------------------------------------

    // 6. Evento para actualizar las opciones de dibujo al cambiar el tema -------------------------
            /*  Cuando el usuario selecciona un tema diferente en el menú desplegable, se ejecuta la función "actualizarOpcionesDibujo"
                Esto permite que las imágenes de dibujos correspondientes al nuevo tema seleccionado se carguen y muestren dinámicamente */
    seleccionarTema.addEventListener('change', actualizarOpcionesDibujo);

    // 7. Evento para cambiar el color de fondo de la tarjeta ---------------------------------------
            /*  Agrega un evento 'input' al selector de color de fondo. Cada vez que el usuario selecciona un color nuevo, 
                este evento se activa y cambia el color de fondo de la tarjeta en tiempo real */
    selectorColorFondo.addEventListener('input', (e) => 
    {
        tarjeta.style.backgroundColor = e.target.value; // Cambia el color de fondo de la tarjeta
    });

    // 8. Evento para actualizar el nombre del destinatario en la tarjeta ---------------------------
            /*  Evento que se activa cada vez que el usuario escribe o cambia algo en el campo de texto "inputNombreDestinatario"
                El valor ingresado por el usuario en este campo (inputNombreDestinatario.value) se toma y se usa para actualizar
                dinámicamente el contenido del elemento "nombreDestinatario" (que es el nombre del destinatario que aparece en la tarjeta) */
    inputNombreDestinatario.addEventListener('input', () => 
    {
        nombreDestinatario.textContent = inputNombreDestinatario.value; // Cambia el nombre del destinatario de la tarjeta
    });

    // 9. Evento para actualizar el título de la tarjeta --------------------------------------------
            /*  El evento 'input' detecta cualquier cambio que ocurra mientras el usuario está escribiendo
                Cada vez que el usuario escribe algo, el contenido del campo de entrada (inputTituloTarjeta.value) 
                se asigna al elemento 'tituloTarjeta', actualizando su contenido de texto (textContent) en tiempo real */
    inputTituloTarjeta.addEventListener('input', () => 
    {
        tituloTarjeta.textContent = inputTituloTarjeta.value; // Cambia el titulo de la tarjeta
    });

    // 10. Evento para actualizar el mensaje de la tarjeta ---------------------------------------------
            /*  Evento que escucha cualquier cambio en el campo de texto del mensaje (inputMensaje)
                Cada vez que el usuario escribe o cambia el contenido del área de texto, 
                la función captura el valor actual (inputMensaje.value) y lo actualiza en la tarjeta (mensajeTarjeta) */
    inputMensaje.addEventListener('input', () => 
    {
        mensajeTarjeta.textContent = inputMensaje.value;
    });

    // 11. Función que abre una nueva ventana con la vista previa de la tarjeta
    function abrirNuevaVentana() 
    {
        const nuevaVentana = window.open('', '_blank', 'width=450,height=650'); // 11.1 Abre nueva ventana de esta dimensión

        // 11.2 Escribe el contenido HTML en la nueva ventana. Esto incluye el título de la ventana y los estilos CSS
        nuevaVentana.document.write(` 
            <html>
                <head>
                    <title>Vista previa de la tarjeta</title>
                    <style>
                        body {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            height: 100vh;
                            margin: 0;
                            font-family: Verdana, Geneva, Tahoma, sans-serif;
                        }
                        .tarjeta {
                            width: 80%;
                            height: 80vh;
                            padding: 20px;
                            background-color: ${tarjeta.style.backgroundColor}; // Color actual de la tarjeta
                            border: 1px solid #000;
                            border-radius: 10px;
                            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
                            text-align: center;
                            margin: 10px;
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                        }
                        .tarjeta img {
                            width: 70%;
                            height: auto;
                            border-radius: 5px;
                            display: flex;
                            margin: 0 auto;
                            flex-direction: column;
                            justify-content: center;
                        }
                        h2 {
                            margin: 30px;
                            font-size: 120px;
                        }
                        h3 {
                            margin: 20px;
                            font-size: 90px;
                        }
                        p {
                            margin: 20px;
                            font-size: 50px;
                        }
                    </style>
                </head>
                <body>
                    <div class="tarjeta">
                        <h2>${tituloTarjeta.textContent}</h2> 
                        <img src="${imagenTarjeta.src}" alt="Dibujo" /> 
                        <h3>${nombreDestinatario.textContent}</h3> 
                        <p>${mensajeTarjeta.textContent}</p> 
                    </div>
                </body>
            </html>
        `);             // Escribe el contenido de la nueva ventana con los datos actuales de la tarjeta
    }

    // 12. Evento para abrir la vista previa en una nueva ventana al hacer clic en el botón "LISTO"
            // Se añade un evento 'click' al botón "LISTO"
            // Cuando el usuario hace clic en este botón, se ejecuta la función 'abrirNuevaVentana'
            /* Esta función crea y abre una nueva ventana que muestra la vista previa de la tarjeta personalizada,
                incluyendo el título, la imagen, el nombre del destinatario y el mensaje */
    botonListo.addEventListener('click', abrirNuevaVentana);

    // 13. Inicializa las opciones de dibujo con el tema predeterminado
            /* Llama a la función 'actualizarOpcionesDibujo' para inicializar las opciones de dibujo
                en función del tema predeterminado seleccionado (que es el primero en la lista) 

                Esto asegura que al cargar la página, la sección de opciones de dibujo se complete
                automáticamente con las imágenes correspondientes al tema inicial, mejorando la 
                experiencia del usuario al proporcionar opciones relevantes desde el principio */
    actualizarOpcionesDibujo();
});
