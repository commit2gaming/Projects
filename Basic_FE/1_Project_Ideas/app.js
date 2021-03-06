// Array of Project objects

let projects = [];

// 
// CREATE PROJECTS
// 
// Toggle Add Form
document.querySelector('#add-project').addEventListener('click', toggleAddForm);
// Create Project with Form inputs
document.querySelector('#add-project-btn').addEventListener('click', createProject);
// Cancel Form inputs
document.querySelector('#cancel-project-btn').addEventListener('click', cancelInput);


// 
// READ PROJECTS
//
// TODO: Show a few characters when looking at all the projects. Hide the rest. Make the table row clickable to expose all the info.

// 
// UPDATE PROJECTS
//

// Add multiple tasks
document.querySelector('.table-projects').addEventListener('click', toggleTaskDone);
document.querySelector('.table-projects').addEventListener('click', addTasksToProject);
// FIXME: When marking a task as completed update Progress. Change status of steps in Project

// 
// DELETE PROJECTS
//

document.querySelector('.table-projects').addEventListener('click', deleteProject);
