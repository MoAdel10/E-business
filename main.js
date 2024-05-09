import {
    deleteFirstTask,
    deleteLastTask,
    deleteWithIndex,
    deleteWithName,
    deleteFromXToY,
    deleteAll
} from './Delete.js';

import {
    addToHead,
    addToTail,
    addToSpecific,
    editTask,
    addMultiple,
    editMultiple
} from './Add.js';

import {
    displayRevers,
    display,
    displaySorted
} from "./display.js"


import {
    SearchByIndex,
    searchByStrictName,
    searchByName,
    searchByStarting,
    searchByEnding,
    searchByIndexRange
} from './Search.js';




// Messages
const mainMsg = "1-Add a task\n2-Search for a task\n3-Delete a task\n4-Display tasks";
const addMsg = "1-Add to head\n2-Add to tail\n3-Add to specific place\n4-Edit task\n5-Add multiple tasks\n6-Edit multiple tasks";
const addMultiMsg = "1-Add to head\n2-Add to tail\n3-Add to specific place";
const deleteMsg = "1-Delete first task\n2-Delete last task\n3-Delete by index\n4-Delete by name\n5-Delete from x to y tasks\n6-Delete all";
const displayMsg = "1-display (enter)\n2-display in alphabetical order \n3-display reversed"
const searchMsg =
    "Search By : \n" +
    "1. index\n" +
    "2. Strict string\n" +
    "3. Normal String\n" +
    "4. starting\n" +
    "5. ending\n" +
    "6. index range"


let testArr = [];
function saveList(tasks) {
    localStorage.setItem("last_update", JSON.stringify(tasks));
}

function loadList() {
    const storedTasks = localStorage.getItem("last_update");
    testArr = JSON.parse(storedTasks);
}
//Load Data From localStorage but Help we need a delete all function because i wanna clear the localStorage T-T.
loadList();

function DisplayMenu() {
    let input = prompt(mainMsg);
    if (input == null || input == "") {
        receivingInput = false
    } else {
        if (input == 1) {
            let addInput = prompt(addMsg);

            if (addInput == 1) {
                addToHead(testArr);
                display(testArr)
            }
            if (addInput == 2) {
                addToTail(testArr);
                display(testArr)
            }
            if (addInput == 3) {
                addToSpecific(testArr)
                display(testArr)
            }
            if (addInput == 4) {
                display(testArr)
                editTask(testArr);
                display(testArr)
            }
            if (addInput == 5) {
                addMultiple(testArr, addMultiMsg);
                display(testArr)
            }
            if (addInput == 6) {
                display(testArr)
                editMultiple(testArr);
                display(testArr)
            }

        }
        if (input == 2) {
            let indexToSearch, StrictNameToSearch, nameToSearch, startingString, endingString, start, end;
            const option = parseInt(prompt(
                "Search By : \n" +
                "1. index\n" +
                "2. Strict string\n" +
                "3. Normal String\n" +
                "4. starting\n" +
                "5. ending\n" +
                "6. index range"
            ));

            
            switch (option) {
                case 1:
                    console.clear();
                    indexToSearch = parseInt(prompt("Enter the index to search:"));
                    console.log(SearchByIndex(testArr, indexToSearch));
                    break;
                case 2:
                    console.clear();
                    StrictNameToSearch = prompt("Enter the Strict name to search:");
                    console.log(searchByStrictName(testArr, StrictNameToSearch)[0].name);
                    break;
                case 3:
                    console.clear();
                    nameToSearch = prompt("Enter the name to search:");
                    console.log(searchByName(testArr, nameToSearch)[0].name);
                    break;
                case 4:
                    console.clear();
                    startingString = prompt("Enter the starting string to search:");
                    console.log(searchByStarting(testArr, startingString)[0].name);
                    break;
                case 5:
                    console.clear();
                    endingString = prompt("Enter the ending string to search:");
                    console.log(searchByEnding(testArr, endingString)[0].name);
                    break;
                case 6:
                    console.clear();
                    start = parseInt(prompt("Enter the start index:"));
                    end = parseInt(prompt("Enter the end index:"));
                    console.log(searchByIndexRange(testArr, start, end)[0].name);
                    break;
                default:
                    console.clear();
                    console.log("Invalid.");
            }

        }
        if (input == 3) {
            let deleteInput = prompt(deleteMsg);
            // console.log(deleteInput);

            if (deleteInput == 1) {
                deleteFirstTask(testArr);
                display(testArr)
            }
            if (deleteInput == 2) {
                deleteLastTask(testArr);
                display(testArr)
            }
            if (deleteInput == 3) {
                let delIndex = prompt("Please provide the index of the task to delete");
                deleteWithIndex(parseInt(delIndex), testArr);
                display(testArr)
            }
            if (deleteInput == 4) {
                let delName = prompt("Please provide the name of task to delete");
                deleteWithName(delName, testArr);
                display(testArr)
            }
            if (deleteInput == 5) {
                let delX = prompt("Please provide the head of the tasks to delete 'X'");
                let delY = prompt("Please provide the tail of the tasks to delete 'Y'");
                deleteFromXToY(parseInt(delX), parseInt(delY), testArr);
                display(testArr)
            }
            if (deleteInput == 6) {
                deleteAll(testArr);
                display(testArr)
            }

        }
        if (input == 4) {
           let dispInput = prompt(displayMsg);
           
           if(dispInput == "1" || dispInput == ""){
                display(testArr);
           }
           if(dispInput == "2"){
            displaySorted(testArr);
           }
           if(dispInput == "3"){
            displayRevers(testArr);
           }
        }
    }
}

let receivingInput = true;
while (receivingInput) {
    // Save Array Data Into localStorage.
    saveList(testArr);
    DisplayMenu();
}