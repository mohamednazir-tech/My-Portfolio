function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open"); 
}

async function loadProjects() {
  try {
    const res = await fetch("http://localhost:4000/projects");
    const projects = await res.json();

    const projectList = document.getElementById("project-list");
    projectList.innerHTML = "";

    projects.forEach(project => {
      const container = document.createElement("div");
      container.classList.add("details-container", "color-container");

      container.innerHTML = `
        <div class="article-container">
          <img src="${project.image}" alt="${project.name}" class="project-img" />
        </div>
        <h2 class="experience-sub-title project-title">${project.name}</h2>
        <div class="btn-container">
          <button class="btn btn-color-2 project-btn" onclick="window.open('${project.live}', '_blank')">Live Demo</button>
          <button class="btn btn-color-2 project-btn" onclick="window.open('${project.github}', '_blank')">Github</button>
        </div>
      `;

      projectList.appendChild(container);
    });
  } catch (err) {
    console.error("Failed to load projects:", err);
  }
}

// Call function on page load
window.addEventListener("DOMContentLoaded", loadProjects);

