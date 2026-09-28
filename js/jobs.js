// =========================
// JOB SEARCH
// =========================

const searchInput = document.getElementById("jobSearch");

const jobsContainer = document.getElementById("jobsContainer");

const jobCards = document.querySelectorAll(".job-card");


searchInput.addEventListener("input", function () {

    const searchTerm = searchInput.value
        .toLowerCase()
        .trim();


    let visibleJobs = 0;


    jobCards.forEach(function (card) {

        const jobText = card.textContent.toLowerCase();


        if (jobText.includes(searchTerm)) {

            card.style.display = "flex";

            visibleJobs++;

        } else {

            card.style.display = "none";

        }

    });


    // No results message

    let noResults = document.getElementById("noResults");


    if (visibleJobs === 0) {

        if (!noResults) {

            noResults = document.createElement("p");

            noResults.id = "noResults";

            noResults.textContent =
                "No jobs found. Try a different search.";

            noResults.style.color = "#68777d";

            noResults.style.fontSize = "16px";

            noResults.style.padding = "20px 0";

            jobsContainer.appendChild(noResults);

        }

    } else {

        if (noResults) {

            noResults.remove();

        }

    }

});