function showname(value) {
    for (const item of value) {
        console.log(item);
        for (const char of item) {
            console.log(char);
        }
    }
}

let furniture = ['Table', 'Chairs', 'Chouch'];
console.log(showname(furniture));