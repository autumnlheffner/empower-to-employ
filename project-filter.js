/* project 3: filter student projects by category */

/* select filter buttons and gallery cards */
const filterButtons = document.querySelectorAll(".project-filter");
const projectCards = document.querySelectorAll(".project-card");

/* when a category is chosen, show its matching projects */
filterButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const category = button.dataset.filter;

        projectCards.forEach(function(card) {
            const matches = category === "all" || card.dataset.category === category;
            card.hidden = !matches;

        });

        /* show which filter is selected */
        filterButtons.forEach(function(otherButton) {
            const active = otherButton === button;
            otherButton.classList.toggle("active", active);
            otherButton.setAttribute("aria-pressed", active);
        });


    });
});
