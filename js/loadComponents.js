async function loadComponent(id, file) {

    const response = await fetch(file);

    const html = await response.text();

    document.getElementById(id).innerHTML = html;
}

loadComponent("navbar", "Components/navbar.html");
loadComponent("featured", "Components/featured.html");
loadComponent("about", "Components/about.html");
loadComponent("projects", "Components/projects.html");
loadComponent("experience", "Components/experience.html");
loadComponent("skills", "Components/skills.html");
loadComponent("academic", "Components/academic.html");
loadComponent("modals", "Components/modals.html");