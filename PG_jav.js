let trilho = document.getElementById('trilho');
let body = document.querySelector('body');
let header = document.querySelector('header');
let footer = document.querySelector('footer');
let button = document.querySelector('button');
let somos = document.querySelector('.somos');

// Função para ativar o modo escuro
const enableDarkMode = () => {
    trilho.classList.add('dark');
    body.classList.add('dark');
    if (header) header.classList.add('dark');
    if (footer) footer.classList.add('dark');
    if (button) button.classList.add('dark');
    if (somos) somos.classList.add('dark'); 
    localStorage.setItem('darkMode', 'enabled'); 
}

// Função para desativar o modo escuro
const disableDarkMode = () => {
    trilho.classList.remove('dark');
    body.classList.remove('dark');
    if (header) header.classList.remove('dark');
    if (footer) footer.classList.remove('dark');
    if (button) button.classList.remove('dark');
    if (somos) somos.classList.remove('dark'); 
    localStorage.setItem('darkMode', 'disabled'); 
}

// Verifica se o modo escuro ja ta ativo no localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
    enableDarkMode(); 
} else {
    disableDarkMode(); 
}

// Alterna o modo escuro/claro ao clicar no botao de joadson
trilho.addEventListener('click', () => {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
        disableDarkMode(); 
    } else {
        enableDarkMode(); 
    }
});
