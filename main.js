import { 
    deleteFirstTask,
    deleteLastTask,
    deleteWithIndex,
    deleteWithName,
    deleteFromXToY
} from './Delete.js';

import {
    addToHead,
    addToTail,
    addToSpecific,
    addMultiple
} from './Add.js';

// Messages
const mainMsg = "1-Add a task\n2-Search for a task\n3-Delete a task\n4-Display tasks";
const addMsg = "1-Add to head\n2-Add to tail\n3-Add to specific place\n4-Add multiple tasks";
const addMultiMsg = "1-Add to head\n2-Add to tail\n3-Add to specific place";
const deleteMsg = "1-delete first task\n2-delete last task\n3-delete by index\n4-delete by name\n5-delete from x to y tasks";

let testArr = ["Task1", "Task2", "Task3"];


function DisplayMenu(){
    let input = prompt(mainMsg);
    if(input == null || input == ""){
        receivingInput = false
    }else{
        if(input == 1){
            let addInput = prompt(addMsg);
            
            if(addInput == 1){
                addToHead(testArr);
                console.log(testArr);
            }
            if(addInput == 2){
                addToTail(testArr);
                console.log(testArr);
            }
            if(addInput == 3){
                addToSpecific(testArr)
                console.log(testArr);
            }
            if(addInput == 4){
                addMultiple(testArr, addMultiMsg);
                console.log(testArr);
            }

        }
        if(input == 3){
            let deleteInput = prompt(deleteMsg);
            // console.log(deleteInput);

            if(deleteInput == 1){
                deleteFirstTask(testArr);
                console.log(testArr);
            }
            if(deleteInput == 2){
                deleteLastTask(testArr);
                console.log(testArr);
            }
            if(deleteInput == 3){
                let delIndex = prompt("Please provide the index of the task to delete");
                deleteWithIndex(parseInt(delIndex),testArr);
                console.log(testArr);
            }
            if(deleteInput == 4){
                let delName = prompt("Please provide the name of task to delete");
                deleteWithName(delName,testArr);
                console.log(testArr);
            }
            if(deleteInput == 5){
                let delX =  prompt("Please provide the head of the tasks to delete 'X'");
                let delY =  prompt("Please provide the tail of the tasks to delete 'Y'");
                deleteFromXToY(parseInt(delX),parseInt(delY),testArr);
                console.log(testArr);
            }

        }
    }
}


let receivingInput = true;
while(receivingInput){
    DisplayMenu();
}
