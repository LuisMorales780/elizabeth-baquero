document.addEventListener('DOMContentLoaded', function() {

    // Función para manejar el cambio de visibilidad de los textos
    function toggleText(btnId, textoId) {
      const btn = document.getElementById(btnId);
      const texto = document.getElementById(textoId);
  
      btn.addEventListener('click', function() {
        // Verifica si el texto está oculto
        if (texto.style.display === "none" || texto.style.display === "") {
          // Muestra el texto correspondiente
          texto.style.display = "block";
  
          // Oculta los otros textos
          hideOtherTexts(textoId);
        }
      });
    }
  
    // Función para ocultar los otros textos
    function hideOtherTexts(excludeId) {
      const texts = ['texto_uno', 'texto_dos', 'texto_tres'];
      texts.forEach(function(textId) {
        if (textId !== excludeId) {
          document.getElementById(textId).style.display = "none";
        }
      });
    }
  
    // Inicialización de los botones y los textos
    function init() {
      toggleText('btn_uno', 'texto_uno');
      toggleText('btn_dos', 'texto_dos');
      toggleText('btn_tres', 'texto_tres');
    }
  
    // Llamada a la función para inicializar
    init();
  
  });
  