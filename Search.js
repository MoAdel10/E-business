// const Names = [
//     "ahmed Ismael",
//     "Mohamed Adel",
//     "Eyad Nouman",
//     "Abdallah Elmor",
//     "Mohamed Barghout",
//     "ahmed essam",
// ];

export function SearchByIndex(array, index) {
    if (index >= 1 && index <= array.length) return array[index - 1];
    else return null;
}

export function searchByStrictName(array, name) {
    name = name.toLowerCase();
    const result = array.reduce(function (result, item, index) {
        if (item.toLowerCase().includes(name)) {
            result.push({ name: item, index: index + 1 });
        }
        return result;
    }, []);
    return result.length > 0 ? result : null;
}

export function searchByName(array, name) {
    name = name.toLowerCase();
    const result = array.reduce(function (result, item, index) {
        if (item.toLowerCase().includes(name)) {
            result.push({ name: item, index: index + 1 });
        }
        return result;
    }, []);
    return result.length > 0 ? result : null;
}

export function searchByStarting(array, name) {
    name = name.toLowerCase();
    const result = [];
    for (let index = 0; index < array.length; index++) {
        if (array[index].toLowerCase().startsWith(name)) {
            result.push({ name: array[index], index: index + 1 });
        }
    }
    return result.length > 0 ? result : null;
}

export function searchByEnding(array, name) {
    name = name.toLowerCase();
    const result = [];
    for (let index = 0; index < array.length; index++) {
        if (array[index].toLowerCase().endsWith(name)) {
            result.push({ name: array[index], index: index + 1 });
        }
    }
    return result.length > 0 ? result : null;
}

export function searchByIndexRange(array, startIndex, endIndex) {
    const result = [];
    for (let index = startIndex; index <= endIndex && index <= array.length; index++) {
        result.push({ name: array[index - 1], index: index });
    }
    return result.length > 0 ? result : null;
}

function Search(Names) {
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
            indexToSearch = parseInt(prompt("Enter the index to search:"));
            console.log(SearchByIndex(Names, indexToSearch));
            break;
        case 2:
            StrictNameToSearch = prompt("Enter the Strict name to search:");
            console.log(searchByStrictName(Names, StrictNameToSearch));
            break;
        case 3:
            nameToSearch = prompt("Enter the name to search:");
            console.log(searchByName(Names, nameToSearch));
            break;
        case 4:
            startingString = prompt("Enter the starting string to search:");
            console.log(searchByStarting(Names, startingString));
            break;
        case 5:
            endingString = prompt("Enter the ending string to search:");
            console.log(searchByEnding(Names, endingString));
            break;
        case 6:
            start = parseInt(prompt("Enter the start index:"));
            end = parseInt(prompt("Enter the end index:"));
            console.log(searchByIndexRange(Names, start, end));
            break;
        default:
            console.log("Invalid.");
    }
}

