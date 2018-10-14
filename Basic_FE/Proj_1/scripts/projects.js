// 
// CREATE PROJECT
// 
createProject = () => {
	// 
	let Project = {
		title: String,
		description: String,
		steps: [
			{
				task: String,
				status: Boolean = false
			}
		],
		creator: String,
		created: new Date(),
		due: new Date(),
		progress: function() {
			// Validation of status
			if (!this.steps) {
				return 0;
			} else {
				const completed = this.steps.reduce((acc, cur) => {
					return acc + cur.status;
				}, 0);
				return formatTwoDecimals(completed / this.steps.length);
			}
		}
	};

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
		Project.steps = [];
		Project.creator = creatorInput;
		Project.created = new Date();
		Project.due = new Date(dueInput);
		
		
		// Add Project to projects array
		projects.push(Project);

		// Clear input fields
		clearNewProjectFields();

		addProjectToUlList(Project, projects.length - 1);
	}
};

cancelInput = () => {
	if (confirm("Are you sure you want to erase the data?") === true) {
		clearFields();
	}
};

// 
// UPDATE PROJECT
// 
// Add tasks to project
addTasksToProject = (e) => {
	// The add task btn was clicked?
	if (e.target.parentElement.classList.contains("add-task")) {	
		let inputField = e.target.parentElement.previousElementSibling;
		

getProjectNumber = (input) => {
	const re = /[0-9]/;
	return re.exec(input);
};

		// Find Project number
		let projectNumber = getProjectNumber(inputField.className);
		

		// Validate task
		const task = getTaskFromInputField(inputField);

		if (task) {
			// Create object to add to steps
			const taskToAdd = {task: task, status: false};
			// Add task to projects vector

			projects[projectNumber].steps.push(taskToAdd);
		} else {
			alert('You must enter a valid task');
		}

		// Add task to UI
		addTaskToUI(task, inputField);

		// Clear input field
		clearNewTaskField(inputField);
	}
};

// Toggle between task done / not done
toggleTaskDone = (e) => {
	if(e.target.classList.contains('to-toggle')) {
		// Get the project number from table data
		const tdID = e.target.parentElement.parentElement;
		const projectNumber = getProjectNumber(tdID.id);

		// find on projects entry[projectNumber] the task
		let taskStatus = projects[projectNumber].steps.find(steps => steps.task === e.target.textContent);

		taskStatus.status === false ?
		taskStatus.status = true :
		taskStatus.status = false;

		e.target.classList.toggle("done");

		// Update progress
		const progress = projects[projectNumber].progress();
		updateUiProgress(progress, projectNumber);
	}
};

// 
// DELETE PROJECT
// 
deleteProject = (e) => {
	if(e.target.parentElement.classList.contains('remove-item')) {
		const projectNumber = getProjectNumber(e.target.parentElement.id);

		projects.splice(projectNumber,1);

		deleteUiTable(e.target);
	}
};



