
var tasks = ["Task 1", "Task 2", "Task 3", "Task 4", "Task 5"];

function deleteFirstTask() {
    if (tasks.length > 0) {
        tasks.shift(); // Removes the first element of the array
        console.log("First task deleted.");
    } else {
        console.log("No tasks to delete.");
    }
}

function deleteLastTask() {
    if (tasks.length > 0) {
        tasks.pop(); // Removes the last element of the array
        console.log("Last task deleted.");
    } else {
        console.log("No tasks to delete.");
    }
}

function deleteWithIndex(index) {
    if (index >= 0 && index < tasks.length) {
        tasks.splice(index, 1); // Removes one element at the specified index
        console.log("Task at index " + index + " deleted.");
    } else {
        console.log("Invalid index or no task at index " + index + ".");
    }
}

function deleteWithName(name) {
    var index = tasks.indexOf(name);
    if (index !== -1) {
        tasks.splice(index, 1); // Removes the first occurrence of the specified name
        console.log("Task with name '" + name + "' deleted.");
    } else {
        console.log("Task with name '" + name + "' not found.");
    }
}

function deleteFromXToY(x, y) {
    if (x >= 0 && x <= y && y < tasks.length) {
        tasks.splice(x, y - x + 1); // Removes elements from index x to index y inclusive
        console.log("Tasks deleted from index " + x + " to index " + y + ".");
    } else {
        console.log("Invalid range or not enough tasks.");
    }
}
do {
var userInput = prompt(
    "Please select an option:\n" +
    "1- Delete first task\n" +
    "2- Delete last task\n" +
    "3- Delete with index\n" +
    "4- Delete with name\n" +
    "5- Delete Multi items\n" +
    "6- Delete from x to y\n" +
    "8- Home\n" +
    "0- Exit"
);

switch (userInput) {
    case "1":
        deleteFirstTask();
        console.log(tasks);
        localStorage.setItem("last update",tasks);
        break;
    case "2":
        deleteLastTask();
        console.log(tasks);
        localStorage.setItem("last update",tasks);
        break;
    case "3":
        var index = parseInt(prompt("Enter the index:"));
        deleteWithIndex(index);
        console.log(tasks);
        localStorage.setItem("last update",tasks);
        break;
    case "4":
        var name = prompt("Enter the name:");
        deleteWithName(name);
        console.log(tasks);
        localStorage.setItem("last update",tasks);
        break;
    case "5":
        let n = prompt("Enter the number of items that you want delete")
        for ( i = 0 ; i < n ; i++)
            if( n > tasks.length)
                {
                    alert("the number of delete items is more than array lenght");
                    exit();
                }
            else
                {   
                    let index = prompt("Enter the items index ");
                    deleteWithIndex(index);
                }
                console.log("The new array is ");
                console.log(tasks);
                localStorage.setItem("last update",tasks);
        break;
    case "6":
        var x = parseInt(prompt("Enter the starting index:"));
        var y = parseInt(prompt("Enter the ending index:"));
        deleteFromXToY(x, y);
        console.log(tasks);
        localStorage.setItem("last update",tasks);
        break;    
    case "7":
        //Home
    case "0":
        exit();
    default:
        alert("Invalid option selected!");
}
} while(userInput != 0 )
