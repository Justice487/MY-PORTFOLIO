/*==================================================
 Justice Portfolio Website v1.0
 File: script.js
 Author: Justice Enyinnaya Osuchukwu
===================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=================================
      SELECTORS
    =================================*/

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");
    const navItems = document.querySelectorAll(".nav-links a");
    const scrollTop = document.querySelector(".scroll-top");
    const header = document.querySelector("header");
    const sections = document.querySelectorAll("section");

    /*=================================
      MOBILE MENU
    =================================*/

    if (menuBtn) {
        menuBtn.addEventListener("click", () => {
            navLinks.classList.toggle("active");

            const icon = menuBtn.querySelector("i");

            if (navLinks.classList.contains("active")) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-times");
            } else {
                icon.classList.remove("fa-times");
                icon.classList.add("fa-bars");
            }
        });
    }

    navItems.forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            const icon = menuBtn.querySelector("i");

            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");

        });

    });

    /*=================================
      HEADER & SCROLL BUTTON
    =================================*/

    function scrollEffects() {

        if (window.scrollY > 80) {

            header.style.boxShadow = "0 12px 30px rgba(0,0,0,.08)";
            header.style.background = "#ffffff";

        } else {

            header.style.boxShadow = "none";

        }

        if (window.scrollY > 400) {

            scrollTop.classList.add("active");

        } else {

            scrollTop.classList.remove("active");

        }

        highlightNavigation();

    }

    window.addEventListener("scroll", scrollEffects);

    /*=================================
      SCROLL TO TOP
    =================================*/

    scrollTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

    /*=================================
      ACTIVE NAVIGATION
    =================================*/

    function highlightNavigation() {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            const sectionHeight = section.clientHeight;

            if (window.pageYOffset >= sectionTop &&
                window.pageYOffset < sectionTop + sectionHeight) {

                current = section.getAttribute("id");

            }

        });

        navItems.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    }

    /*=================================
      SMOOTH SCROLL
    =================================*/

    navItems.forEach(link => {

        link.addEventListener("click", e => {

            const target = document.querySelector(link.getAttribute("href"));

            if (target) {

                e.preventDefault();

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

    /*=================================
      INTERSECTION OBSERVER
    =================================*/

    const reveals = document.querySelectorAll(

        ".project-card, .timeline-item, .research-card, .skill-box, .qualification-card, .achievement-card, .contact-item"

    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0px)";

            }

        });

    }, {

        threshold: 0.15

    });

    reveals.forEach(item => {

        item.style.opacity = "0";
        item.style.transform = "translateY(40px)";
        item.style.transition = ".8s ease";

        observer.observe(item);

    });

    /*=================================
      CONTACT FORM
    =================================*/

    const form = document.querySelector(".contact-form");

    if (form) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            const button = this.querySelector("button");

            const original = button.innerHTML;

            button.innerHTML = "Sending...";

            button.disabled = true;

            setTimeout(() => {

                alert("Thank you! Your message has been received.");

                form.reset();

                button.innerHTML = original;

                button.disabled = false;

            }, 1200);

        });

    }

    /*=================================
      HERO TYPING EFFECT
    =================================*/

    const title = document.querySelector(".hero h2");

    if (title) {

        const words = [

            "Building Technologist",

            "Construction Professional",

            "Site Supervisor",

            "CAD Designer",

            "Project Coordinator"

        ];

        let index = 0;

        setInterval(() => {

            title.style.opacity = "0";

            setTimeout(() => {

                title.textContent = words[index];

                title.style.opacity = "1";

                index++;

                if (index >= words.length) index = 0;

            }, 300);

        }, 3000);

    }

    /*=================================
      CURRENT YEAR
    =================================*/

    const year = document.querySelector(".current-year");

    if (year) {

        year.textContent = new Date().getFullYear();

    }

});

/*==================================================
 END OF FILE
===================================================*/