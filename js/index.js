const menuToggle = document.getElementById("menu-toggle");
const closeMenu = document.getElementById("close-menu");
const mobileMenu = document.getElementById("mobile-menu");
const overlay = document.getElementById("overlay");

function toggleMenu() {
  mobileMenu.classList.toggle("translate-x-full");
  overlay.classList.toggle("hidden");
}

menuToggle.addEventListener("click", toggleMenu);
closeMenu.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);

//

// Case studies data with images
const caseStudies = [
  {
    id: 1,
    title: "Fitness App UI Redesign",
    description:
      "Transformed user experience with a complete redesign that increased engagement by 42%.",
    category: "Mobile App",
    gradient: "from-purple-500 to-indigo-600",
    icon: "fa-mobile-alt",
    animation: "delay-100",
    tags: ["UI/UX", "Mobile", "Fitness"],
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "E-commerce Platform Upgrade",
    description:
      "Scalable architecture implementation that reduced load times by 68% and increased conversions.",
    category: "Web Platform",
    gradient: "from-green-400 to-blue-500",
    icon: "fa-globe",
    animation: "delay-200",
    tags: ["E-commerce", "Web", "Performance"],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Business Intelligence Dashboard",
    description:
      "Created a comprehensive analytics platform that provided real-time insights and improved decision-making.",
    category: "Data Analytics",
    gradient: "from-pink-500 to-rose-500",
    icon: "fa-chart-line",
    animation: "delay-300",
    tags: ["Data", "Analytics", "Dashboard"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    title: "Healthcare Management System",
    description:
      "Developed a secure patient management system that improved efficiency by 35%.",
    category: "Healthcare Tech",
    gradient: "from-teal-500 to-cyan-600",
    icon: "fa-heartbeat",
    animation: "delay-400",
    tags: ["Healthcare", "Security", "Management"],
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    title: "FinTech Mobile Banking App",
    description:
      "Built a secure banking application with seamless transaction experience for thousands of users.",
    category: "Finance",
    gradient: "from-amber-500 to-orange-500",
    icon: "fa-credit-card",
    animation: "delay-200",
    tags: ["Finance", "Mobile", "Security"],
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    title: "Educational Platform",
    description:
      "Created an interactive learning platform serving over 50,000 students worldwide.",
    category: "EdTech",
    gradient: "from-blue-500 to-violet-600",
    icon: "fa-graduation-cap",
    animation: "delay-300",
    tags: ["Education", "E-learning", "Platform"],
    image:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
  },
];

// Function to render case studies
const renderCaseStudies = () => {
  const container = document.getElementById("case-studies-container");

  caseStudies.forEach((study) => {
    const card = document.createElement("div");
    card.className = `case-study-card bg-white rounded-xl shadow-lg overflow-hidden ${study.animation}`;
    card.id = `card-${study.id}`;

    card.innerHTML = `
                    <div class="relative h-56 overflow-hidden">
                        <img src="${study.image}" alt="${
      study.title
    }" class="w-full h-full object-cover card-image">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div class="absolute top-4 right-4">
                            <span class="px-3 py-1 bg-white text-${
                              study.color
                            }-600 text-sm font-medium rounded-full">${
      study.category
    }</span>
                        </div>
                        <div class="absolute bottom-4 left-4">
                            <h3 class="text-xl font-bold text-white">${
                              study.title
                            }</h3>
                            <div class="flex mt-2 space-x-2">
                                ${study.tags
                                  .map(
                                    (tag) =>
                                      `<span class="px-2 py-1 bg-white/20 text-white text-xs rounded-full">${tag}</span>`
                                  )
                                  .join("")}
                            </div>
                        </div>
                    </div>
                    <div class="p-6 card-content">
                        <p class="text-gray-600">${
                          study.description
                        }</p>                  
                    </div>
                `;

    container.appendChild(card);
  });
};

// Function to check if element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) * 1.2 &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll animations
function handleScrollAnimations() {
  const header = document.getElementById("section-header");
  const viewAllBtn = document.getElementById("view-all-btn");

  if (
    isInViewport(header) &&
    !header.classList.contains("animate-fade-in-up")
  ) {
    header.classList.add("animate-fade-in-up", "visible");
  }

  // Animate cards when they come into view
  caseStudies.forEach((study) => {
    const card = document.getElementById(`card-${study.id}`);
    if (card && isInViewport(card) && !card.classList.contains("visible")) {
      card.classList.add("visible");
    }
  });
}

// Initialize everything when page loads
document.addEventListener("DOMContentLoaded", () => {
  renderCaseStudies();

  // Initial check for elements in viewport
  setTimeout(handleScrollAnimations, 100);

  // Add scroll event listener
  window.addEventListener("scroll", handleScrollAnimations);
});

const servicesData = [
  {
    icon: "fas fa-laptop-code",
    title: "Web Development",
    description:
      "Custom web applications built with modern technologies for optimal performance and user experience.",
    features: ["Responsive Design", "E-commerce Solutions", "API Integration"],
  },
  {
    icon: "fas fa-mobile-alt",
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile applications for iOS and Android with intuitive user interfaces.",
    features: [
      "iOS & Android Development",
      "User Experience Design",
      "App Store Deployment",
    ],
  },
  {
    icon: "fas fa-chart-line",
    title: "Digital Marketing",
    description:
      "Data-driven marketing strategies to increase your online visibility and drive qualified traffic.",
    features: [
      "SEO Optimization",
      "Social Media Marketing",
      "Content Strategy",
    ],
  },
  {
    icon: "fas fa-cloud",
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure and services to enhance your business operations and data management.",
    features: ["Cloud Migration", "Server Management", "Data Security"],
  },
  {
    icon: "fas fa-palette",
    title: "UI/UX Design",
    description:
      "User-centered design solutions that create engaging and intuitive digital experiences for your customers.",
    features: [
      "User Research",
      "Wireframing & Prototyping",
      "Usability Testing",
    ],
  },
  {
    icon: "fas fa-database",
    title: "Data Analytics",
    description:
      "Transform your data into actionable insights with advanced analytics and visualization tools.",
    features: [
      "Business Intelligence",
      "Data Visualization",
      "Predictive Analytics",
    ],
  },
];

// Function to generate service cards
function generateServiceCards() {
  const servicesContainer = document.getElementById("services-container");

  servicesData.forEach((service) => {
    const featuresList = service.features
      .map(
        (feature) =>
          `<li class="flex items-center text-gray-700">
                        <i class="fas fa-check-circle text-blue-500 mr-2"></i>
                        <span>${feature}</span>
                    </li>`
      )
      .join("");

    const serviceCard = document.createElement("div");
    serviceCard.className =
      "service-card bg-white rounded-xl shadow-lg p-6 flex flex-col";
    serviceCard.innerHTML = `
                    <div class="icon-container w-16 h-16 gradient-bg rounded-xl flex items-center justify-center text-white text-2xl mb-6">
                        <i class="${service.icon}"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-3">${service.title}</h3>
                    <p class="text-gray-600 mb-4 flex-grow">${service.description}</p>
                    <ul class="mb-6 space-y-2">${featuresList}</ul>
                    
                `;

    servicesContainer.appendChild(serviceCard);
  });
}

// Generate the service cards when the page loads
document.addEventListener("DOMContentLoaded", generateServiceCards);
