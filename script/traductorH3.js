const btnTraducir=document.getElementById("btnTraP");
let idiomaActual="espanol";

btnTraducir.addEventListener('click', ()=>{
    if (idiomaActual==="espanol") {
        idiomaActual="ingles";
        espanolAingles();
    } else {
        idiomaActual="espanol";
        inglesAespanol();
    }
    return;
});

// de español a inglés
function espanolAingles(){
    document.getElementById("h1Proj").textContent="My portfolio";
    document.getElementById("smaProj").textContent="Web developer";
    document.getElementById("iniProj").textContent="Home";
    document.getElementById("habProj").textContent="Skills";
    btnTraducir.textContent="Translate";
    document.getElementById("h2Proj").textContent="JavaScript Games with Phaser 3";
    document.getElementById("cuProj").textContent="Cockroach Game";
    document.getElementById("textCu").textContent="A game developed using JavaScript and the Phaser 3 framework. This game was created to improve my programming skills by using a framework to help me manage scenes and collisions between elements on the canvas. The game features a cockroach that must eat food to grow while avoiding insects that are larger than itself. As it grows, it will be able to eat other characters that appear on the screen.";
    document.getElementById("caProj").textContent="Chaos Game";
    document.getElementById("textCa").textContent="A game also developed using the Phaser 3 framework. Created to further improve my JavaScript programming skills, particularly in scene management and level control. The game features a dinosaur that must destroy everything in its path and defend itself against military forces attempting to stop it.";
    document.getElementById("pracProj").textContent="PHP and SQL Practice Projects";
    document.getElementById("pracSpan1").textContent="Expense Manager Exercise";
    document.getElementById("practext1").textContent="This project was developed using PHP and SQL to improve my backend development knowledge and programming skills.";
    document.getElementById("practext2").textContent="You can enter an expense or an income category using a basic HTML form. The server checks whether the submitted data is valid for the database.";
    document.getElementById("practext3").textContent="Here you can view a chart showing the total expenses or income recorded during the selected year.";
    document.getElementById("practext4").textContent="To gain practical experience and learn how to implement features that might be needed in a real-world application, I added functionality to export database data in JSON and CSV formats, making data migration as straightforward as possible.";
    document.getElementById("pracSpan2").textContent="User management Exercise with PHP and SQL";
    document.getElementById("usuText1").textContent="Developed using PHP and SQL, with Bootstrap for the user interface. This project was designed to simulate a real-world web application for management purposes.";
    document.getElementById("usuText2").textContent="I implemented functionality that allows clients to submit requests and check their status.";
    document.getElementById("usuText3").textContent="Users can specify the type, location, and add a descriptive text.";
    document.getElementById("usuText4").textContent="As you can see in the image, users can clearly view their profile, edit it to suit their needs, and manage their account settings.";
}
// de inglés a español
function inglesAespanol(){
    document.getElementById("h1Proj").textContent="Mi portafolio";
    document.getElementById("smaProj").textContent="demo";
    document.getElementById("iniProj").textContent="Inicio";
    document.getElementById("habProj").textContent="Habilidades";
    btnTraducir.textContent="Traducir";
    document.getElementById("h2Proj").textContent="Juegos JavaScript con Phaser 3";
    document.getElementById("cuProj").textContent="Juego de la cucaracha";
    document.getElementById("textCu").textContent="Juego creado con JavaScript y con el framework de Phaser 3. Es un juego hecho para mejorar mis conocimientos de programación mediante el uso de un framework para ayudarme a manejar las escenas y las colisiones entre los elementos del canvas. El juego trata de una cucaracha que tiene que ir comiendo alimento para crecer y esquivar a los insectos más grandes que ella, a medida que va creciendo podrá comerse a otros personajes que van apareciendo por la pantalla.";
    document.getElementById("caProj").textContent="Juego del caos";
    document.getElementById("textCa").textContent="Juego creado también con el framework Phaser 3. Hecho para seguir mejorando mi nivel de programación con JavaScript y el uso de escenas y el control de niveles. El juego consiste en un dinosaurio que debe destruir todo lo que encuentra a su paso y defenderse de las fuerzas militares que intentan detenerlo.";
    document.getElementById("pracProj").textContent="Prácticas con PHP y SQL";
    document.getElementById("pracSpan1").textContent="Ejercicio de gestor de gastos";
    document.getElementById("practext1").textContent="Este ejercicio realizo con PHP y SQL sirvio para mejorar mis conociminetos y nivel de programación en la parte de backend.";
    document.getElementById("practext2").textContent="Puedes insertar el gasto o el tipo de ingreso mediante un formulario básico en HTML. El servidor comprobará que los datos introducidos sean válidos para la base de datos.";
    document.getElementById("practext3").textContent="Aquí puedes ver un gráfico con la suma de los gastos o ingresos realizados durante el año que se haya seleccionado.";
    document.getElementById("practext4").textContent="Para practicar y saber realizar cosas que podrían necesitarse en una aplicación real he hecho funcionalidades para exportar los datos de la base de datos a formatos JSON y CSV para poder realizar migraciones con la mayor facilidad posible.";
    document.getElementById("pracSpan2").textContent="Ejercicio control de usuarios con PHP y SQL";
    document.getElementById("usuText1").textContent="Ejercicio creado con PHP, SQL y Bootstrap para la interfaz. Hecho como si fuera un simulacro de una aplicación web de gestión real.";
    document.getElementById("usuText2").textContent="Hice que el cliente pudiera realizar peticiones y consultar su estado.";
    document.getElementById("usuText3").textContent="El usuario puede indicar el tipo, la localidad y añadir un texto descriptivo.";
    document.getElementById("usuText4").textContent="Como puedes observar en la imagen el usuario puede ver su perfil con claridad, editarlo para adaptarlo a sus necesidades y configurar la cuenta.";
}