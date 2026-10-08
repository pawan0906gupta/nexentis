const header = document.getElementById("header");
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 20);
});

menuToggle?.addEventListener("click", () => {
  nav.classList.toggle("open");
});

nav?.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

const filterButtons = document.querySelectorAll("#filters button");
const cards = document.querySelectorAll(".news-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;
    cards.forEach(card => {
      const tags = card.dataset.tags.split(" ");
      card.style.display = filter === "all" || tags.includes(filter) ? "" : "none";
    });
  });
});
