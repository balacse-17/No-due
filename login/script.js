function switchTab(role) {
    const tabs = document.querySelectorAll(".tab");
    tabs.forEach((tab) => tab.classList.remove("active"));

    if (role === "faculty") {
        tabs[0].classList.add("active");
    } else {
        tabs[1].classList.add("active");
    }
}

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Login clicked 🚀");
});
