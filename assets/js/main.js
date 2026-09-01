document.addEventListener("DOMContentLoaded", () => {

    const button = document.querySelector(".invitation-btn");

    if (button) {

        button.addEventListener("mouseenter", () => {

            button.style.transition =
                "transform 0.35s ease";

        });

    }

});