const form = document.querySelector('form');
const input = document.querySelector('#new-task');
const list = document.querySelector('#todo-list');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const task = input.value.trim();
	if (task.length) {
		addTask(task);
		input.value = '';
	}
});

function addTask(task) {
	const li = document.createElement('li');
	li.textContent = task;
	li.addEventListener('click', completeTask);
	list.appendChild(li);
}

function completeTask() {
	this.classList.toggle('completed');
}
