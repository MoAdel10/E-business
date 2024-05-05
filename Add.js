

export function addToHead(tasks){
    var task = prompt("Please provide task name");
    if (task !== "") tasks.unshift(task);
    else console.log("Task addition cancelled.");
}

export function addToTail(tasks){
    var task = prompt("Please provide task name");
    if (task !== "") tasks.push(task);
    else console.log("Task addition cancelled.");
}

export function addToSpecific(tasks, repeats = 1){
    for(let i = 1; i <= repeats; i++){
        var index = parseInt(prompt("Please provide the place"));
        if (index >= 1 && index < (tasks.length + 1)) {
            var task = prompt("Please provide task name");
            if (task !== "") tasks.splice(index - 1, 0, task);
            else console.log("Task addition cancelled.");
        } else {
            console.log("Invalid index or no task at index " + index + ".");
        }
    }
}

export function addMultiple(tasks, addMsg){
    var choice = parseInt(prompt("You can add up to 5 tasks at the same time"));
    const repeatOperation = (times, operation) => {
        for (let i = 1; i <= times; i++) {
            operation();
        }
    }
    if(choice > 0 && choice <= 5){
    var addChoice = prompt(addMsg);
    if(addChoice == 1) repeatOperation(choice, () => addToHead(tasks));
    if(addChoice == 2) repeatOperation(choice, () => addToTail(tasks));
    if(addChoice == 3) addToSpecific(tasks, choice)
    } else {
        console.log("Invalid value or out of range");
    }
}