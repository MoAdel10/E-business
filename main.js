import { 
    deleteFirstTask,
    deleteLastTask,
    deleteWithIndex,
    deleteWithName,
    deleteFromXToY
} from './Delete.js';

// Messages
const mainMsg = "1-Add a task\n2-Search for a task\n3-Delete a task\n4-Display tasks"
const deleteMsg = "1-delete first task\n2-delete last task\n3-delete by index\n4-delete by name\n5-delete from x to y tasks";

let testArr = ["t1","t2","t3","t4"];


function DisplayMenu(){
    let input = prompt(mainMsg);
    if(input == null || input == ""){
        receivingInput = false
    }else{
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
