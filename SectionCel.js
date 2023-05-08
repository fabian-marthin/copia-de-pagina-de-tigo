const listaPhones = [];

const celular1 = listaPhones.push({
    url: "./img/celular.PNG",
    referencia: "iPhone 14 PRO 128GB",
    valor: "$6.099.901",
    color:["🔴","🟡","🟢"]
})
const celular3 = listaPhones.push({
    url: "./img/celular2.PNG",
    referencia: "Motorola G32 4/128GB",
    valor: "$799.900",
    color:["🔴","🔵","⚫","⚪"]
})
const celular4 = listaPhones.push({
    url: "./img/celular3.PNG",
    referencia: "Samsung A04s 128GB",
    valor: "$769.9000",
    color:["⚪","⚫","🟢"]
})
const celular5 = listaPhones.push({
    url: "./img/celular4.PNG",
    referencia: "Xiaomi Redmi Note 12 4/128GB",
    valor: "$932.900",
    color:["🔴","🔵","⚫","⚪"]
})
const celular6 = listaPhones.push({
    url: "./img/celular5.PNG",
    referencia: "Xiaomi Redmi 10C 128 GB Gris INT",
    valor: "$629.900",
    color:["🔴","🟣","🟢"]
})
const celular7 = listaPhones.push({
    url: "./img/celular6.PNG",
    referencia: "Samsung Galaxy A03 32 GB DS",
    valor: "$479.900",
    color:["🔴","🔵","⚪","🟢"]
})
const celular8 = listaPhones.push({
    url: "./img/celular7.PNG",
    referencia: "Xiaomi 12 8/256 GB",
    valor: "$3.399.900",
    color:["⚪","🔵","⚫","🟢"]
})
const celular9 = listaPhones.push({
    url: "./img/celular8.PNG",
    referencia: "Xiaomi Redmi 10A 32 GB",
    valor: "$499.900",
    color:["🔴","🔵","⚫"]
})
const celular10 = listaPhones.push({
    url: "./img/celular9.PNG",
    referencia: "Moto Edge 30 Fusion - MOTO EDGE 30 FUSION 12/256GB QUARTZBLACK",
    valor: "$2.999.900",
    color:["🔴","🔵","⚫","🟢"]
})


const sectionCel = document.querySelector(".SectionCel");



for (let i = 0; i < listaPhones.length; i++) {
    const element = listaPhones[i];

    let creatArticle = document.createElement('article');
    let creatImg = document.createElement('img');
    let creatDiv = document.createElement('div');
    let creatLi = document.createElement('li');
    let creatH2 = document.createElement('h2');
    
    creatImg.setAttribute('src', element.url);
    creatLi.innerHTML = element.color;
    creatH2.innerHTML = 
    `${element.referencia} <br> 
    ${element.valor}`;
    
    sectionCel.appendChild(creatArticle);
    creatArticle.appendChild(creatImg);
    creatArticle.appendChild(creatDiv);
    creatDiv.appendChild(creatLi);
    creatArticle.appendChild(creatH2);

}


