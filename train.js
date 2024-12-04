// TASK - F

function findDoublers(s) {
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === s[i + 1]) {
            return true;
        }
    }
    return false;
}

console.log(findDoublers("hello"));
console.log(findDoublers("name"));