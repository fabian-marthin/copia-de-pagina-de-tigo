const listaPhones = [];

const celular1 = listaPhones.push({
    url: "./img/celular.PNG",
    referencia: "Samunsung Galaxy A32 128 GB",
    valor: "$1.119.900",
    color:["🔴","🔵","⚫","🟢"]
})
const celular3 = listaPhones.push({
    url: "./img/celular2.PNG",
    referencia: "Samunsung Galaxy A32 128 GB",
    valor: "$1.119.900",
    color:["🔴","🔵","⚫","🟢"]
})
const celular4 = listaPhones.push({
    url: "./img/celular3.PNG",
    referencia: "Samunsung Galaxy A32 128 GB",
    valor: "$1.119.900",
    color:["🔴","🔵","⚫","🟢"]
})
const celular5 = listaPhones.push({
    url: "./img/celular4.PNG",
    referencia: "Samunsung Galaxy A32 128 GB",
    valor: "$1.119.900",
    color:["🔴","🔵","⚫","🟢"]
})
const celular6 = listaPhones.push({
    url: "./img/celular5.PNG",
    referencia: "Samunsung Galaxy A32 128 GB",
    valor: "$1.119.900",
    color:["🔴","🔵","⚫","🟢"]
})
const celular7 = listaPhones.push({
    url: "./img/celular6.PNG",
    referencia: "Samunsung Galaxy A32 128 GB",
    valor: "$1.119.900",
    color:["🔴","🔵","⚫","🟢"]
})
const celular8 = listaPhones.push({
    url: "./img/celular7.PNG",
    referencia: "Samunsung Galaxy A32 128 GB",
    valor: "$1.119.900",
    color:["🔴","🔵","⚫","🟢"]
})
const celular9 = listaPhones.push({
    url: "./img/celular8.PNG",
    referencia: "Samunsung Galaxy A32 128 GB",
    valor: "$1.119.900",
    color:["🔴","🔵","⚫","🟢"]
})
const celular10 = listaPhones.push({
    url: "./img/celular9.PNG",
    referencia: "Samunsung Galaxy A32 128 GB",
    valor: "$1.119.900",
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





//         <article>
//             <img src="./img/celular2.PNG" alt="celular">
//             <div class="color">
//                 <li>🔴</li>
//                 <li>🔵</li>
//                 <li>⚫</li>
//                 <li>🟢</li>
//             </div>
//             <h2>Samunsung Galaxy A32 128 GB</h2>
//             <div>
//                 <h3>$1.119.900</h3>
//                 <h4>-$180.000 DTO</h4>
//             </div>
//             <p>IVA Incluido</p>
//             <div>
//                 <h2>Regular</h2>
//                 <p>$1.299.900</p>
//             </div>
//         </article>
//         <article>
//             <img src="./img/celular3.PNG" alt="celular">
//             <div class="color">
//                 <li>🔴</li>
//                 <li>🔵</li>
//                 <li>⚫</li>
//                 <li>🟢</li>
//             </div>
//             <h2>Samunsung Galaxy A32 128 GB</h2>
//             <div>
//                 <h3>$1.119.900</h3>
//                 <h4>-$180.000 DTO</h4>
//             </div>
//             <p>IVA Incluido</p>
//             <div>
//                 <h2>Regular</h2>
//                 <p>$1.299.900</p>
//             </div>
//         </article>
//         <article>
//             <img src="./img/celular4.PNG" alt="celular">
//             <div class="color">
//                 <li>🔴</li>
//                 <li>🔵</li>
//                 <li>⚫</li>
//                 <li>🟢</li>
//             </div>
//             <h2>Samunsung Galaxy A32 128 GB</h2>
//             <div>
//                 <h3>$1.119.900</h3>
//                 <h4>-$180.000 DTO</h4>
//             </div>
//             <p>IVA Incluido</p>
//             <div>
//                 <h2>Regular</h2>
//                 <p>$1.299.900</p>
//             </div>
//         </article>
//         <article>
//             <img src="./img/celular5.PNG" alt="celular">
//             <div class="color">
//                 <li>🔴</li>
//                 <li>🔵</li>
//                 <li>⚫</li>
//                 <li>🟢</li>
//             </div>
//             <h2>Samunsung Galaxy A32 128 GB</h2>
//             <div>
//                 <h3>$1.119.900</h3>
//                 <h4>-$180.000 DTO</h4>
//             </div>
//             <p>IVA Incluido</p>
//             <div>
//                 <h2>Regular</h2>
//                 <p>$1.299.900</p>
//             </div>
//         </article>
//         <article>
//             <img src="./img/celular6.PNG" alt="celular">
//             <div class="color">
//                 <li>🔴</li>
//                 <li>🔵</li>
//                 <li>⚫</li>
//                 <li>🟢</li>
//             </div>
//             <h2>Samunsung Galaxy A32 128 GB</h2>
//             <div>
//                 <h3>$1.119.900</h3>
//                 <h4>-$180.000 DTO</h4>
//             </div>
//             <p>IVA Incluido</p>
//             <div>
//                 <h2>Regular</h2>
//                 <p>$1.299.900</p>
//             </div>
//         </article>
//         <article>
//             <img src="./img/celular7.PNG" alt="celular">
//             <div class="color">
//                 <li>🔴</li>
//                 <li>🔵</li>
//                 <li>⚫</li>
//                 <li>🟢</li>
//             </div>
//             <h2>Samunsung Galaxy A32 128 GB</h2>
//             <div>
//                 <h3>$1.119.900</h3>
//                 <h4>-$180.000 DTO</h4>
//             </div>
//             <p>IVA Incluido</p>
//             <div>
//                 <h2>Regular</h2>
//                 <p>$1.299.900</p>
//             </div>
//         </article>
//         <article>
//             <img src="./img/celular8.PNG" alt="celular">
//             <div class="color">
//                 <li>🔴</li>
//                 <li>🔵</li>
//                 <li>⚫</li>
//                 <li>🟢</li>
//             </div>
//             <h2>Samunsung Galaxy A32 128 GB</h2>
//             <div>
//                 <h3>$1.119.900</h3>
//                 <h4>-$180.000 DTO</h4>
//             </div>
//             <p>IVA Incluido</p>
//             <div>
//                 <h2>Regular</h2>
//                 <p>$1.299.900</p>
//             </div>
//         </article>
//         <article>
//             <img src="./img/celular9.PNG" alt="celular">
//             <div class="color">
//                 <li>🔴</li>
//                 <li>🔵</li>
//                 <li>⚫</li>
//                 <li>🟢</li>
//             </div>
//             <h2>Samunsung Galaxy A32 128 GB</h2>
//             <div>
//                 <h3>$1.119.900</h3>
//                 <h4>-$180.000 DTO</h4>
//             </div>
//             <p>IVA Incluido</p>
//             <div>
//                 <h2>Regular</h2>
//                 <p>$1.299.900</p>
//             </div>
//         </article>


