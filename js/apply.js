// =========================
// GET SELECTED JOB
// =========================

const urlParams = new URLSearchParams(window.location.search);

const job = urlParams.get("job");

const selectedJob = document.getElementById("selectedJob");


// Show selected job

if (job) {
    selectedJob.textContent = job;
} else {
    selectedJob.textContent = "General Application";
}


// =========================
// APPLICATION FORM
// =========================

const applicationForm = document.getElementById("applicationForm");

const successMessage = document.getElementById("successMessage");


applicationForm.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();


    // Get form values

    const fullName = document.getElementById("fullName").value;

    const email = document.getElementById("email").value;

    const phone = document.getElementById("phone").value;

    const experience = document.getElementById("experience").value;

    const message = document.getElementById("message").value;

    const resume = document.getElementById("resume").files[0];


    // Basic validation

    if (
        !fullName ||
        !email ||
        !phone ||
        !experience ||
        !message ||
        !resume
    ) {

        alert("Please complete all fields before submitting.");

        return;
    }


    // Show success message

    successMessage.style.display = "block";


    // Hide the form

    applicationForm
        .querySelectorAll(
            "input, select, textarea, button"
        )
        .forEach(function (element) {

            element.disabled = true;

        });


    // Scroll to success message

    successMessage.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});