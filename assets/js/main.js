document.addEventListener("DOMContentLoaded", () => {

    // ==============================
    // PAGE LOADER
    // ==============================

    const loader = document.createElement("div");

    loader.className = "page-loader";

    loader.innerHTML = `
        <div class="loader-content">
            <div class="loader-icon">🎓</div>
            <h2>GIET Polytechnic</h2>
            <p>Teachers' Day Celebration</p>

            <div class="loader-line">
                <span></span>
            </div>
        </div>
    `;

    document.body.appendChild(loader);


    // Hide loader after page loads

    window.addEventListener("load", () => {

        setTimeout(() => {

            loader.classList.add("loader-hidden");

        }, 700);

    });


    // ==============================
    // SMOOTH PAGE EXIT
    // ==============================

    const links = document.querySelectorAll("a[href]");

    links.forEach(link => {

        link.addEventListener("click", function (event) {

            const href = this.getAttribute("href");


            // Ignore external links and empty links

            if (
                !href ||
                href.startsWith("#") ||
                href.startsWith("http") ||
                href.startsWith("mailto:")
            ) {
                return;
            }


            event.preventDefault();


            document.body.classList.add("page-exit");


            setTimeout(() => {

                window.location.href = href;

            }, 450);

        });

    });

});