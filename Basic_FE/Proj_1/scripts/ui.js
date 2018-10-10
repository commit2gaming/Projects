const projectsTable = document.querySelector('.table-projects');

// Create Table Row, Populate with HTML and Append to Table
addProject = () => {
	let tr = document.createElement('tr');
	tr.id = `${projects.length + 1}`;
	tr.innerHTML = createTableInput(projects.length - 1);
	projectsTable.firstElementChild.appendChild(tr)
}
createTableInput = (row) => {
	return tableInput = `
		<tr id="${projects.length}">
			<td id="${projects.length}-title" class="title-item">
				${projects[row].title}
			</td>
			<td id="${projects.length}-description" class="description-item">
				${projects[row].description}
			</td>
			<td id="${projects.length}-steps" class="steps-item">
				<ul class="task-list">
					<li class="task-item"><input type="checkbox">
						${projects[row].steps[0].task}
					</li>
				</ul>
			</td>
			<td id="${projects.length}-creator" class="creator-item">
				${projects[row].creator}
			</td>
			<td id="${projects.length}-created" class="created-item">
				${formatDate(projects[row].created)}
			</td>
			<td id="${projects.length}-due" class="due-item">
				${formatDate(projects[row].due)}
			</td>
			<td id="${projects.length}-progress" class="progress-item">
				${projects[0].progress()}
			</td>
			<td id="${projects.length}-edit" class="edit-item">
				<i class="fas fa-edit blue"></i>
			</td>
			<td id="${projects.length}-remove" class="remove-item">
				<i class="fas fa-times-circle red"></i>
			</td>
		</tr>
	`;
}
