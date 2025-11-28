const lanches = [
    { id: "lanche1", nome: "Keyrisson Samir Delícias", preco: 18.00 },
    { id: "lanche2", nome: "Davizinho cremoso com abacaxi", preco: 46.50},
    { id: "lanche3", nome: "Toiçinho do Samuel", preco: 23.30 },
    { id: "lanche4", nome: "Erasmo cacetinho", preco: 20.12},
    { id: "lanche5", nome: "Abner Abnudo com adicional de salsicha", preco: 25.40},
    { id: "lanche6", nome: "Dillan na chapa", preco: 19.50},
    { id: "lanche7", nome: "X-tudo do Jean Jamal", preco: 20.50}
]

const acomp = [
    { id: "acomp1", nome: "Samir potatoes", preco: 8.50},
    { id: "acomp2", nome: "Linguiça colonial do Abner", preco: 10.50},
    { id: "acomp3", nome: "Abtatas rústicas", preco: 9.50},
    { id: "acomp4", nome: "Keyrissiger (ração)", preco: 8.50},
    { id: "acomp5", nome: "Samuptiscos", preco: 8.50},
    { id: "acomp6", nome: "Sabores do Abner", preco: 8.50},
    { id: "acomp7", nome: "Pé de frango frito do chef Cerqueira", preco: 8.50}
    
]

const sobremesa = [
    { id:"sob1", nome:"Bomba do Stevan", preco: 3.00},
    { id:"sob2", nome:"Geléia do José", preco: 4.50},
    { id:"sob3", nome:"Torta deliciosa do Davi", preco: 20.00},
    { id:"sob4", nome:"Creminho suculento do Keyrisson", preco: 5.00},
    { id:"sob5", nome:"Samulachas", preco: 9.00},
    { id:"sob6", nome:"Davizinho bombom", preco: 10.00}
]

function criaOpcao() {
    ["lanches1", "lanches2", "lanches3"].forEach(id => {
        const select = document.getElementById(id);
        lanches.forEach(item => {
            const option = document.createElement("option");
            option.value = item.id;
            option.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
            select.appendChild(option);
        });
    });

    const acomp = document.getElementById("acomp");
        acomp.forEach(item => {
            const option = document.createElement("option");
            option.value = item.id;
            option.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
            select.appendChild(option);
        });

    const sobremesa = document.getElementById("sobremesa");
        sobremesa.forEach(item => {
            const option = document.createElement("option");
            option.value = item.id;
            option.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
            sobremesa.appendChild(option);
        });
}