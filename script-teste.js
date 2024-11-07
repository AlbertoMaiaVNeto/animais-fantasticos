/*/ Adicione a classe ativo a todos os itens do menu
const menu = document.querySelectorAll(".menu a");
menu.forEach((item) => {
  item.classList.add("ativo");
});
// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menu.forEach((item) => {
  item.classList.remove("ativo");
});
menu[0].classList.add("ativo");
// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll("img");
imgs.forEach((img) => {
  const possuiAlt = img.hasAttribute("alt");
  console.log(possuiAlt);
});
// Modifique o href do link externo no menu
//menu[3].setAttribute("href", "https://github.com/AlbertoMaiaVNeto");

// ou

const link = document.querySelector('a[href^="http"]');
link.setAttribute("href", "https://github.com/AlbertoMaiaVNeto");

//

// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeiraImagem = document.querySelector("img");
const imagemTopo = primeiraImagem.offsetTop;
console.log(imagemTopo);
// Retorne a soma da largura de todas as imagens
function somaImagens() {
  const imagens = document.querySelectorAll("img");
  let soma = 0;
  imagens.forEach((img) => {
    soma = soma + img.offsetWidth;
  });
  console.log(soma);
}
window.onload = function () {
  somaImagens();
};
// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const linksTamanho = document.querySelectorAll("a");
linksTamanho.forEach((link) => {
  const linkWidth = link.offsetWidth;
  const linkHeigth = link.offsetHeigth;
  if (linkWidth >= 48 && linkHeigth >= 48) {
    console.log(link, "Possui boa acessibilidade");
  } else {
    console.log(link, "Nao possui boa acessibilidade");
  }
});
// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
if (window.innerWidth < 720) {
  const adicionarAtivo = document.querySelector(".menu");
  adicionarAtivo.classList.add("menu-mobile");
} else {
  console.log("A tela e maior que 720px");
}

// ou

const menuMobile = window.matchMedia("(max-width: 720px)").matches;

if (menuMobile < 720) {
  const menuAdicionar = document.querySelector(".menu");
  menuAdicionar.classList.add("menu-mobile-2");
}
*/

// const img = document.querySelector("img");

// function helloWord() {
//   console.log("Hello, World!");
// }
// img.addEventListener("click", helloWord);

function handleKeyboard(event) {
  if (event.key === "a" || event.key === "A") {
    document.body.classList.toggle("azul");
  }
}
window.addEventListener("keydown", handleKeyboard);

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// Se o usuário clicar na tecla (t), aumente todo o texto do site.
function aumentarFonte(event) {
  if (event.key === "t" || event.key === "T") {
    document.documentElement.classList.toggle("caixaalta");
  }
}
window.addEventListener("keydown", aumentarFonte);


// Duplique o menu e adicione ele em copy

// Selecione o primeiro DT da dl de Faq

// Selecione o DD referente ao primeiro DT

// Substitua o conteúdo html de .faq pelo de .animais
