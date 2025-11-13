function countBs(string){
    let counter = 0;
    for (let i = 0; i < string.length; i++) {
        let strChar = string[i];
        if (strChar === "B") {
            counter++;
        }
    }
    return counter;
}

console.log(countBs("BanaBAnaBABa"));