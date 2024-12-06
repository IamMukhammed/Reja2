// TASK - G

function getHighestIndex(arr) {
    let highest = Math.max(...arr);
    return arr.indexOf(highest);
}

console.log(getHighestIndex([5, 21, 12, 18, 8]));
