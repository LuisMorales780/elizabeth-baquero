document.addEventListener('DOMContentLoaded', function () {
    // Función para inicializar el menú
    function initMenu() {
        const menu = document.getElementById('menu');
        const hamburgerBtn = document.getElementById('hamburger-btn');
        const menuLinks = document.querySelectorAll('#menu a');

        // FunciÃ³n para alternar el estado del menÃº
        function toggleMenu() {
            const isHidden = menu.classList.toggle('hidden');
            switch (isHidden) {
                case true:
                    hamburgerBtn.innerHTML = '&#9776;'; // Ícono de barras
                    break;
                case false:
                    hamburgerBtn.innerHTML = '&#10005;'; // Ícono de X
                    break;
            }
        }

        // Evento para el botón de hamburguesa
        hamburgerBtn.addEventListener('click', toggleMenu);

        // Evento para cerrar el menú al hacer clic fuera de él
        document.addEventListener('click', function (event) {
            if (!menu.contains(event.target) && !hamburgerBtn.contains(event.target)) {
                if (!menu.classList.contains('hidden')) {
                    menu.classList.add('hidden');
                    hamburgerBtn.innerHTML = '&#9776;'; // Asegura el ícono de barras
                }
            }
        });

        // Evento para cerrar el menú al hacer clic en un enlace
        // Evento para cerrar el menú al hacer clic en un enlace
menuLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
        // Comprobamos si el clic fue en el enlace con el id 'mas-boton'
        if (event.target.closest('#mas-boton')) {
            return; // Si es 'mas-boton', no cerramos el menú
        }
        
        // Si no es 'mas-boton', cerramos el menú
        menu.classList.add('hidden');
        hamburgerBtn.innerHTML = '&#9776;'; // Ícono de barras
    });
});

    }

    // Llamada a la función para inicializar el menú
    initMenu();
});


/*--------------------------------------boton desplegable menú------------------------------------*/

(function() {
    document.addEventListener("DOMContentLoaded", function() {
        const masBoton = document.getElementById("mas-boton");
        const subMenu = document.querySelector(".desplegable-lista");
        const parrafo = document.getElementById("mi-parrafo");

        // Función para alternar la visibilidad del menú
        function toggleMenu() {
            if (subMenu.style.display === "none" || subMenu.style.display === "") {
                subMenu.style.display = "block";
                masBoton.innerHTML = 'Menos <div class="fas fa-chevron-up"></div>';
            } else {
                subMenu.style.display = "none";
                masBoton.innerHTML = 'Más <div class="fas fa-chevron-down"></div>';
            }            
        }

        // Evento de clic en el botón dentro del enlace "Más..."
        masBoton.addEventListener("click", function(event) {
            event.preventDefault();
            toggleMenu();
            event.stopPropagation(); // Evita que se propague el clic y cierre el menú
        });

        // Evento de clic en el párrafo
        parrafo.addEventListener("click", function(event) {
            event.preventDefault();
            toggleMenu();
            event.stopPropagation(); // Evita que se propague el clic y cierre el menú
        });
    });
})();


//----------------------------------------capsula para cerrar submenú----------------------------------------------
(function() {
    document.addEventListener("DOMContentLoaded", function() {
        const subMenu = document.querySelector(".desplegable-lista");
        const html = document.querySelector("html");

        // Prevenir que el clic en el subMenú cierre el menú
        if (subMenu) {
            subMenu.addEventListener("click", function(event) {
                event.stopPropagation(); // Evita que el clic dentro del subMenu cierre el menú
            });
        }

        // Cerrar el menú si se hace clic fuera de él
        html.addEventListener("click", function(event) {
            if (subMenu && !subMenu.contains(event.target)) {
                subMenu.style.display = "none";  // Oculta el submenú
                const masBoton = document.getElementById("mas-boton");
                if (masBoton) {
                    masBoton.innerHTML = 'Más <div class="fas fa-chevron-down"></div>';  // Cambia el texto y el icono al estado inicial
                }
            }
            
        });

        // Cerrar el subMenú al hacer clic en el enlace #menu-ubicacion
        const ubicacionLink = document.getElementById("menu-ubicacion");
        if (ubicacionLink) {
            ubicacionLink.addEventListener("click", function() {
                if (subMenu) {
                    subMenu.style.display = "none";  // Cierra el submenú
                    const masBoton = document.getElementById("mas-boton");
                    if (masBoton) {
                        masBoton.innerHTML = 'Más <div class="fas fa-chevron-down"></div>';  // Restaura el texto y el icono al estado inicial
                    }
                }
            });
        }


    });
})();




/*--------------------------------------boton desplegable menú------------------------------------*/