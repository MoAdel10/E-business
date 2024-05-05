// tasks.js

// const tasks = ["Task 1", "Task 2", "Task 3", "Task 4", "Task 5"];

export function deleteFirstTask(tasks) {
    if (tasks.length > 0) {
        tasks.shift();
    } else {
        console.log("No tasks to delete.");
    }
}

export function deleteLastTask(tasks) {
    if (tasks.length > 0) {
        tasks.pop();
    } else {
        console.log("No tasks to delete.");
    }
}

export function deleteWithIndex(index,tasks) {
    if (index >= 1 && index < (tasks.length + 1)) {
        tasks.splice((index - 1), 1);
    } else {
        console.log("Invalid index or no task at index " + index + ".");
    }
}

export function deleteWithName(name,tasks) {
    const index = tasks.indexOf(name);
    if (index !== -1) {
        tasks.splice(index, 1);
    } else {
        console.log("Task with name '" + name + "' not found.");
    }
}

export function deleteFromXToY(x, y,tasks) {
    if (x >= 1 && x <= y && y < (tasks.length + 1)) {
        tasks.splice((x - 1), (y - x + 1));
    } else {
        console.log("Invalid range or not enough tasks.");
    }
}

export function deleteAll(tasks){
    tasks.splice(0, tasks.length);
}