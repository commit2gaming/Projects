toggleAddForm = () => {
	const formState = document.querySelector('#add-form');
	if (formState.style.display === 'none') {
        formState.style.display = 'block';
    } else {
        formState.style.display = 'none';
		}
}

cancelInput = () => {
	if (confirm("Are you sure you want to erase the data?") === true) {
		clearFields();
	}
}

createProject = () => {
	const titleInput = document.querySelector('#title-add').value;
	const descriptionInput = document.querySelector('#description-add').value;
	const creatorInput = document.querySelector('#creator-add').value;
	const dueInput = document.querySelector('#due-add').value;

	// TODO: verify inputs with regex
	if (
		titleInput === '' ||
		descriptionInput === '' ||
		creatorInput === '' ||
		dueInput === '') {

			// TODO: Create flash message
			console.log('You must fill in all the fields to create a project');
	} else {
		Project.title = titleInput;
		Project.description = descriptionInput;
		Project.creator = creatorInput;
		Project.due = new Date(dueInput);

		// Add Project to projects array
		projects.push(Project);

		// Clear input fields
		clearFields();

		addProject();
	}
}
