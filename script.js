const btnEmpresas = document.querySelector("#Empresas");
btnEmpresas.addEventListener("click", listaEmpesa);

const menuEmpresas = document.querySelector(".ListaEmpresas")


function listaEmpesa(){
    const menuEmpresa = menuEmpresas.classList.contains("inactive");
    if(!menuEmpresa){
        menuEmpresa.classList.add("inactive");
    }
    
}
