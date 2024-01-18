let a = 'abcdeaxyzabcs'.split();

let first = 0 ;
let last  = 0;
let count = 0;

let tempcount = 0;

while(last < a.length){
    if (a[last] == a[first])
    {
        count = tempcount;
        tempcount = 0;
        first++;
    }
last++;
tempcount++;
}