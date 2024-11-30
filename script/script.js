// Footer // 

function enviarEmail() {
    const emailInput = document.getElementById('email-input');
    if (emailInput.value) {
        alert('Enviado com sucesso');
        emailInput.value = '';
    } else {
        alert('Por favor, insira um email');
    }
}


function whatsapp() {
    const imagem = document.getElementById('imagem1');
    imagem.addEventListener('mouseover', () => {
        imagem.src = "./img/whatsapp (1).png";
    });
    imagem.addEventListener('mouseout', () => {
        imagem.src = "./img/whatsapp.png";
    });
}

function facebook() {
    const imagem = document.getElementById('imagem2');
    imagem.addEventListener('mouseover', () => {
        imagem.src = "./img/facebook (1).png";
    });
    imagem.addEventListener('mouseout', () => {
        imagem.src = "./img/facebook.png";
    });
}

function instagram() {
    const imagem = document.getElementById('imagem3');
    imagem.addEventListener('mouseover', () => {
        imagem.src = "./img/instagram (1).png";
    });
    imagem.addEventListener('mouseout', () => {
        imagem.src = "./img/instagram.png";
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a');
    const loader = document.getElementById('loader');
    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Previne o comportamento padrão de navegação

            const href = this.getAttribute('href');
            const content = document.getElementById('content');

            // Adiciona a classe de fade-out e mostra o loader
            content.classList.add('fade-out');
            loader.classList.add('active');

            // Aguarda o tempo de transição e redireciona
            setTimeout(() => {
                window.location.href = href;
            }, 500); // Tempo deve corresponder ao tempo definido na transição CSS
        });
    });
});

// Produtos //

const products = [
    //Pack 01
    { id: 1, category:1, name: "Trator 3036EN", description: "Descrição detalhada do Produto A.", price: "R$ 10,00", image: "./img/Tratores-Cards/Trator-Card01.png" },
    { id: 2, category:2, name: "Colheitadeira S430", description: "Descrição detalhada do Produto B.", price: "R$ 20,00", image: "./img/Colheitadeiras-Cards/Colheitadeira-Card01.png" },
    { id: 3, category:3, name: "Arado DS1003STD*", description: "Descrição detalhada do Produto C.", price: "R$ 30,00", image: "./img/Arados-Cards/Arado-Card01.png" },
    { id: 4, category:4, name: "Semente de Milho", description: "Descrição detalhada do Produto C.", price: "R$ 30,00", image: "./img/Sementes-Cards/Semente-Card01.png" },
    { id: 5, category:5, name: "Soprador", description: "Descrição detalhada do Produto C.", price: "R$ 30,00", image: "./img/Ferramentas-Cards/Ferramenta-Card01.png" },
    { id: 6, category:6, name: "Capacete de Segurança", description: "Descrição detalhada do Produto C.", price: "R$ 30,00", image: "./img/Equipamentos-Cards/Equipamento-Card01.png" },
    //Pack 02
    { id: 7, category:1, name: "Trator 5090E", description: "Descrição detalhada do Produto A.", price: "R$ 10,00", image: "./img/Tratores-Cards/Trator-Card02.png" },
    { id: 8, category:2, name: "Colheitadeira S440", description: "Descrição detalhada do Produto B.", price: "R$ 20,00", image: "./img/Colheitadeiras-Cards/Colheitadeira-Card03.png" },
    { id: 9, category:3, name: "Arado DS1003PRO-T**", description: "Descrição detalhada do Produto C.", price: "R$ 30,00", image: "./img/Arados-Cards/Arado-Card01.png" },
    { id: 10, category:4, name: "Semente de Sorgão", description: "Descrição detalhada do Produto C.", price: "R$ 30,00", image: "./img/Sementes-Cards/Semente-Card02.png" },
    { id: 11, category:5, name: "Cortador de Grama Manual", description: "Descrição detalhada do Produto C.", price: "R$ 30,00", image: "./img/Ferramentas-Cards/Ferramenta-Card02.png" },
    { id: 12, category:6, name: "Luva de Segurança", description: "Descrição detalhada do Produto C.", price: "R$ 30,00", image: "./img/Equipamentos-Cards/Equipamento-Card02.png" },
    //Pack 03
    { id: 13, category:1, name: "Trator 6100E", description: "Descrição detalhada do Produto A.", price: "R$ 10,00", image: "./img/Tratores-Cards/Trator-Card02.png" },
    { id: 14, category:2, name: "Colheitadeira S450", description: "Descrição detalhada do Produto B.", price: "R$ 20,00", image: "./img/Colheitadeiras-Cards/Colheitadeira-Card03.png" },
    { id: 15, category:3, name: "Arado DS1004PRO", description: "Descrição detalhada do Produto C.", price: "R$ 30,00", image: "./img/Arados-Cards/Arado-Card01.png" },
    { id: 16, category:4, name: "Semente de Soja", description: "Descrição detalhada do Produto C.", price: "R$ 30,00", image: "./img/Sementes-Cards/Semente-Card03.png" },
    { id: 17, category:5, name: "Cortador de Grama 1,5 CV", description: "Descrição detalhada do Produto C.", price: "R$ 30,00", image: "./img/Ferramentas-Cards/Ferramenta-Card03.png" },
    { id: 18, category:6, name: "Óculos de Proteção", description: "Descrição detalhada do Produto C.", price: "R$ 30,00", image: "./img/Equipamentos-Cards/Equipamento-Card03.png" },
    //Pack 04
    { id: 19, category:1, name: "Trator 7230M", description: "Descrição detalhada do Produto A.", price: "R$ 10,00", image: "./img/Tratores-Cards/Trator-Card02.png" },
    { id: 20, category:2, name: "Colheitadeira S470", description: "Descrição detalhada do Produto B.", price: "R$ 20,00", image: "./img/Colheitadeiras-Cards/Colheitadeira-Card01.png" },
    { id: 21, category:3, name: "Arado DS1009PRO-T***", description: "Descrição detalhada do Produto C.", price: "R$ 30,00", image: "./img/Arados-Cards/Arado-Card01.png" },
    { id: 22, category:4, name: "Semente de Milho", description: "Descrição detalhada do Produto C.", price: "R$ 30,00", image: "./img/Sementes-Cards/Semente-Card04.png" },
    { id: 23, category:5, name: "Motosserra", description: "Descrição detalhada do Produto C.", price: "R$ 30,00", image: "./img/Ferramentas-Cards/Ferramenta-Card04.png" },
    { id: 24, category:6, name: "Colete porta Ferramentas", description: "Descrição detalhada do Produto C.", price: "R$ 30,00", image: "./img/Equipamentos-Cards/Equipamento-Card04.png" },
];

const filterImages = {
    1: { image: './img/Trator.svg', name: "Tratores" },
    2: { image: './img/Colheitadeira.png', name: "Colheitadeiras" },
    3: { image: './img/Arados.svg', name: "Arados" },
    4: { image: './img/Sementes.svg', name: "Sementes" },
    5: { image: './img/Ferramentas.svg', name: "Ferramentas" },
    6: { image: './img/Equipamentos.png', name: "Equipamentos" },
};
function displayProducts(productsToDisplay) {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';

    if (productsToDisplay.length === 0) {
        productList.innerHTML = '<p>Nenhum produto encontrado.</p>';
        return;
    }

    productsToDisplay.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <p><strong>Preço:</strong> ${product.price}</p>
                <a href="compra.html?id=${product.id}">Ver detalhes</a>
            `;
        productList.appendChild(productDiv);
    });
}

function createFilterButtons() {
    const filterButtonsContainer = document.getElementById('filterButtons');
    const createdFilters = new Set();
    Object.entries(filterImages).forEach(([key, { image, name }]) => {
        const categoryId = parseInt(key); 
        if (!createdFilters.has(categoryId)) {
            const button = document.createElement('button');
            button.innerHTML = `
                <img src="${image}" alt="${name}">
                <span>${name}</span>
            `;
            button.onclick = () => displayProducts(products.filter(p => p.category === categoryId));
            filterButtonsContainer.appendChild(button);
            createdFilters.add(categoryId);
        }
    });
}

function clearFilter() {
    displayProducts(products);
}
document.getElementById('clearFilterButton').onclick = clearFilter;

// Exibir produtos inicialmente
displayProducts(products);
createFilterButtons();
 