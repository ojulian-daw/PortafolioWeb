const btnTr=document.getElementById("btnTra");
let idiomAct="espanol";

btnTr.addEventListener('click', ()=>{
    if (idiomAct==="espanol"){
        idiomAct="ingles";
        espanolAingles();
    } else if (idiomAct="ingles"){
        idiomAct="espanol";
        inglesAespanol();
    }
    return;
});

function espanolAingles() {
    document.getElementById("tituloH1").textContent="My portfolio";
    document.getElementById("smallHeader").textContent="Web developer";
    document.getElementById("enlace1").textContent="Projects";
    document.getElementById("enlace2").textContent="Skills";
    btnTr.textContent="Translate";
    document.getElementById("parraf1").textContent="Web developer";
    document.getElementById("tituloH2").textContent="I develop websites and web applications using my own code, with a focus on detail."
    document.getElementById("span1").textContent="View projects";
    document.getElementById("pTitle1").textContent="TECHNOLOGIES";
    document.getElementById("pTitle2").textContent="PROJECTS";
    document.getElementById("list1").textContent="Web Games (with Phaser 3)";
    document.getElementById("list2").textContent="Testing an expense manager using PHP and SQL";
    document.getElementById("list3").textContent="User manager test using PHP and SQL";
}
function inglesAespanol(){
    document.getElementById("tituloH1").textContent="Mi portafolio";
    document.getElementById("smallHeader").textContent="Desarrollador web";
    document.getElementById("enlace1").textContent="Proyectos";
    document.getElementById("enlace2").textContent="Habilidades";
    btnTr.textContent="Traducir";
    document.getElementById("parraf1").textContent="Desarrollador web";
    document.getElementById("tituloH2").textContent="Desarrollo sitios web y aplicaciones web usando mi propio código, con un enfoque en el detalle."
    document.getElementById("span1").textContent="Ver proyectos";
    document.getElementById("pTitle1").textContent="TECNOLOGÍAS";
    document.getElementById("pTitle2").textContent="PROYECTOS";
    document.getElementById("list1").textContent="Juegos web (con Phaser 3)";
    document.getElementById("list2").textContent="Prueba de un gestor de gastos usando PHP y SQL";
    document.getElementById("list3").textContent="Prueba de un gestor de usuarios usando PHP y SQL";
}