addTasksToProject = (e) => {
	// Get event on link Add tasks
	if (e.target.parentElement.classList.contains("add-task")) {

		let inputField = e.target.parentElement.previousElementSibling;
		// Get task on input field
		let task = inputField.value;

		// Get list to add task
		const list = e.target.parentElement.parentElement.parentElement.parentElement;

		// Create task for that list
		createTask(task, list);

		inputField.value = '';
	}
}

createTask = (task, list) => {
	// Create li element
	const liTask = document.createElement('li');
	// Populate li
	liTask.innerHTML = taskContent(task);
	// Append li
	list.appendChild(liTask);
	// Clear add task field
	console.log(task);
	task.value = '';
}

taskContent = (task) => {
	return `
	<li class="task-item">
		<div>
			<input type="checkbox" class="task-completion">${task}
		</div>
	</li>
	`
}