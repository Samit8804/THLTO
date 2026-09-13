/* =========================================
   THLTO MAIN JAVASCRIPT
   File: js/script.js
========================================= */

document.addEventListener("DOMContentLoaded", () => {
  /* =========================================
     MOBILE NAVIGATION
  ========================================= */

  const menuButton = document.querySelector(".menu-btn");
  const navMenu = document.querySelector(".nav-menu");

  if (menuButton && navMenu) {
    menuButton.addEventListener("click", () => {
      navMenu.classList.toggle("show-menu");

      const icon = menuButton.querySelector("i");

      if (icon) {
        if (navMenu.classList.contains("show-menu")) {
          icon.classList.remove("fa-bars");
          icon.classList.add("fa-xmark");
        } else {
          icon.classList.remove("fa-xmark");
          icon.classList.add("fa-bars");
        }
      }
    });

    /* Close mobile menu after clicking a link */

    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");

        const icon = menuButton.querySelector("i");

        if (icon) {
          icon.classList.remove("fa-xmark");
          icon.classList.add("fa-bars");
        }
      });
    });
  }

  /* =========================================
     DESTINATION FILTER BUTTONS
  ========================================= */

  const destinationFilters = document.querySelectorAll(".destination-filter");
  const destinationCards = document.querySelectorAll(".destination-card");

  destinationFilters.forEach((button) => {
    button.addEventListener("click", function () {
      destinationFilters.forEach((item) => {
        item.classList.remove("active");
      });

      this.classList.add("active");

      const selectedFilter = this.dataset.filter || "all";

      destinationCards.forEach((card) => {
        const category = card.dataset.category || "";
        card.hidden = selectedFilter !== "all" && category !== selectedFilter;
      });
    });
  });

  /* =========================================
     NEWS & EVENTS FILTER BUTTONS
  ========================================= */

  const newsFilters = document.querySelectorAll(
    ".news-filter, .news-event-filter",
  );

  newsFilters.forEach((button) => {
    button.addEventListener("click", function () {
      newsFilters.forEach((item) => {
        item.classList.remove("active");
      });

      this.classList.add("active");

      const selectedFilter =
        this.dataset.filter || this.textContent.trim().toLowerCase();

      const newsItems = document.querySelectorAll(
        ".news-list-item, .news-item, .event-item, .news-event-item, .featured-news-card",
      );

      newsItems.forEach((item) => {
        const category = item.dataset.category?.toLowerCase() || "";

        item.hidden =
          selectedFilter !== "all" &&
          selectedFilter !== "all updates" &&
          category !== selectedFilter;
      });
    });
  });

  /* =========================================
     UPDATE FEATURED NEWS ITEM
  ========================================= */

  const featuredCard = document.querySelector("#featuredNewsCard");
  const newsCards = document.querySelectorAll(".news-list-item");

  if (featuredCard) {
    const featuredImage = featuredCard.querySelector("#featuredImage");
    const featuredDay = featuredCard.querySelector("#featuredDay");
    const featuredMonth = featuredCard.querySelector("#featuredMonth");
    const featuredCategory = featuredCard.querySelector("#featuredCategory");
    const featuredTitle = featuredCard.querySelector("#featuredTitle");
    const featuredDescription = featuredCard.querySelector(
      "#featuredDescription",
    );
    const featuredDate = featuredCard.querySelector("#featuredDate");
    const featuredLocation = featuredCard.querySelector("#featuredLocation");

    newsCards.forEach((card) => {
      card.addEventListener("click", () => {
        const title = card.dataset.title || "News & Events";

        featuredCard.classList.remove("is-swapping");
        void featuredCard.offsetWidth;
        featuredCard.classList.add("is-swapping");

        if (featuredImage) {
          featuredImage.src = card.dataset.image || "";
          featuredImage.alt = title;
        }

        if (featuredDay) featuredDay.textContent = card.dataset.day || "";
        if (featuredMonth) {
          featuredMonth.textContent = card.dataset.month || "";
        }
        if (featuredCategory) {
          featuredCategory.textContent = card.dataset.categoryName || "";
        }
        if (featuredTitle) featuredTitle.textContent = title;
        if (featuredDescription) {
          featuredDescription.textContent = card.dataset.description || "";
        }
        if (featuredDate) featuredDate.textContent = card.dataset.date || "";
        if (featuredLocation) {
          featuredLocation.textContent = card.dataset.location || "";
        }

        featuredCard.scrollIntoView({ behavior: "smooth", block: "start" });

        window.setTimeout(() => {
          featuredCard.classList.remove("is-swapping");
        }, 700);
      });
    });
  }

  /* =========================================
     CLICKABLE NEWS / EVENT CARDS

     Add data-url="your-page.html"
     to any card that should open a page.
  ========================================= */

  const clickableItems = document.querySelectorAll("[data-url]");

  clickableItems.forEach((item) => {
    item.style.cursor = "pointer";

    item.addEventListener("click", function (event) {
      /*
       Prevent redirect when clicking an existing
       link inside the card.
      */

      if (event.target.closest("a")) {
        return;
      }

      const url = this.dataset.url;

      if (url) {
        window.location.href = url;
      }
    });
  });

  /* =========================================
     NEWSLETTER FORM
  ========================================= */

  const newsletterForms = document.querySelectorAll(".newsletter-form");

  newsletterForms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const emailInput = form.querySelector('input[type="email"]');

      if (!emailInput) {
        return;
      }

      const email = emailInput.value.trim();

      if (!email) {
        return;
      }

      /*
       Backend/API integration can be added here.
      */

      alert("Thank you for subscribing!");

      form.reset();
    });
  });
});

/* =========================
   CONTACT FORM
========================= */

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = contactForm.querySelector('input[name="name"]').value.trim();

    const email = contactForm.querySelector('input[name="email"]').value.trim();

    const message = contactForm
      .querySelector('textarea[name="message"]')
      .value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all required fields.");

      return;
    }

    alert("Thank you, " + name + "! Your message has been received.");

    contactForm.reset();
  });
}

/* =========================
   NEWSLETTER
========================= */

const newsletterForm = document.getElementById("newsletterForm");

if (newsletterForm) {
  newsletterForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = newsletterForm.querySelector("input").value.trim();

    if (!email) {
      alert("Please enter your email address.");

      return;
    }

    alert("Thank you for subscribing!");

    newsletterForm.reset();
  });
}

/* =========================
   CLOSE MOBILE MENU
========================= */

document.querySelectorAll(".navigation a").forEach(function (link) {
  link.addEventListener("click", function () {
    navigation.classList.remove("mobile-navigation");
  });
});
