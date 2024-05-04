// Importing delete functions from Delete.js
import { 
    deleteFirstTask,
    deleteLastTask,
    deleteWithIndex,
    deleteWithName,
    deleteFromXToY
} from './Delete.js';

// Messages
const mainMsg = "1-Add a task\n2-Search for a task\n3-Delete a task\n4-Display tasks";
const deleteMsg = "1-delete first task\n2-delete last task\n3-delete by index\n4-delete by name\n5-delete from x to y tasks\n6-delete multiple tasks";

let testArr = ["t1", "t2", "t3", "t4"];

function updateLocalStorage(){
    localStorage.setItem("last_update", testArr.join(',')); // Join array elements into a string
}

function getTasksFromStorage() {
    let stored = localStorage.getItem("last_update");
    
    if (stored) {
        let tasks = stored.split(','); // Split stored string into an array
        return tasks;
    } else {
        return [];
    }
}

// Function to separate a string into an array
function separateString(string) {
    var array = string.split(',');
    return array;
}

function DisplayMenu(){
    let input = prompt(mainMsg);
    if (input == null) {
        receivingInput = false;
    } else {
        if (input == 3) {
            let deleteInput = prompt(deleteMsg);

            if (deleteInput == 1) {
                deleteFirstTask(testArr);
            }
            if (deleteInput == 2) {
                deleteLastTask(testArr);
            }
            if (deleteInput == 3) {
                let delIndex = prompt("Please provide the index of the task to delete");
                deleteWithIndex(parseInt(delIndex), testArr);
            }
            if (deleteInput == 4) {
                let delName = prompt("Please provide the name of task to delete");
                deleteWithName(delName, testArr);
            }
            if (deleteInput == 5) {
                let delX = prompt("Please provide the head of the tasks to delete 'X'");
                let delY = prompt("Please provide the tail of the tasks to delete 'Y'");
                deleteFromXToY(parseInt(delX), parseInt(delY), testArr);
            }
            if (deleteInput == 6) {
                let multiInput = prompt("Please provide the indices of the desired tasks to delete as this format [task1,task2,....]");
                let indices = separateString(multiInput);
                for (let i = 0; i < indices.length; i++) {
                    deleteWithIndex(parseInt(indices[i]), testArr);
                }
            }

            updateLocalStorage(); // Update local storage after modifications
            console.log(getTasksFromStorage()); // Display updated tasks from local storage
        }
    }
}

let receivingInput = true;
while (receivingInput) {
    DisplayMenu();
}
