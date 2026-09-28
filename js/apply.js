// ================= APPLICATION PAGE =================

// Get job name from URL
const urlParams = new URLSearchParams(window.location.search);
const job = urlParams.get("job");

// Selected job display
const selectedJob = document.getElementById("selectedJob");

if (job) {
    selectedJob.textContent = job;
} else {
    selectedJob.textContent = "General Application";
}


// Get form and success message
const applicationForm = document.getElementById("applicationForm");
const successMessage = document.getElementById("successMessage");


// ================= FORM SUBMISSION =================

applicationForm.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();


    // Get form values
    const fullName = document.getElementById("fullName").value.trim();

    const email = document.getElementById("email").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const experience = document.getElementById("experience").value;

    const qualification =
        document.getElementById("qualification").value.trim();

    const skills =
        document.getElementById("skills").value.trim();

    const message =
        document.getElementById("message").value.trim();

    const resume =
        document.getElementById("resume").files[0];


    // ================= REQUIRED FIELD VALIDATION =================

    if (
        !fullName ||
        !email ||
        !phone ||
        !experience ||
        !qualification ||
        !skills ||
        !message ||
        !resume
    ) {

        alert("Please complete all fields before submitting.");

        return;
    }


    // ================= EMAIL VALIDATION =================

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        alert("Please enter a valid email address.");

        return;
    }


    // ================= PHONE VALIDATION =================

    const phonePattern =
        /^[0-9+\-\s()]{10,15}$/;

    if (!phonePattern.test(phone)) {

        alert("Please enter a valid phone number.");

        return;
    }


    // ================= RESUME VALIDATION =================

    const allowedExtensions = [
        "pdf",
        "doc",
        "docx"
    ];

    const fileName =
        resume.name.toLowerCase();

    const fileExtension =
        fileName.split(".").pop();

    if (!allowedExtensions.includes(fileExtension)) {

        alert("Please upload your resume in PDF, DOC or DOCX format.");

        return;
    }


    // ================= SHOW SUCCESS =================

    successMessage.style.display = "flex";


    // Disable form after successful submission
    applicationForm
        .querySelectorAll("input, select, textarea, button")
        .forEach(function (element) {

            element.disabled = true;

        });


    // Scroll to success message
    successMessage.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});