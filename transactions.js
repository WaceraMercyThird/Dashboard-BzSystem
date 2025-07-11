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



document.addEventListener("DOMContentLoaded", () => {
  const rowsPerPage = 5;
  const tbody = document.getElementById("tableBody");
  const paginationControls = document.getElementById("paginationControls");
  const rows = Array.from(tbody.querySelectorAll("tr"));
  let currentPage = 1;

  if (rows.length < 10) {
    rows.forEach(row => row.style.display = "");
    paginationControls.style.display = "none";
    return;
  }

  function displayPage(page) {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    rows.forEach((row, i) => {
      row.style.display = i >= start && i < end ? "" : "none";
    });
    currentPage = page;
    renderPagination();
  }

  function renderPagination() {
    const pageCount = Math.ceil(rows.length / rowsPerPage);
    paginationControls.innerHTML = "";

    const prev = document.createElement("button");
    prev.textContent = "«";
    prev.disabled = currentPage === 1;
    prev.onclick = () => displayPage(currentPage - 1);
    paginationControls.appendChild(prev);

    for (let i = 1; i <= pageCount; i++) {
      const btn = document.createElement("button");
      btn.textContent = i;
      btn.className = i === currentPage ? "active" : "";
      btn.onclick = () => displayPage(i);
      paginationControls.appendChild(btn);
    }

    const next = document.createElement("button");
    next.textContent = "»";
    next.disabled = currentPage === pageCount;
    next.onclick = () => displayPage(currentPage + 1);
    paginationControls.appendChild(next);
  }

  displayPage(1);
});
