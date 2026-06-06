async function loadComponent(id, file) {

    const response = await fetch(file);

    const html = await response.text();

    document.getElementById(id).innerHTML = html;
}

loadComponent("navbar", "componentes/navbar.html");
loadComponent("featured", "componentes/featured.html");
loadComponent("about", "componentes/about.html");
loadComponent("projects", "componentes/projects.html");
loadComponent("modals", "componentes/modals.html");
loadComponent("experience", "componentes/experience.html");
loadComponent("skills", "componentes/skills.html");
loadComponent("academic", "componentes/academic.html");