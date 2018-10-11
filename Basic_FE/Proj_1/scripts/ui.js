const projectsTable = document.querySelector('.table-projects');

// Create Table Row, Populate with HTML and Append to Table
addProject = () => {
	let row = projects.length - 1;
	let tr = document.createElement('tr');
	tr.id = `${row}`;
	tr.innerHTML = createTableInput(row);
	projectsTable.firstElementChild.appendChild(tr)
}

createTableInput = (row) => {
	return tableInput = `
		<tr id="${row}">
			<td id="${row}-title" class="title-item">
				${projects[row].title}
			</td>
			<td id="${row}-description" class="description-item">
				${projects[row].description}
			</td>
			<td id="${row}-steps" class="steps-item">

				<ul class="task-list">
					<li class="task-item">
						<span>
							<input type="text" class="${row}-add-task-input">
							<a href="#" class="add-task" id="${row}-add-task-btn">
								<i class="fas fa-plus-circle"></i>
							</a>
						</span>
					</li>
				</ul>

			</td>
			<td id="${row}-creator" class="creator-item">
				${projects[row].creator}
			</td>
			<td id="${row}-created" class="created-item">
				${formatDate(projects[row].created)}
			</td>
			<td id="${row}-due" class="due-item">
				${formatDate(projects[row].due)}
			</td>
			<td id="${row}-progress" class="progress-item">
				${projects[0].progress()}
			</td>
			<td id="${row}-edit" class="edit-item">
				<i class="fas fa-edit blue"></i>
			</td>
			<td id="${row}-remove" class="remove-item">
				<i class="fas fa-times-circle red"></i>
			</td>
		</tr>
	`;
}
