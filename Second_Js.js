function loadItem() {
    fetch('projects.json')
        .then(response => response.json())
        .then(data => {
            console.log(data.projects);
            var lis = document.getElementById("output");
            lis.innerHTML = '';

            var textBoxValue = document.getElementById("First_TextBox").value;
            var filteredProjects = data.projects.filter(project => project.name.toLowerCase().includes(textBoxValue.toLowerCase()));
           
                

            var limit = 10;
            for (let index = 0; index < limit && index < filteredProjects.length; index++) {
                var outputdiv = document.createElement("div");
                outputdiv.innerHTML = filteredProjects[index].id + ") " + filteredProjects[index].name;
                
                lis.appendChild(outputdiv);
                
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}