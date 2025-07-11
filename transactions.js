document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const toggleBtn = document.getElementById("toggleBtn");
  const links = document.querySelectorAll(".sidebar-menu li");

  // Toggle sidebar
  toggleBtn.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      sidebar.classList.toggle("open");
    } else {
      sidebar.classList.toggle("collapsed");
    }
  });

  // Highlight current page
  const current = location.pathname.split("/").pop();
  links.forEach(link => {
    const anchor = link.querySelector("a");
    if (anchor.getAttribute("href") === current) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
