
export function displayRevers(arr) {
    console.clear()
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log((i + 1) + "- " + arr[i]);
    }
}

export function display(arr) {
    console.clear()
    arr.forEach((item, index) => {
        console.log((index + 1) + "- " + item);
    });
}

export function displaySorted(arr) {
    arr = [...arr].sort();
    console.clear()
    for (let i = 0; i < arr.length; i++) {
        console.log((i + 1) + "- " + arr[i]);
    }
}

