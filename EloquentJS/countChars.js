function countChar(string, char) {
    let counter = 0;
    for (let i = 0; i < string.length; i++) {
        let strChar = string[i];
        if (strChar === char) {
            counter++;
        }
    }
    return counter;
}

console.log(countChar("banana", "n"));