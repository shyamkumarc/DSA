
class pq {
    key;
    items = [];

    constructor(key) {
        this.key = key;
    }
    push(item) {
        this.items.push(item);
        this.items.sort((a, b) => b[this.key] - a[this.key]);
    }
    pop(params) {
        return this.items.pop();
    }
}

var pq1 = new pq("distance");

pq1.push({ node: "a", distance: 7 });

pq1.push({ node: "b", distance: 6 });

pq1.push({ node: "c", distance: 9 });

console.log("queue before pop:", pq1.items);

pq1.pop();

console.log("queue after pop:", pq1.items);

