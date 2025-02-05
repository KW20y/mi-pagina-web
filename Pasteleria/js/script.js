function mostrarSeccion(seccion) {
    const contenidoPrincipal = document.getElementById('contenido-principal');
    let contenidoHTML = '';

    if (seccion === 'inicio') {
        contenidoHTML = `
            <div class="opciones">
                <div id="tortas" class="opcion" onmouseover="mostrarImagen('tortas_preview')" onclick="mostrarOpciones('tortas')">
                    <h3>Tortas</h3>
                </div>
                <div id="galletas" class="opcion" onmouseover="mostrarImagen('galletas_preview')" onclick="mostrarOpciones('galletas')">
                    <h3>Galletas</h3>
                </div>
                <div id="gelatinas" class="opcion" onmouseover="mostrarImagen('gelatinas_preview')" onclick="mostrarOpciones('gelatinas')">
                    <h3>Gelatinas</h3>
                </div>
                <div id="yogurt" class="opcion" onmouseover="mostrarImagen('yogurt_preview')" onclick="mostrarOpciones('yogurts')">
                    <h3>Yogurt</h3>
                </div>
            </div>

            <div id="imagen-previsualizacion" class="imagen-previsualizacion">
                <!-- Imagen dinámica cargada por JavaScript -->
            </div>
        `;
    } else if (seccion === 'nosotros') {
        contenidoHTML = `
            <h2>Redes Sociales</h2>
            <div class="redes-sociales">
                <a href="https://www.instagram.com" target="_blank">
                    <img src="images/instagram_logo.png" alt="Instagram" class="social-logo">
                </a>
                <a href="https://www.tiktok.com" target="_blank">
                    <img src="images/tiktok_logo.png" alt="TikTok" class="social-logo">
                </a>
                <a href="https://www.facebook.com" target="_blank">
                    <img src="images/facebook_logo.png" alt="Facebook" class="social-logo">
                </a>
            </div>
        `;
    } else if (seccion === 'productos') {
        contenidoHTML = `
            <h2>Productos</h2>
            <div class="productos">
                <div class="producto">
                    <img src="images/dulce1.jpg" alt="Nestle">
                    <h3>Nestle</h3>
                </div>
                <div class="producto">
                    <img src="images/dulce2.jpg" alt="Jell-O">
                    <h3>Jell-O</h3>
                </div>
                <div class="producto">
                    <img src="images/dulce3.jpg" alt="Yoplait">
                    <h3>Yoplait</h3>
                </div>
                <!-- Añadir más productos según sea necesario -->
            </div>
        `;
    } else if (seccion === 'contacto') {
        contenidoHTML = `
            <h2>Contacto</h2>
            <div class="contacto">
                <div class="columna">
                    <h3>Director de la Tienda</h3>
                    <p>Nombre: Juan Pérez</p>
                    <p>Teléfono: (123) 456-7890</p>
                </div>
                <div class="columna">
                    <h3>Empleados de Cocina</h3>
                    <p>Nombre: María López</p>
                    <p>Teléfono: (123) 456-7891</p>
                    <p>Nombre: Pedro Sánchez</p>
                    <p>Teléfono: (123) 456-7892</p>
                </div>
                <div class="columna">
                    <h3>Empleados de Entrega/Delivery</h3>
                    <p>Nombre: Ana García</p>
                    <p>Teléfono: (123) 456-7893</p>
                    <p>Nombre: Luis Martínez</p>
                    <p>Teléfono: (123) 456-7894</p>
                </div>
            </div>
        `;
    }

    contenidoPrincipal.innerHTML = contenidoHTML;
}

function mostrarImagen(imagen) {
    const imagenPrevisualizacion = document.getElementById('imagen-previsualizacion');
    let imgSrc = '';

    if (imagen === 'tortas_preview') {
        imgSrc = 'images/tortas_preview.jpg';
    } else if (imagen === 'galletas_preview') {
        imgSrc = 'images/galletas_preview.jpg';
    } else if (imagen === 'gelatinas_preview') {
        imgSrc = 'images/gelatinas_preview.jpg';
    } else if (imagen === 'yogurt_preview') {
        imgSrc = 'images/yogurt_preview.jpg';
    }

    imagenPrevisualizacion.style.display = 'block';
    imagenPrevisualizacion.innerHTML = `<img src="${imgSrc}" alt="${imagen}" style="width: 150px; height: auto;">`;
}

function mostrarOpciones(categoria) {
    const contenidoPrincipal = document.getElementById('contenido-principal');
    const imagenPrevisualizacion = document.getElementById('imagen-previsualizacion');
    imagenPrevisualizacion.style.display = 'none';

    let subopcionesHTML = '';

    const tortas = [
        { nombre: 'Torta de Chocolate', img: 'images/torta_chocolate.jpg', descripcion: 'Bizcocho suave y húmedo de chocolate, relleno y bañado con el delicioso fudge de Patty o manjar; rodeado de virutas de chocolate. Puedes acompañarla con el helado de tu preferencia y más fudge de Patty. Conservar en un lugar fresco y seco. Se recomienda refrigerar. Este producto contiene harina, leche, aceite, vinagre, cocoa, huevos, azúcar, polvo de hornear, chocolate de leche y vainilla.' },
        { nombre: 'Torta de Fresas', img: 'images/torta_fresas.jpg', descripcion: 'Una torta de fresas es un postre irresistible que combina un suave y esponjoso bizcocho con una capa de fresas frescas y jugosas. Esta torta se suele cubrir con una generosa cantidad de crema batida, lo que le da un toque aún más cremoso y delicioso. Es perfecta para cualquier ocasión, ya sea un cumpleaños, una celebración especial, o simplemente para disfrutar de un antojo dulce.' },
        { nombre: 'Torta de Vainilla', img: 'images/torta_vainilla.jpg', descripcion: 'La torta de vainilla es un clásico que nunca pasa de moda. Imagina un bizcocho suave y esponjoso con un delicado sabor a vainilla, que se derrite en la boca con cada bocado. Su aroma a vainilla es irresistible y llena la cocina de una fragancia reconfortante. Esta torta se puede decorar con una ligera capa de crema batida y algunas frutas frescas para darle un toque extra de sabor y color. Es perfecta para cualquier ocasión, desde una celebración especial hasta una tarde de té.' },
        { nombre: 'Torta de Limón', img: 'images/torta_limon.jpg', descripcion: 'La torta de limón es una explosión de frescura y sabor. Imagina un bizcocho suave y esponjoso con un toque cítrico que despierta tus papilas gustativas. El aroma a limón es refrescante y reconfortante al mismo tiempo. Esta torta se suele decorar con un glaseado de limón que añade un toque extra de dulzura y acidez, creando un equilibrio perfecto de sabores. Cada bocado es una combinación de textura y sabor que te transporta a un día soleado de verano.' }
    ];

    const galletas = [
        { nombre: 'Galleta de Chocolate', img: 'images/galleta_chocolate.jpg', descripcion: 'Galleta de chocolate crujiente por fuera, suave por dentro, con trozos de chocolate que se derriten en la boca.' },
        { nombre: 'Galleta de Avena', img: 'images/galleta_avena.jpg', descripcion: 'Galleta de avena suave y masticable, con un toque de dulzura y avena integral que se deshace en la boca.' },
        { nombre: 'Galleta de Mantequilla', img: 'images/galleta_mantequilla.jpg', descripcion: 'Una galleta de mantequilla es suave y delicada, con un sabor rico y cremoso que se derrite en la boca.' },
        { nombre: 'Galleta de Nuez', img: 'images/galleta_nuez.jpg', descripcion: 'Galleta de nuez crujiente y rica, con pedacitos de nuez que aportan un sabor y textura únicos.' }
    ];

    const gelatinas = [
        { nombre: 'Gelatina de Fresa', img: 'images/gelatina_fresa.jpg', descripcion: 'Dulce y frutal, con un toque de fresas maduras que alegran el paladar.' },
        { nombre: 'Gelatina de Limón', img: 'images/gelatina_limon.jpg', descripcion: 'Fresca y vibrante, con un sabor cítrico y refrescante.' },
        { nombre: 'Gelatina de Uva', img: 'images/gelatina_uva.jpg', descripcion: 'Rica y afrutada, con un sabor profundo y jugoso de uvas.' },
        { nombre: 'Gelatina de Mango', img: 'images/gelatina_mango.jpg', descripcion: 'Exótica y tropical, con el dulce y suculento sabor del mango.' }
    ];

    const yogurts = [
        { nombre: 'Yogurt Natural', img: 'images/yogurt_natural.jpg', descripcion: 'El yogurt natural es un alimento cremoso, ligeramente ácido y rico en proteínas y probióticos, ideal para una buena salud digestiva. Se puede disfrutar solo o con frutas, granola o miel.' },
        { nombre: 'Yogurt de Fresa', img: 'images/yogurt_fresa.jpg', descripcion: 'El yogurt de fresa es un postre cremoso con el sabor dulce y ácido de las fresas. Tiene un color rosado y es rico en proteínas y probióticos, ayudando a la salud digestiva..' },
        { nombre: 'Yogurt Griego', img: 'images/yogurt_griego.jpg', descripcion: 'El yogurt griego es un alimento espeso y cremoso, rico en proteínas y calcio. Se puede disfrutar solo o acompañado de miel, frutas o nueces, y es versátil en recetas tanto dulces como saladas.' },
        { nombre: 'Yogurt de Mango', img: 'images/yogurt_mango.jpg', descripcion: 'El yogurt de mango es cremoso y afrutado, con un sabor dulce y exótico. Es rico en proteínas y probióticos, ideal para la salud digestiva.' }
    ];
    
    if (categoria === 'tortas') {
        tortas.forEach(torta => {
            subopcionesHTML += `
                <div class="producto">
                    <img src="${torta.img}" alt="${torta.nombre}">
                    <h3>${torta.nombre}</h3>
                    <p>${torta.descripcion}</p>
                </div>
            `;
        });
    } else if (categoria === 'galletas') {
        galletas.forEach(galleta => {
            subopcionesHTML += `
                <div class="producto">
                    <img src="${galleta.img}" alt="${galleta.nombre}">
                    <h3>${galleta.nombre}</h3>
                    <p>${galleta.descripcion}</p>
                </div>
            `;
        });
    } else if (categoria === 'gelatinas') {
        gelatinas.forEach(gelatina => {
            subopcionesHTML += `
                <div class="producto">
                    <img src="${gelatina.img}" alt="${gelatina.nombre}">
                    <h3>${gelatina.nombre}</h3>
                    <p>${gelatina.descripcion}</p>
                </div>
            `;
        });
    } else if (categoria === 'yogurts') {
        yogurts.forEach(yogurt => {
            subopcionesHTML += `
                <div class="producto">
                    <img src="${yogurt.img}" alt="${yogurt.nombre}">
                    <h3>${yogurt.nombre}</h3>
                    <p>${yogurt.descripcion}</p>
                </div>
            `;
        });
    }
    
    contenidoPrincipal.innerHTML = `
        <h2>Tipos de ${categoria.charAt(0).toUpperCase() + categoria.slice(1)}</h2>
        <div class="subopciones">
            ${subopcionesHTML}
        </div>
        <button class="boton-atras" onclick="mostrarSeccion('inicio')">Atrás</button>
    `;
    }
    

