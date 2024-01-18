
//        b
//      / | \
//     3  1  7
//    /   |   \
// a /--3-c--2-\e
//   \        /    
//    2       9
//     \    /
//        d

// shortest = a-b-c-e = 6

let routes = {
    a: [{ b: 3 }, { c: 3 }, { d: 2 }],
    b: [{ a: 3 }, { c: 1 }, { e: 7 }],
    c: [{ a: 3 }, { e: 2 }, { b: 1 }],
    d: [{ a: 2 }, { e: 9 }],
    e: [{ b: 7 }, { d: 9 }],
}

shortestPaths = {
    a: Number.MAX_SAFE_INTEGER,
    b: Number.MAX_SAFE_INTEGER,
    c: Number.MAX_SAFE_INTEGER,
    d: Number.MAX_SAFE_INTEGER,
    e: Number.MAX_SAFE_INTEGER,
}


function shortest(start, currentDist,path, target) {

     console.log(`Current = ${start}, currentDistance:${currentDist}, current path:${path}`);
    
    start!=target && routes[start].forEach(dest => {
       
            if(shortestPaths[Object.keys(dest)[0]] > currentDist + Object.values(dest)[0]) 
            {
                shortestPaths[Object.keys(dest)[0]] = currentDist + Object.values(dest)[0];
                shortest(Object.keys(dest)[0], currentDist + Object.values(dest)[0],path+"-"+ Object.keys(dest)[0], target);
            }
    });

}

shortest('a',0,'a','e');
console.log("shortest paths: ", shortestPaths)