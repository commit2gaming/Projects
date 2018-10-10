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
		document.querySelector('#title-add').value = '';
		document.querySelector('#description-add').value = '';
		document.querySelector('#task-add').value = '';
		document.querySelector('#creator-add').value = '';
		document.querySelector('#due-add').value = '';
	}
}

createProject = () => {
	const titleInput = document.querySelector('#title-add').value;
	const descriptionInput = document.querySelector('#description-add').value;
	const taskInput = document.querySelector('#task-add').value;
	const creatorInput = document.querySelector('#creator-add').value;
	const dueInput = document.querySelector('#due-add').value;

	// TODO: verify inputs with regex
	if (
		titleInput === '' ||
		descriptionInput === '' ||
		taskInput === '' ||
		creatorInput === '' ||
		dueInput === '') {

			// TODO: Create flash message
			console.log('You must fill in all the fields to create a project');
	} else {
		Project.title = titleInput;
		Project.description = descriptionInput;
		Project.steps[0].task = taskInput;
		Project.creator = creatorInput;
		Project.due = new Date(dueInput);

		// Add Project to projects array
		projects.push(Project);

		addProject();
	}
}
