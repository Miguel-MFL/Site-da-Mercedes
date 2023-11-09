var elementosdeDuvida = document.querySelectorAll('.duvida');

elementosdeDuvida.forEach(function (duvida) {
  duvida.addEventListener('click', function () {
    duvida.classList.toggle('ativa');
  });
});