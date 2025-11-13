// ---------- Dark Mode Toggle ----------
const themeBtn = document.getElementById("theme-btn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  themeBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// ---------- Projects Data ----------
const projects = [
  {
    title: "Responsive Portfolio",
    description: "A mobile-friendly personal portfolio site built using HTML, CSS, and JS.",
  },
  {
    title: "Dark Mode Toggle",
    description: "A simple feature to switch between light and dark themes.",
  },
  {
    title: "Dynamic Projects Section",
    description: "Project cards generated automatically from a JavaScript array.",
  }
];

// ---------- Generate Project Cards ----------
const container = document.getElementById("project-container");

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "project-card";

  const title = document.createElement("h3");
  title.textContent = project.title;

  const desc = document.createElement("p");
  desc.textContent = project.description;

  card.appendChild(title);
  card.appendChild(desc);
  container.appendChild(card);
});

// ---------- Contact Form ----------
const form = document.getElementById("contact-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  console.log("Form Submitted:", { name, email, message });

  alert(`Thank you, ${name}! Your message has been received.`);
  form.reset();
});

