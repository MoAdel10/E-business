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



// Messages
const mainMsg = "1-Add a task\n2-Search for a task\n3-Delete a task\n4-Display tasks";
const addMsg = "1-Add to head\n2-Add to tail\n3-Add to specific place\n4-Edit task\n5-Add multiple tasks\n6-Edit multiple tasks";
const addMultiMsg = "1-Add to head\n2-Add to tail\n3-Add to specific place";
const deleteMsg = "1-Delete first task\n2-Delete last task\n3-Delete by index\n4-Delete by name\n5-Delete from x to y tasks\n6-Delete all";

let testArr = [];
function saveList(tasks) { 
    localStorage.setItem("last_update", JSON.stringify(tasks));
}

function loadList() {
    const storedTasks = localStorage.getItem("last_update");
    testArr= JSON.parse(storedTasks);
}
//Load Data From localStorage but Help we need a delete all function because i wanna clear the localStorage T-T.
loadList();

function DisplayMenu(){
    let input = prompt(mainMsg);
    if(input == null || input == ""){
        receivingInput = false
    }else{
        if(input == 1){
            let addInput = prompt(addMsg);
            
            if(addInput == 1){
                addToHead(testArr);
                display(testArr)
            }
            if(addInput == 2){
                addToTail(testArr);
                display(testArr)
            }
            if(addInput == 3){
                addToSpecific(testArr)
                display(testArr)
            }
            if(addInput == 4){
                display(testArr)
                editTask(testArr);
                display(testArr)
            }
            if(addInput == 5){
                addMultiple(testArr, addMultiMsg);
                display(testArr)
            }
            if(addInput == 6){
                display(testArr)
                editMultiple(testArr);
                display(testArr)
            }
            
        }
        if(input == 3){
            let deleteInput = prompt(deleteMsg);
            // console.log(deleteInput);
            
            if(deleteInput == 1){
                deleteFirstTask(testArr);
                display(testArr)
            }
            if(deleteInput == 2){
                deleteLastTask(testArr);
                display(testArr)
            }
            if(deleteInput == 3){
                let delIndex = prompt("Please provide the index of the task to delete");
                deleteWithIndex(parseInt(delIndex),testArr);
                display(testArr)
            }
            if(deleteInput == 4){
                let delName = prompt("Please provide the name of task to delete");
                deleteWithName(delName,testArr);
                display(testArr)
            }
            if(deleteInput == 5){
                let delX =  prompt("Please provide the head of the tasks to delete 'X'");
                let delY =  prompt("Please provide the tail of the tasks to delete 'Y'");
                deleteFromXToY(parseInt(delX),parseInt(delY),testArr); 
                display(testArr)
            }
            if(deleteInput == 6){
                deleteAll(testArr);
                display(testArr)
            }

        }
        if(input == 4){
            display(testArr)
        }
    }
}

let receivingInput = true;
while(receivingInput){
    // Save Array Data Into localStorage.
    saveList(testArr);
    DisplayMenu();
}