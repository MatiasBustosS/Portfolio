async function loadComponent(id, file) {

    const response = await fetch(file);

    const html = await response.text();

    document.getElementById(id).innerHTML = html;
}

loadComponent("navbar", "components/navbar.html");
loadComponent("featured", "components/featured.html");
loadComponent("about", "components/about.html");
loadComponent("projects", "components/projects.html");
loadComponent("experience", "components/experience.html");
loadComponent("skills", "components/skills.html");
loadComponent("academic", "components/academic.html");
loadComponent("modals", "components/modals.html");