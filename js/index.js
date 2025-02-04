
/*--------------------------------------Desplazamiento suave------------------------------------*/


document.addEventListener('DOMContentLoaded', function() {


  function handleSmoothScroll(event) {
    const href = this.getAttribute('href');


    if (href && href.startsWith('#')) {
      event.preventDefault();
      const targetElement = document.querySelector(href);

      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 70;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
  }


  function initSmoothScroll() {
    const allLinks = document.querySelectorAll('a');

    allLinks.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });
  }

  initSmoothScroll();
});

/*--------------------------------------Desplazamiento suave------------------------------------*/

/*--------------------------------------boton regresar al inicio------------------------------------*/

document.addEventListener("DOMContentLoaded", function() {
  

  
  function handleScroll() {
    const backToTopButton = document.getElementById("backToTop");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  function init() {
    window.onscroll = handleScroll;
    document.getElementById("backToTop").addEventListener("click", scrollToTop);
    
    handleScroll();
  }

  init();

});

/*--------------------------------------boton regresar al inicio------------------------------------*/



document.addEventListener('DOMContentLoaded', function() {


  document.addEventListener("DOMContentLoaded", function() {
  
  // Función para mostrar u ocultar el botón de regreso al principio
  function handleScroll() {
    const backToTopButton = document.getElementById("backToTop");

    // Mostrar el botón si el desplazamiento es mayor que 20px
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  }

  // Función para hacer scroll suave hasta el inicio
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  // Inicialización
  function init() {
    // Evento para detectar el desplazamiento
    window.onscroll = handleScroll;

    // Evento para volver al inicio al hacer clic en el botón
    document.getElementById("backToTop").addEventListener("click", scrollToTop);

    // Llamada inicial para verificar la posición del scroll
    handleScroll();
  }

  // Llamada a la función de inicialización
  init();

});

  // Función para abrir/cerrar el menú de contacto
  function toggleMenu() {
    const iconoPrincipal = document.querySelector('#red-flotante-principal .icono_principal');
    const contactos = document.querySelector('#red-flotante-principal .contactos');
    
    iconoPrincipal.addEventListener('click', function() {
      contactos.classList.toggle('aparecer');
    });
  }

  // Función para mostrar modales
  function initModales() {
    const modalConfig = [
      { id: 'carillas', container: 'container-modal-3', item: 'item-modal-3' },
      { id: 'limpieza', container: 'container-modal', item: 'item-modal' },
      { id: 'blanqueamiento', container: 'container-modal-1', item: 'item-modal-1' },
      { id: 'diseno', container: 'container-modal-2', item: 'item-modal-2' }
    ];

    modalConfig.forEach(config => {
      document.getElementById(config.id).addEventListener('click', function() {
        document.getElementById(config.container).style.width = "100%";
        document.getElementById(config.container).style.height = "100vh";
        document.getElementById(config.container).style.animation = "showModal 0.3s linear forwards";
        document.getElementById(config.item).style.display = "flex";
      });
    });
  }

  // Función para cerrar modales
  function closeModales() {
    const closeButtons = [
      { id: 'close', container: 'container-modal', item: 'item-modal' },
      { id: 'close-1', container: 'container-modal-1', item: 'item-modal-1' },
      { id: 'close-2', container: 'container-modal-2', item: 'item-modal-2' },
      { id: 'close-3', container: 'container-modal-3', item: 'item-modal-3' }
    ];

    closeButtons.forEach(button => {
      document.getElementById(button.id).addEventListener('click', function() {
        document.getElementById(button.container).style.animation = "quitarModal 0.8s linear forwards";
        document.getElementById(button.container).style.width = "0";
        document.getElementById(button.container).style.height = "0";
        document.getElementById(button.item).style.display = "none";
      });
    });
  }

  // Llamada a las funciones
  toggleMenu();
  initModales();
  closeModales();

});


/*--------------------------------Boton flotante menu-----------------------------------*/

(function() {
  // Seleccionar el botón principal y el contenedor de iconos
  const botonPrincipal = document.querySelector('.redes-boton-principal');
  const contactosFlotantes = document.querySelector('.redes-contactos-flotantes');
  const botonFlotanteContenedor = document.querySelector('#redes-boton-flotante'); // Contenedor completo

  // Añadir un event listener para el click en el botón principal
  botonPrincipal.addEventListener('click', function(event) {
    // Prevenir la propagación del evento para que no se cierre inmediatamente después de abrir
    event.stopPropagation();
    // Alternar la clase active para mostrar u ocultar los iconos flotantes
    contactosFlotantes.classList.toggle('active');
  });

  // Añadir un event listener para el click fuera del contenedor
  document.addEventListener('click', function(event) {
    // Verificar si el clic ocurrió fuera del contenedor del menú flotante
    if (!botonFlotanteContenedor.contains(event.target)) {
      // Si es fuera, cerramos el menú flotante
      contactosFlotantes.classList.remove('active');
    }
  });

})();


/*--------------------------------Boton flotante menu-----------------------------------*/


/*--------------------------------Carrete casos de exito-----------------------------------*/
(function() {
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const fotosExito = document.querySelector('.fotos-casos-exito');
  const items = document.querySelectorAll('.fotos-casos-exito .item');
  let currentIndex = 0;

  const totalItems = items.length;

  // Función para mover al siguiente elemento
  function moveToNext() {
    if (currentIndex < totalItems - 1) {
      currentIndex++;
    } else {
      currentIndex = 0; // Volver al inicio
    }
    updateGalleryPosition();
  }

  // Función para mover al elemento anterior
  function moveToPrev() {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = totalItems - 1; // Ir al último
    }
    updateGalleryPosition();
  }

  // Actualiza la posición del contenedor de las imágenes
  function updateGalleryPosition() {
    const offset = -currentIndex * 100; // Desplazar las imágenes por el ancho de un ítem
    fotosExito.style.transform = `translateX(${offset}%)`;
  }

  // Eventos de los botones
  prevBtn.addEventListener('click', moveToPrev);
  nextBtn.addEventListener('click', moveToNext);
})();

/*--------------------------------Carrete casos de exito-----------------------------------*/