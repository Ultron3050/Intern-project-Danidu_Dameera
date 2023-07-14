document.addEventListener("DOMContentLoaded", function () {
    const filterInput = document.getElementById("First_TextBox");
    const filterButton = document.getElementById("filterButton")
    const outputElement = document.getElementById("output_1");

    filterInput.addEventListener("click", function () {
        const filterValue = filterInput.value.toLowerCase();
        outputElement.innerHTML = "";

        fetch("projects.json")
            .then(response => response.json())
            .then(data => {
                const filteredProjects = data.projects.filter(project =>
                    project.name.toLowerCase().includes(filterValue)
                );

                filteredProjects.forEach(project => {
                    const listItem = document.createElement("li");
                    listItem.textContent = project.name;
                    outputElement.appendChild(listItem);
                });
            })
            .catch(error => console.error("Error:", error));
    });
});