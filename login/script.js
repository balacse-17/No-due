const container = document.getElementById("container");

function adjustLayout() {
    if (window.innerWidth <= 768) {
        container.classList.add("mobile");
    } else {
        container.classList.remove("mobile");
    }
}

// run on page load
adjustLayout();

// run on screen resize
window.addEventListener("resize", adjustLayout);

// tab switch logic
function switchTab(role) {
    const tabs = document.querySelectorAll(".tab");
    tabs.forEach(tab => tab.classList.remove("active"));

    if (role === "faculty") {
        tabs[0].classList.add("active");
    } else {
        tabs[1].classList.add("active");
    }
}

// fake login submit
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Login clicked 🚀");
});
function adaptBackground() {
    if (window.innerWidth <= 768) {
        document.body.style.backgroundSize = "contain";
        document.body.style.backgroundPosition = "top center";
        document.body.style.backgroundColor = "#000"; // fills empty space
    } else {
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundColor = "";
    }
}

// run on load
adaptBackground();

// run on resize
window.addEventListener("resize", adaptBackground);
const container = document.getElementById("container");

function updateLayout() {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (isMobile) {
        container.classList.add("mobile");

        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
    } else {
        container.classList.remove("mobile");

        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
    }
}

window.addEventListener("load", updateLayout);
window.addEventListener("resize", updateLayout);
