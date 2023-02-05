const btnEmpresas = document.querySelector("#Empresas");
btnEmpresas.addEventListener("click", listaEmpesa);
const menuEmpresas = document.querySelector(".ListaEmpresas")

const btnInfomacion = document.querySelector("#informacion");
btnInfomacion.addEventListener("click", listaInformacion);
const menuInfomacion = document.querySelector(".infImpUsuario");

const btnMenuFiltros2 = document.querySelector(".menu2");
btnMenuFiltros2.addEventListener("click", menuFiltro);
const abrirFiltro = document.querySelector(".buscador");

const btnMovil = document.querySelector("#movil");
btnMovil.addEventListener("click", menuMovil);
const abrirMovil = document.querySelector(".menuMovil");

const btnInternet = document.querySelector("#internet");
btnInternet.addEventListener("click", menuInternet);
const abrirInternet = document.querySelector(".menuinternet");

const btnTelevision = document.querySelector("#television");
btnTelevision.addEventListener("click", menuTelevision);
const abrirTelevsion = document.querySelector(".menuTelevision");

const btnMenuUnificado = document.querySelector("#menuUnifi");
btnMenuUnificado.addEventListener("click", menuUnificado);
const abrirUnificado = document.querySelector(".menuBarraDeNavUnificada");

function menuUnificado(){
    const abrirMenuUnificado = abrirUnificado.classList.contains("inactive");
    if (abrirMenuUnificado){
        abrirUnificado.classList.remove("inactive");
    }
    else if (!abrirMenuUnificado){
        abrirUnificado.classList.add("inactive");
    }
    return abrirMenuUnificado;
}


function listaEmpesa(){
    const menuEm = menuEmpresas.classList.contains("inactive");
    
    if(menuEm){
        menuEmpresas.classList.remove("inactive");
        
    }
    else if(!menuEm){
        menuEmpresas.classList.add("inactive");
    }
return menuEm;
}

function listaInformacion(){
    const menuInf = menuInfomacion.classList.contains("inactive");

    if(menuInf){
        menuInfomacion.classList.remove("inactive");
    }
    else if (!menuInf){
        menuInfomacion.classList.add("inactive");
    }
    return menuInf;
}

function menuFiltro(){
    const abrirMenuFiltro = abrirFiltro.classList.contains("inactive");

    if (abrirMenuFiltro){
        abrirFiltro.classList.remove("inactive");
    }
    else if (!abrirMenuFiltro){
        abrirFiltro.classList.add("inactive");
    }
    return abrirMenuFiltro;
}

function menuTelevision(){
    const abrirMenuTelevision = abrirTelevsion.classList.contains("inactive");

    if(abrirMenuTelevision){
        abrirTelevsion.classList.remove("inactive")
        abrirMovil.classList.add("inactive");
        abrirInternet.classList.add("inactive");
    }
    else if(!abrirMenuTelevision){
        abrirTelevsion.classList.add("inactive")
    }
    return abrirTelevsion;
}

function menuMovil(){
    const abrirMenuMovil = abrirMovil.classList.contains("inactive");

    if(abrirMenuMovil){
        abrirMovil.classList.remove("inactive");
        abrirInternet.classList.add("inactive");
        abrirTelevsion.classList.add("inactive")
    }
    else if(!abrirMenuMovil){
        abrirMovil.classList.add("inactive");
    }
    
    return abrirMenuMovil;
}

function menuInternet(){
    const abrirMenuINternet = abrirInternet.classList.contains("inactive");

    if(abrirMenuINternet){
        abrirInternet.classList.remove("inactive");
        abrirMovil.classList.add("inactive");
        abrirTelevsion.classList.add("inactive")
    }
    else if (!abrirMenuINternet){
        abrirInternet.classList.add("inactive");
    }
    
    return abrirMenuINternet;
}
