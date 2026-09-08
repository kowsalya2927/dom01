let darkButton = document.getElementById("darkButton");
darkButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        darkButton.textContent = "Normal Mode";
    } else {
        darkButton.textContent = "Dark Mode";
    }
});