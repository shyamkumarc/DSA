let a = 'abcdeaxyzabcs'.split("");

let first = 0;
let last = 1;
let count = 0;

let tempcount = 0;

while (last < a.length) {
    if (a[last] == a[first]) {
        count = tempcount > count? tempcount:count;
        tempcount--;
        first++;
    } else {
        last++;
        tempcount++;
    }
}

console.log(count);