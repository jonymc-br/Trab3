const titulosNoticias = document.querySelectorAll(".titulo-noticia");
titulosNoticias.forEach((titulo) => {
  titulo.addEventListener("click", () => {
    const textoNoticia = titulo.nextElementSibling;
    textoNoticia.classList.toggle("escondido");
  });
});
const formContato = document.querySelector('.form-contato');
formContato.addEventListener('submit', (event) => {
  event.preventDefault();
  // Aqui você pode adicionar código para enviar o formulário para o servidor
  formContato.reset();
});
const form = document.querySelector('#curriculum-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  //código para enviar o formulário para o servidor... :)
  alert('Currículo enviado com sucesso!');
  form.reset();
});
