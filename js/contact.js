// =========================
// CONTACT FORM
// =========================

const contactForm = document.getElementById("contactForm");

const contactSuccess = document.getElementById("contactSuccess");


contactForm.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();


    // Get form values

    const name = document.getElementById("contactName").value;

    const email = document.getElementById("contactEmail").value;

    const subject = document.getElementById("contactSubject").value;

    const message = document.getElementById("contactMessage").value;


    // Basic validation

    if (!name || !email || !subject || !message) {

        alert("Please complete all fields.");

        return;

    }


    // Show success message

    contactSuccess.style.display = "block";


    // Disable form fields

    contactForm
        .querySelectorAll("input, textarea, button")
        .forEach(function (element) {

            element.disabled = true;

        });


    // Scroll to success message

    contactSuccess.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});