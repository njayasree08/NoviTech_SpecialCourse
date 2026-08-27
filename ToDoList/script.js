let tasks = [];

function addTask() {

    let input = document.getElementById("taskInput");

    if (input.value != "") {

        tasks.push(input.value);

        input.value = "";

        showTasks();
    }
}

function showTasks() {

    let list = document.getElementById("taskList");

    list.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {

        list.innerHTML += `
            <li>
                ${i + 1}. ${tasks[i]}
            </li>
        `;
    }
}

function clearTasks() {

    tasks = [];

    showTasks();
}