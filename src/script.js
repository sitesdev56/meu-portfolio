const botoes = document.querySelectorAll('.botao-linguagem');
const conteudos = document.querySelectorAll('.conteudos-linguagens .conteudo');

botoes.forEach((botao) => {
  botao.addEventListener('click', () => {
    // Remover classe "selecionado" de todos os botões
    botoes.forEach(btn => btn.classList.remove('selecionado'));

    // Adicionar "selecionado" no botão clicado
    botao.classList.add('selecionado');

    // Ocultar todos os conteúdos
    conteudos.forEach(conteudo => conteudo.classList.remove('ativo'));

    // Mostrar o conteúdo da linguagem clicada
    const id = botao.getAttribute('data-linguagem');
    document.getElementById(id).classList.add('ativo');
  });
});
