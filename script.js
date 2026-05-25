const botao = document.getElementById("btnMensagem");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", () => {

  mensagem.innerHTML =
  "🌱 A sustentabilidade no agro garante alimento, tecnologia e preservação para as futuras gerações.";

  mensagem.style.opacity = "0";

  setTimeout(() => {
    mensagem.style.opacity = "1";
    mensagem.style.transition = "1s";
  }, 100);

});