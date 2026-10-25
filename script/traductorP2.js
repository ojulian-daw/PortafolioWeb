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
    document.getElementById("tituloH1P").textContent="My portfolio";
    document.getElementById("smallHeaderP").textContent="Web developer";
    document.getElementById("enlace1P").textContent="Home";
    document.getElementById("enlace2P").textContent="Projects";
    btnTraducir.textContent="Translate";
    document.getElementById("tituloH2P").textContent="My Skills";
    document.getElementById("parraf1P").textContent="I mainly work in web development, combining frontend and backend depending on each project's needs. I'm interested in building functional websites and applications, keeping code organized, and avoiding unnecessary complexity.";
    document.getElementById("parraf2P").textContent="I develop custom websites using HTML and CSS, focusing on structure, responsive design, and adaptation to different screen sizes.";
    document.getElementById("parraf3P").textContent="I use JavaScript to add interactivity and logic to websites, ranging from small interface features to applications with more complex dynamic behaviour.";
    document.getElementById("parraf4P").textContent="I develop web applications and websites using PHP, including server-side functionality and administration panels.";
    document.getElementById("parraf5P").textContent="I work with SQL databases to store, query, and manage information for web applications.";
    document.getElementById("parraf6P").textContent="I develop websites with WordPress, aiming to keep installations lightweight and use only the plugins and resources required for each project.";
    document.getElementById("parraf7P").textContent="I use Phaser 3 to develop small web games with JavaScript, working with scenes, sprites, events, movement, and game logic.";
    document.getElementById("parraf8P").textContent="I use Bootstrap to develop responsive interfaces quickly, making use of its grid system and components to add value to each project.";
    document.getElementById("parraf9P").textContent="I apply technical SEO and web optimisation techniques to improve website structure, performance, and accessibility, making sites easier to crawl and index.";
}
// de inglés a español
function inglesAespanol(){
    document.getElementById("tituloH1P").textContent="Mi portafolio";
    document.getElementById("smallHeaderP").textContent="Desarrollador web";
    document.getElementById("enlace1P").textContent="Inicio";
    document.getElementById("enlace2P").textContent="Proyectos";
    btnTraducir.textContent="Traducir";
    document.getElementById("tituloH2P").textContent="Mis Habilidades";
    document.getElementById("parraf1P").textContent="Trabajo principalmente en desarrollo web, combinando frontend y backend según las necesidades de cada proyecto. Me interesa construir sitios y aplicaciones funcionales, mantener el código organizado y evitar complejidad innecesaria.";
    document.getElementById("parraf2P").textContent="Desarrollo sitios web a medida utilizando HTML y CSS, cuidando la estructura, el diseño responsive y la adaptación a distintos tamaños de pantalla.";
    document.getElementById("parraf3P").textContent="Utilizo JavaScript para añadir interactividad y lógica a los sitios web, desde pequeñas funcionalidades de interfaz hasta aplicaciones con una mayor cantidad de comportamiento dinámico.";
    document.getElementById("parraf4P").textContent="Desarrollo aplicaciones y sitios web con PHP, incluyendo la creación de funcionalidades del lado del servidor y paneles de administración.";
    document.getElementById("parraf5P").textContent="Trabajo con bases de datos SQL para almacenar consultar y gestionar la información de las aplicaciones web.";
    document.getElementById("parraf6P").textContent="Desarrollo sitios con WordPress procurando mantener una instalación ligera y utilizar únicamente los plugins y recursos necesarios para cada proyecto.";
    document.getElementById("parraf7P").textContent="Utilizo Phaser 3 para desarrollar pequeños juegos web con JavaScript, trabajando con escenas, sprites, eventos, movimiento y lógica de juego.";
    document.getElementById("parraf8P").textContent="Utilizo Bootstrap para desarrollar interfaces responsive de forma rápida, aprovechando su sistema y componentes para aportar utilidad al proyecto.";
    document.getElementById("parraf9P").textContent="Aplico técnicas de SEO técnico y optimización web para mejorar la estructura, el rendimiento y la accesibilidad de los sitios, facilitando su rastreo e indexación.";
}