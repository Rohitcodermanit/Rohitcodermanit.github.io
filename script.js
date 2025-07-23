const words = ["Data Enthusiast", "Data Analyst", "Data Scientist"];
let wordIndex = 0;
let charIndex = 0;
const typewriterElement = document.querySelector(".typewriter");

function type() {
  if (charIndex < words[wordIndex].length) {
    typewriterElement.textContent += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    typewriterElement.textContent = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", type);




// AOS Init
AOS.init();

// Project details
const projectData = {
  1: {
    title: "Digital Music Store Data Analysis using SQL",
    image: "assets/project1.png",
    description: "Analyzed music store data using advanced SQL queries to derive insights on customer behavior, sales trends, and artist popularity.",
    github: "https://github.com/yourusername/sql-music-analysis",
    demo: "https://ravina-sql-music.vercel.app"
  },
  2: {
    title: "Data Analysis using Python for Beginners",
    image: "assets/project2.png",
    description: "Performed EDA on Diwali sales dataset using Pandas, Matplotlib, and Seaborn. Cleaned, visualized, and interpreted trends for better marketing strategy.",
    github: "https://github.com/yourusername/python-diwali-analysis",
    demo: "https://ravina-diwali-analysis.vercel.app"
  },
  3: {
    title: "Power BI Sales Dashboard Project",
    image: "assets/project3.png",
    description: "Designed a dashboard for eCommerce KPIs — revenue, customer retention, and top products — using Power BI’s DAX and slicers.",
    github: "https://github.com/yourusername/powerbi-sales-dashboard",
    demo: "https://ravina-powerbi-dashboard.vercel.app"
  }
};

function openModal(id) {
  const modal = document.getElementById("modal");
  const data = projectData[id];
  document.getElementById("modal-title").innerText = data.title;
  document.getElementById("modal-description").innerText = data.description;
  document.getElementById("modal-image").src = data.image;
  document.getElementById("github-link").href = data.github;
  document.getElementById("demo-link").href = data.demo;
  modal.style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}



