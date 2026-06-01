
// ==============================
// NAVBAR SCROLL EFFECT
// ==============================
window.addEventListener("load", function () {
    setTimeout(() => {
        document.getElementById("preloader").style.display = "none";
    }, 1500);
});

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.padding = "15px 8%";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.08)";

    } else {

        navbar.style.padding = "20px 8%";
        navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,.06)";
    }

});




// ==============================
// COUNTER ANIMATION
// ==============================

const counters = document.querySelectorAll(".counter");

const startCounter = () => {

    counters.forEach(counter => {

        const target = +counter.getAttribute("data-target");

        let count = 0;

        const increment = target / 100;

        const updateCounter = () => {

            if (count < target) {

                count += increment;

                counter.innerText = Math.ceil(count);

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText = target + "+";
            }

        };

        updateCounter();

    });

};

// ==============================
// INTERSECTION OBSERVER
// START COUNTER WHEN VISIBLE
// ==============================

const statsSection = document.querySelector(".stats");

if (statsSection) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                startCounter();

                observer.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.3
    });

    observer.observe(statsSection);

}

// ==============================
// BACK TO TOP BUTTON
// ==============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";
    }

});

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}

// ==============================
// SMOOTH NAVIGATION SCROLL
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ==============================
// SCROLL REVEAL ANIMATION
// ==============================

const revealElements = document.querySelectorAll(
    ".about, .service-card, .why-us, .property-card, .stat-box, .testimonial-card"
);

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.1
});

revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
    element.style.transition = "all .8s ease";

    revealObserver.observe(element);

});

// ==============================
// CTA BUTTON CLICK
// ==============================

const ctaBtn = document.querySelector(".cta-btn");

if (ctaBtn) {

    ctaBtn.addEventListener("click", () => {

        const footer = document.querySelector("#contact");

        if (footer) {

            footer.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

}

// ==============================
// PROPERTY BUTTON EFFECT
// ==============================

const propertyButtons = document.querySelectorAll(".property-btn");

propertyButtons.forEach(button => {

    button.addEventListener("click", () => {

        alert("Property details page will be available soon.");

    });

});

// ==============================
// LOADER COMPLETE
// ==============================

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});

console.log("Golden Estate Loaded Successfully 🚀");