// Script sederhana untuk tab switching di bagian "Trusted"
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tabs button");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
    });
  });
});

const tabs = document.querySelectorAll(".tab-btn");
  const title = document.getElementById("card-title");
  const desc = document.getElementById("card-desc");
  const img = document.getElementById("card-img");

  const content = {
    facility: {
      title: "Optimize Your Operations",
      desc: "Manage assets, spaces, and maintenance schedules effortlessly – without starting from scratch.",
      img: "facility.jpg"
    },
    hr: {
      title: "Empower Your Team",
      desc: "Onboard new hires, manage HR workflows, and boost employee engagement with ease.",
      img: "hr.jpg"
    },
    reporting: {
      title: "Smarter Reporting",
      desc: "Generate insights with powerful reporting tools tailored to your organization’s needs.",
      img: "reporting.jpg"
    },
    cloud: {
      title: "Cloud-agnostic Deployments",
      desc: "Deploy across multiple cloud environments without vendor lock-in.",
      img: "cloud.jpg"
    }
  };

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(btn => btn.classList.remove("active"));
      tab.classList.add("active");

      const key = tab.dataset.tab;
      title.textContent = content[key].title;
      desc.textContent = content[key].desc;
      img.src = content[key].img;
      img.alt = content[key].title;
    });
  });

    const fadeElements = document.querySelectorAll('.fade-up');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.2 });

  fadeElements.forEach(el => observer.observe(el));