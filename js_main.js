/* =========================================================
   STIL BEAUTY SALON
   GLOBAL JAVASCRIPT
========================================================= */

/* =====================================================
   BACKEND ADRESA
   Dok testiraš lokalno (XAMPP), ostavi kako jeste.
   Kad sajt bude na pravom hostingu, promeni ovo u
   pravu adresu foldera sa PHP fajlovima, npr.:
   "https://tvoj-domen.rs/booking"
===================================================== */

const API_BASE = "http://localhost/salon_booking";

/* =====================================================
   SEARCH INDEX — sadržaj svih stranica za pretragu
===================================================== */

const searchIndex = [

    {
        title: "Početna",
        url: "index.html",
        content: "STIL Beauty Salon nega lica nokti manikir pedikir obrve trepavice beauty tretmani tvoj mali trenutak za sebe"
    },
    {
        title: "Usluge",
        url: "usluge.html",
        content: "sve usluge nega lica nokti manikir pedikir obrve trepavice beauty tretmani cenovnik"
    },
    {
        title: "Nega lica",
        url: "nega-lica.html",
        content: "nega lica čišćenje hidratacija anti-age tretman koža lice osnovni tretman dubinsko čišćenje hidratantni tretman konsultacija"
    },
    {
        title: "Nokti & manikir",
        url: "nokti.html",
        content: "nokti manikir gel lak korekcija nail art klasičan manikir stilovi noktiju"
    },
    {
        title: "Pedikir",
        url: "pedikir.html",
        content: "pedikir nega stopala klasičan pedikir pedikir i lak gel lak ritual opuštanje"
    },
    {
        title: "Obrve & trepavice",
        url: "obrve-trepavice.html",
        content: "obrve trepavice oblikovanje obrva farbanje obrva lash lift farbanje trepavica pogled"
    },
    {
        title: "Galerija",
        url: "galerija.html",
        content: "galerija slike fotografije salon atmosfera enterijer"
    },
    {
        title: "O nama",
        url: "o-nama.html",
        content: "o nama priča tim STIL nega sa pažnjom ko smo mi vrednosti"
    },
    {
        title: "Cenovnik",
        url: "cenovnik.html",
        content: "cenovnik cene nega lica nokti manikir pedikir cena tretmana koliko košta"
    },
    {
        title: "Kontakt",
        url: "kontakt.html",
        content: "kontakt adresa telefon email zakazivanje termin mapa radno vreme"
    }

];

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       01. MOBILE MENU
    ===================================================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const mainNav = document.querySelector(".main-nav");

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", () => {

            menuToggle.classList.toggle("active");
            mainNav.classList.toggle("open");
            document.body.classList.toggle("menu-open");

        });

        // Zatvori meni kada se klikne na link
        mainNav.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                menuToggle.classList.remove("active");
                mainNav.classList.remove("open");
                document.body.classList.remove("menu-open");

            });

        });

    }


    /* =====================================================
       02. STICKY HEADER
    ===================================================== */

    const header = document.querySelector(".site-header");

    if (header) {

        const checkHeader = () => {

            if (window.scrollY > 30) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }

        };

        checkHeader();

        window.addEventListener(
            "scroll",
            checkHeader,
            { passive: true }
        );

    }


    /* =====================================================
       03. ACTIVE NAVIGATION
    ===================================================== */

    const currentPage =
        window.location.pathname
            .split("/")
            .pop() || "index.html";

    document.querySelectorAll(".main-nav a").forEach(link => {

        const href = link.getAttribute("href");

        if (!href) return;

        const linkPage =
            href.split("/")
                .pop()
                .split("#")[0];

        if (
            linkPage === currentPage ||
            (currentPage === "" && linkPage === "index.html")
        ) {

            link.classList.add("active");

        }

    });


    /* =====================================================
       04. SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(".reveal");

    if (revealElements.length) {

        const revealObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );

        revealElements.forEach(element => {

            revealObserver.observe(element);

        });

    }


    /* =====================================================
       05. SMOOTH ANCHOR SCROLL
    ===================================================== */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(anchor => {

        anchor.addEventListener("click", event => {

            const targetId =
                anchor.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            const headerHeight =
                header
                    ? header.offsetHeight
                    : 0;

            const targetPosition =
                target.getBoundingClientRect().top +
                window.scrollY -
                headerHeight -
                20;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });

        });

    });


    /* =====================================================
       06. GALLERY FILTER
    ===================================================== */

    const galleryFilters =
        document.querySelectorAll(
            ".gallery-filter"
        );

    const galleryPhotos =
        document.querySelectorAll(
            ".gallery-photo"
        );

    if (
        galleryFilters.length &&
        galleryPhotos.length
    ) {

        galleryFilters.forEach(filter => {

            filter.addEventListener("click", () => {

                galleryFilters.forEach(item => {
                    item.classList.remove("active");
                });

                filter.classList.add("active");

                const category =
                    filter.dataset.filter;

                galleryPhotos.forEach(photo => {

                    const photoCategory =
                        photo.dataset.category;

                    if (
                        category === "all" ||
                        photoCategory === category
                    ) {

                        photo.classList.remove(
                            "hidden"
                        );

                    } else {

                        photo.classList.add(
                            "hidden"
                        );

                    }

                });

            });

        });

    }


    /* =====================================================
       07. PRICING TABS
    ===================================================== */

    const pricingTabs =
        document.querySelectorAll(
            ".pricing-tab"
        );

    const pricingCategories =
        document.querySelectorAll(
            ".price-category"
        );

    if (
        pricingTabs.length &&
        pricingCategories.length
    ) {

        pricingTabs.forEach(tab => {

            tab.addEventListener("click", () => {

                const category =
                    tab.dataset.category;

                pricingTabs.forEach(item => {

                    item.classList.remove(
                        "active"
                    );

                });

                pricingCategories.forEach(item => {

                    item.classList.remove(
                        "active"
                    );

                });

                tab.classList.add("active");

                const target =
                    document.querySelector(
                        `.price-category[data-category="${category}"]`
                    );

                if (target) {

                    target.classList.add("active");

                }

            });

        });

    }


    /* =====================================================
       08. FAQ ACCORDION
    ===================================================== */

    const faqItems =
        document.querySelectorAll(
            ".faq-item"
        );

    if (faqItems.length) {

        faqItems.forEach(item => {

            const question =
                item.querySelector(
                    ".faq-question"
                );

            if (!question) return;

            question.addEventListener(
                "click",
                () => {

                    const isOpen =
                        item.classList.contains(
                            "open"
                        );

                    // zatvori ostale
                    faqItems.forEach(otherItem => {

                        if (
                            otherItem !== item
                        ) {

                            otherItem.classList.remove(
                                "open"
                            );

                        }

                    });

                    if (isOpen) {

                        item.classList.remove(
                            "open"
                        );

                    } else {

                        item.classList.add(
                            "open"
                        );

                    }

                }
            );

        });

    }


    /* =====================================================
       09. CONTACT FORM (zakazivanje povezano sa bazom)
    ===================================================== */

    const contactForm =
        document.querySelector(
            ".contact-form"
        );

    if (contactForm) {

        const serviceSelect = contactForm.querySelector('[name="service"]');
        const dateInput = contactForm.querySelector('[name="date"]');
        const timeSlotsGroup = document.getElementById("timeSlotsGroup");
        const timeSlotsContainer = document.getElementById("timeSlots");
        const selectedTimeInput = document.getElementById("selectedTime");
        const selectedEmployeeInput = document.getElementById("selectedEmployee");
        const submitBtn = contactForm.querySelector('.form-submit');

        // Danas kao najraniji moguci datum
        if (dateInput) {
            dateInput.min = new Date().toISOString().split("T")[0];
        }

        const nazivKategorije = {
            "nega-lica": "Nega lica",
            "nokti": "Nokti",
            "pedikir": "Pedikir",
            "obrve-trepavice": "Obrve i trepavice"
        };

        /* -------------------------
           UCITAJ USLUGE U DROPDOWN
        ------------------------- */

        function ucitajUsluge() {

            if (!serviceSelect) return;

            fetch(API_BASE + "/get-usluge.php")
                .then(res => res.json())
                .then(usluge => {

                    serviceSelect.innerHTML =
                        '<option value="" selected disabled>Izaberi uslugu</option>';

                    const grupe = {};

                    usluge.forEach(u => {
                        if (!grupe[u.kategorija]) grupe[u.kategorija] = [];
                        grupe[u.kategorija].push(u);
                    });

                    Object.keys(grupe).forEach(kategorija => {

                        const optgroup = document.createElement("optgroup");
                        optgroup.label = nazivKategorije[kategorija] || kategorija;

                        grupe[kategorija].forEach(u => {

                            const option = document.createElement("option");
                            option.value = u.id;
                            option.textContent =
                                u.naziv + " — " + u.cena.toLocaleString("sr-RS") + " RSD";

                            optgroup.appendChild(option);

                        });

                        serviceSelect.appendChild(optgroup);

                    });

                })
                .catch(() => {

                    serviceSelect.innerHTML =
                        '<option value="" selected disabled>Greška pri učitavanju usluga</option>';

                });

        }

        ucitajUsluge();


        /* -------------------------
           UCITAJ SLOBODNE TERMINE
        ------------------------- */

        function ucitajSlobodneTermine() {

            if (!serviceSelect || !dateInput || !timeSlotsGroup || !timeSlotsContainer) return;

            const uslugaId = serviceSelect.value;
            const datum = dateInput.value;

            selectedTimeInput.value = "";
            selectedEmployeeInput.value = "";

            if (!uslugaId || !datum) {
                timeSlotsGroup.style.display = "none";
                return;
            }

            timeSlotsGroup.style.display = "block";
            timeSlotsContainer.innerHTML =
                '<span class="time-slots-loading">Učitavanje termina...</span>';

            fetch(API_BASE + "/get-slobodni-termini.php?usluga_id=" + uslugaId + "&datum=" + datum)
                .then(res => res.json())
                .then(termini => {

                    if (!Array.isArray(termini) || termini.length === 0) {

                        timeSlotsContainer.innerHTML =
                            '<span class="time-slots-empty">Nema slobodnih termina za taj datum. Probaj drugi dan.</span>';

                        return;

                    }

                    timeSlotsContainer.innerHTML = "";

                    termini.forEach(t => {

                        const dugme = document.createElement("button");
                        dugme.type = "button";
                        dugme.className = "time-slot";
                        dugme.textContent = t.vreme;
                        dugme.dataset.vreme = t.vreme;
                        dugme.dataset.zaposleniId = t.zaposleni_id;

                        dugme.addEventListener("click", () => {

                            timeSlotsContainer
                                .querySelectorAll(".time-slot")
                                .forEach(el => el.classList.remove("selected"));

                            dugme.classList.add("selected");

                            selectedTimeInput.value = t.vreme;
                            selectedEmployeeInput.value = t.zaposleni_id;

                        });

                        timeSlotsContainer.appendChild(dugme);

                    });

                })
                .catch(() => {

                    timeSlotsContainer.innerHTML =
                        '<span class="time-slots-empty">Greška pri učitavanju termina.</span>';

                });

        }

        if (serviceSelect) serviceSelect.addEventListener("change", ucitajSlobodneTermine);
        if (dateInput) dateInput.addEventListener("change", ucitajSlobodneTermine);


        /* -------------------------
           SLANJE FORME
        ------------------------- */

        contactForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();

                const name = contactForm.querySelector('[name="name"]');
                const phone = contactForm.querySelector('[name="phone"]');
                const email = contactForm.querySelector('[name="email"]');
                const privacy = contactForm.querySelector('[name="privacy"]');
                const message = contactForm.querySelector(".form-message");

                if (name && name.value.trim().length < 2) {
                    name.focus();
                    showFormMessage(message, "Molimo unesite ime.", true);
                    return;
                }

                if (phone && phone.value.trim().length < 5) {
                    phone.focus();
                    showFormMessage(message, "Molimo unesite broj telefona.", true);
                    return;
                }

                if (email && !email.checkValidity()) {
                    email.focus();
                    showFormMessage(message, "Molimo unesite ispravnu e-mail adresu.", true);
                    return;
                }

                if (serviceSelect && serviceSelect.value === "") {
                    serviceSelect.focus();
                    showFormMessage(message, "Molimo izaberite uslugu.", true);
                    return;
                }

                if (!dateInput.value) {
                    dateInput.focus();
                    showFormMessage(message, "Molimo izaberite datum.", true);
                    return;
                }

                if (!selectedTimeInput.value || !selectedEmployeeInput.value) {
                    showFormMessage(message, "Molimo izaberite jedan od slobodnih termina.", true);
                    return;
                }

                if (privacy && !privacy.checked) {
                    showFormMessage(message, "Potrebna je saglasnost za kontaktiranje.", true);
                    return;
                }

                if (submitBtn) {
                    submitBtn.disabled = true;
                    submitBtn.style.opacity = "0.6";
                }

                const podaci = {
                    name: name.value.trim(),
                    phone: phone.value.trim(),
                    email: email.value.trim(),
                    service_id: serviceSelect.value,
                    date: dateInput.value,
                    time: selectedTimeInput.value,
                    employee_id: selectedEmployeeInput.value,
                    message: contactForm.querySelector('[name="message"]').value.trim(),
                    privacy: privacy.checked
                };

                fetch(API_BASE + "/obradi-zakazivanje.php", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(podaci)
                })
                    .then(res => res.json())
                    .then(data => {

                        showFormMessage(message, data.poruka, !data.uspeh);

                        if (data.uspeh) {

                            contactForm.reset();

                            if (timeSlotsGroup) timeSlotsGroup.style.display = "none";
                            if (timeSlotsContainer) timeSlotsContainer.innerHTML = "";

                        }

                    })
                    .catch(() => {

                        showFormMessage(
                            message,
                            "Došlo je do greške. Proveri konekciju i pokušaj ponovo.",
                            true
                        );

                    })
                    .finally(() => {

                        if (submitBtn) {
                            submitBtn.disabled = false;
                            submitBtn.style.opacity = "1";
                        }

                    });

            }
        );

    }


    /* =====================================================
       FORM MESSAGE HELPER
    ===================================================== */

    function showFormMessage(
        element,
        text,
        error
    ) {

        if (!element) return;

        element.textContent = text;

        element.style.color =
            error
                ? "#92763f"
                : "#3f5b4b";

    }


    /* =====================================================
       10. PHONE NUMBER FORMATTING
    ===================================================== */

    const phoneInputs =
        document.querySelectorAll(
            'input[type="tel"]'
        );

    phoneInputs.forEach(input => {

        input.addEventListener(
            "input",
            () => {

                let value =
                    input.value.replace(
                        /[^\d+ ]/g,
                        ""
                    );

                input.value = value;

            }
        );

    });


    /* =====================================================
       11. GALLERY LIGHTBOX
    ===================================================== */

    const galleryItems =
        document.querySelectorAll(
            ".gallery-photo"
        );

    if (galleryItems.length) {

        createLightbox();

        galleryItems.forEach(item => {

            item.addEventListener(
                "click",
                () => {

                    const title =
                        item.querySelector(
                            ".photo-title"
                        );

                    const category =
                        item.querySelector(
                            ".photo-category"
                        );

                    openLightbox(
                        title
                            ? title.textContent
                            : "STIL",
                        category
                            ? category.textContent
                            : "STIL BEAUTY SALON"
                    );

                }
            );

        });

    }


    /* =====================================================
       LIGHTBOX FUNCTIONS
    ===================================================== */

    function createLightbox() {

        if (
            document.querySelector(
                ".lightbox"
            )
        ) {
            return;
        }

        const lightbox =
            document.createElement("div");

        lightbox.className = "lightbox";

        lightbox.innerHTML = `

            <button
                class="lightbox-close"
                aria-label="Zatvori"
            >
                ×
            </button>

            <div class="lightbox-content">

                <div class="lightbox-visual">

                    <span
                        class="lightbox-category"
                    ></span>

                    <strong
                        class="lightbox-title"
                    >
                        STIL
                    </strong>

                </div>

            </div>

        `;

        document.body.appendChild(
            lightbox
        );


        /* -------------------------
           LIGHTBOX CSS
        ------------------------- */

        const style =
            document.createElement("style");

        style.textContent = `

            .lightbox {
                position: fixed;
                inset: 0;
                z-index: 5000;

                display: flex;
                align-items: center;
                justify-content: center;

                padding: 25px;

                background:
                    rgba(29,46,39,0.94);

                opacity: 0;
                visibility: hidden;

                transition:
                    opacity .3s ease,
                    visibility .3s ease;
            }

            .lightbox.open {
                opacity: 1;
                visibility: visible;
            }

            .lightbox-content {
                width: min(850px, 100%);
            }

            .lightbox-visual {
                min-height: 600px;

                display: flex;
                flex-direction: column;

                align-items: center;
                justify-content: center;

                position: relative;

                background:
                    linear-gradient(
                        145deg,
                        #526b59,
                        #263c32
                    );

                border:
                    1px solid
                    rgba(215,194,143,.35);
            }

            .lightbox-title {
                font-family:
                    "Cormorant Garamond",
                    serif;

                font-size:
                    clamp(60px, 10vw, 120px);

                color:
                    #f7f2e9;
            }

            .lightbox-category {
                margin-bottom: 15px;

                font-size: 10px;

                letter-spacing: 4px;

                text-transform: uppercase;

                color:
                    #d7c28f;
            }

            .lightbox-close {
                position: absolute;

                right: 25px;
                top: 20px;

                z-index: 2;

                width: 45px;
                height: 45px;

                border:
                    1px solid
                    rgba(255,255,255,.25);

                border-radius: 50%;

                color: white;

                font-size: 30px;

                cursor: pointer;
            }

            .lightbox-close:hover {
                background:
                    #b89a5b;
            }

            @media(max-width:600px) {

                .lightbox-visual {
                    min-height: 450px;
                }

            }

        `;

        document.head.appendChild(
            style
        );


        const close =
            lightbox.querySelector(
                ".lightbox-close"
            );

        close.addEventListener(
            "click",
            closeLightbox
        );


        lightbox.addEventListener(
            "click",
            event => {

                if (
                    event.target === lightbox
                ) {

                    closeLightbox();

                }

            }
        );

    }


    function openLightbox(
        title,
        category
    ) {

        const lightbox =
            document.querySelector(
                ".lightbox"
            );

        if (!lightbox) return;

        const titleElement =
            lightbox.querySelector(
                ".lightbox-title"
            );

        const categoryElement =
            lightbox.querySelector(
                ".lightbox-category"
            );

        titleElement.textContent =
            title;

        categoryElement.textContent =
            category;

        lightbox.classList.add(
            "open"
        );

        document.body.style.overflow =
            "hidden";

    }


    function closeLightbox() {

        const lightbox =
            document.querySelector(
                ".lightbox"
            );

        if (!lightbox) return;

        lightbox.classList.remove(
            "open"
        );

        document.body.style.overflow =
            "";

    }


    /* =====================================================
       12. ESC KEY
    ===================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape"
            ) {

                closeLightbox();

                if (
                    searchOverlay &&
                    searchOverlay.classList.contains("open")
                ) {

                    closeSearch();

                }

                if (
                    mainNav &&
                    mainNav.classList.contains(
                        "open"
                    )
                ) {

                    mainNav.classList.remove(
                        "open"
                    );

                    if (menuToggle) {

                        menuToggle.classList.remove(
                            "active"
                        );

                    }

                    document.body.classList.remove(
                        "menu-open"
                    );

                }

            }

        }
    );


    /* =====================================================
       18. SEARCH
    ===================================================== */

    const searchToggle = document.getElementById("searchToggle");
    const searchOverlay = document.getElementById("searchOverlay");
    const searchClose = document.getElementById("searchClose");
    const searchInput = document.getElementById("searchInput");
    const searchResults = document.getElementById("searchResults");

    function normalizeText(text) {

        return text
            .toLowerCase()
            .replace(/č|ć/g, "c")
            .replace(/š/g, "s")
            .replace(/ž/g, "z")
            .replace(/đ/g, "dj");

    }

    function openSearch() {

        if (!searchOverlay) return;

        searchOverlay.classList.add("open");

        document.body.classList.add("search-open");

        setTimeout(() => {

            if (searchInput) searchInput.focus();

        }, 150);

    }

    function closeSearch() {

        if (!searchOverlay) return;

        searchOverlay.classList.remove("open");

        document.body.classList.remove("search-open");

        if (searchInput) searchInput.value = "";

        if (searchResults) searchResults.innerHTML = "";

    }

    function runSearch(query) {

        if (!searchResults) return;

        const cleanQuery = normalizeText(query.trim());

        if (cleanQuery.length < 2) {

            searchResults.innerHTML = "";
            searchResults.classList.remove("has-results");

            return;

        }

        const matches = searchIndex.filter(page =>

            normalizeText(page.title).includes(cleanQuery) ||
            normalizeText(page.content).includes(cleanQuery)

        );

        if (matches.length === 0) {

            searchResults.innerHTML =
                '<div class="search-empty">Nema rezultata za "' + query + '"</div>';

            searchResults.classList.add("has-results");

            return;

        }

        searchResults.innerHTML = matches
            .map(page =>
                '<a href="' + page.url + '" class="search-result">' +
                    '<span class="search-result-title">' + page.title + "</span>" +
                    '<span class="search-result-arrow">→</span>' +
                "</a>"
            )
            .join("");

        searchResults.classList.add("has-results");

    }

    if (searchToggle && searchOverlay) {

        searchToggle.addEventListener("click", openSearch);

        if (searchClose) {

            searchClose.addEventListener("click", closeSearch);

        }

        searchOverlay.addEventListener("click", event => {

            if (event.target === searchOverlay) {

                closeSearch();

            }

        });

        if (searchInput) {

            searchInput.addEventListener("input", event => {

                runSearch(event.target.value);

            });

        }

    }


    /* =====================================================
       13. CURRENT YEAR
    ===================================================== */

    document.querySelectorAll(
        "[data-year]"
    ).forEach(element => {

        element.textContent =
            new Date().getFullYear();

    });


    /* =====================================================
       14. DROPDOWN MOBILE
    ===================================================== */

    const dropdownTriggers =
        document.querySelectorAll(
            ".dropdown-trigger"
        );

    dropdownTriggers.forEach(trigger => {

        trigger.addEventListener(
            "click",
            event => {

                if (
                    window.innerWidth > 800
                ) {
                    return;
                }

                event.preventDefault();

                const dropdown =
                    trigger.closest(
                        ".nav-dropdown"
                    );

                if (!dropdown) return;

                dropdown.classList.toggle(
                    "mobile-open"
                );

            }
        );

    });


    /* =====================================================
       15. BUTTON RIPPLE
    ===================================================== */

    document.querySelectorAll(
        ".btn"
    ).forEach(button => {

        button.addEventListener(
            "click",
            event => {

                const ripple =
                    document.createElement(
                        "span"
                    );

                ripple.className =
                    "button-ripple";

                const rect =
                    button.getBoundingClientRect();

                const size =
                    Math.max(
                        rect.width,
                        rect.height
                    );

                ripple.style.width =
                    `${size}px`;

                ripple.style.height =
                    `${size}px`;

                ripple.style.left =
                    `${event.clientX - rect.left - size / 2}px`;

                ripple.style.top =
                    `${event.clientY - rect.top - size / 2}px`;

                button.appendChild(
                    ripple
                );

                setTimeout(() => {

                    ripple.remove();

                }, 600);

            }
        );

    });


    /* =====================================================
       16. RIPPLE STYLE
    ===================================================== */

    const rippleStyle =
        document.createElement("style");

    rippleStyle.textContent = `

        .btn {
            position: relative;
            overflow: hidden;
        }

        .button-ripple {
            position: absolute;

            border-radius: 50%;

            background:
                rgba(255,255,255,.2);

            transform: scale(0);

            animation:
                buttonRipple .6s ease-out;

            pointer-events: none;
        }

        @keyframes buttonRipple {

            to {
                transform: scale(2.5);
                opacity: 0;
            }

        }

    `;

    document.head.appendChild(
        rippleStyle
    );


    /* =====================================================
       17. INITIAL PAGE LOAD
    ===================================================== */

    document.body.classList.add(
        "page-loaded"
    );


    console.log(
        "STIL Beauty Salon — website loaded successfully."
    );

});