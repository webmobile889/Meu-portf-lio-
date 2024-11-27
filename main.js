// Seletores
const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const interfaceMenu = document.getElementById('interface');
const overlay = document.createElement('div'); // Criar overlay

// Configuração do overlay
overlay.id = 'overlay';
overlay.style.position = 'fixed';
overlay.style.top = '0';
overlay.style.left = '0';
overlay.style.width = '100%';
overlay.style.height = '100%';
overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
overlay.style.zIndex = '998';
overlay.style.display = 'none';
document.body.appendChild(overlay); // Adicionar o overlay ao body

// Função para abrir o menu
openBtn.addEventListener('click', function () {
    interfaceMenu.style.transform = 'translateX(0)'; // Animação para abrir
    overlay.style.display = 'block'; // Mostrar o overlay
    document.body.style.overflow = 'hidden'; // Impedir rolagem
    openBtn.style.display = 'none'; // Esconder botão de abrir
    closeBtn.style.display = 'flex'; // Mostrar botão de fechar
});

// Função para fechar o menu
function closeMenu() {
    interfaceMenu.style.transform = 'translateX(100%)'; // Animação para fechar
    overlay.style.display = 'none'; // Esconder o overlay
    document.body.style.overflow = 'auto'; // Restaurar rolagem
    openBtn.style.display = 'flex'; // Mostrar botão de abrir
    closeBtn.style.display = 'none'; // Esconder botão de fechar
}

// Evento de fechamento
closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu); // Fechar ao clicar no overlay


// Função para voltar ao topo
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Função para mostrar/esconder o botão com base no scroll
window.addEventListener('scroll', () => {
    const button = document.getElementById('backToTop');
    if (window.scrollY > 200) {
        button.style.display = 'flex'; // Mostra o botão quando o scroll é maior que 200px
    } else {
        button.style.display = 'none'; // Esconde o botão caso contrário
    }
});



    function toggleContent(button) {
  // Obtém o conteúdo completo do artigo
  const fullContent = button.nextElementSibling;

  // Alterna a visibilidade do conteúdo completo
  if (fullContent.style.display === 'none' || fullContent.style.display === '') {
    fullContent.style.display = 'block';
    button.innerText = 'Ler menos';
  } else {
    fullContent.style.display = 'none';
    button.innerText = 'Ler mais';
  }
}