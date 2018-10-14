const projectsTable = document.querySelector('.table-projects');

// ADD FORM
toggleAddForm = () => {
	const formState = document.querySelector('#add-form');
	if (formState.style.display === 'none') {
        formState.style.display = 'block';
    } else {
        formState.style.display = 'none';
		}
}

toggleProjects = () => {
	const mainTable = document.querySelector('.mainProjects');
	const coverPicture = document.querySelector('.cover-picture');
	if (!projects || projects.length < 1) {
		mainTable.style.display = 'none';
		coverPicture.style.display = 'block';
	} else {
		mainTable.style.display = 'block';
		coverPicture.style.display = 'none';
	}
}

// 
// CREATE PROJECT
// 

// Create Table Row, Populate with HTML and Append to Table
addProjectToUlList = (Project, pos) => {
	let tr = document.createElement('tr');
	tr.id = `${pos}`;
	tr.innerHTML = createTableInput(Project, pos);
	projectsTable.firstElementChild.appendChild(tr);
	toggleProjects();
}

createTableInput = (Project, pos) => {
	return tableInput = `
		<tr id="${pos}">
			<td id="${pos}-title" class="title-item">
				${Project.title}
			</td>
			<td id="${pos}-description" class="description-item">
				${Project.description}
			</td>
			<td id="${pos}-steps" class="steps-item">

				<ul class="task-list">
					<li class="task-item">
							<input type="text" class="${pos}-add-task-input">
							<a href="#" class="add-task" id="${pos}-add-task-btn">
								<i class="fas fa-plus-circle"></i>
							</a>
					</li>
				</ul>

			</td>
			<td id="${pos}-creator" class="creator-item">
				${Project.creator}
			</td>
			<td id="${pos}-created" class="created-item">
				${formatDate(Project.created)}
			</td>
			<td id="${pos}-due" class="due-item">
				${formatDate(Project.due)}
			</td>
			<td id="${pos}-progress" class="progress-item">
				0
			</td>
			<td id="${pos}-edit" class="edit-item">
				<i class="fas fa-edit blue"></i>
			</td>
			<td id="${pos}-remove" class="remove-item">
				<i class="fas fa-times-circle red"></i>
			</td>
		</tr>
	`;
}

// 
// UPDATE PROJECT
// 

// Create the task
createTask = (task, ul) => {
	// Create li element
	const li = document.createElement('li');
	// Add class to created li
	li.className = "to-toggle";
	// Populate li
	li.innerHTML = task;
	// Append li
	ul.appendChild(li);
	// Clear add task field
	task.value = '';
}

addTaskToUI = (task, inputField) => {	
	// Get ul from inputField
	const ul = inputField.parentElement.parentElement;

	// Create task for that list
	createTask(task, ul);
};


deleteUiTable = (target) => {
	const row = target.parentNode.parentNode.rowIndex;
	document.querySelector('.table-projects').deleteRow(row);
	toggleProjects();
}

updateUiProgress = (progress, pos) => {
	const td = document.getElementById(`${pos}-progress`);
	td.innerText = progress;
}
