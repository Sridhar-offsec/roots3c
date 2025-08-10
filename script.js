document.addEventListener("DOMContentLoaded", function() {
    // Toggle dropdown menu
    document.querySelectorAll(".menu-toggle").forEach(toggle => {
        toggle.addEventListener("click", function(e) {
            e.preventDefault();

            // Close all other submenus
            document.querySelectorAll(".submenu").forEach(sub => {
                if (sub !== this.nextElementSibling) {
                    sub.classList.remove("open");
                }
            });

            // Toggle current submenu
            this.nextElementSibling.classList.toggle("open");
        });
    });

    // Highlight active menu link
    const currentLocation = window.location.pathname.split("/").pop();
    const menuLinks = document.querySelectorAll(".sidebar a");

    menuLinks.forEach(link => {
        if (link.getAttribute("href") === currentLocation) {
            link.classList.add("active");
        }
    });
});
