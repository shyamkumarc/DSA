//           A
//     /         \
//    B            C
//   / \          / \
// D    E            F
// /\     \          / \
//         G       H

let tree = {
    A: { left: 'B', right: 'C' },
    B: { left: 'D', right: 'E' },
    C: { left: null, right: 'F' },
    D: { left: null, right: null },
    E: { left: null, right: 'G' },
    F: { left: 'H', right: null },
    G: { left: null, right: null },
    H: { left: null, right: null },
  };
  let queue = [];
  let stack = [];
  
  function bfs(tree, node) {
    console.log(' - ' + node);
  
    if (node != null) {
      if (tree[node].left != null) {
        queue.push(tree[node].left);
      }
      if (tree[node].right != null) {
        queue.push(tree[node].right);
      }
    }
    if (queue.length > 0) bfs(tree, queue.shift());
  }
  
  function dfs(tree, node) {
    console.log(' - ' + node);
  
    if (node != null) {
      if (tree[node].left != null) {
        queue.push(tree[node].left);
        if (queue.length > 0) bfs(tree, queue.pop());
      }
      if (tree[node].right != null) {
        queue.push(tree[node].right);
        if (queue.length > 0) bfs(tree, queue.pop());
      }
    }
  }
  // bfs(tree, 'A');
  dfs(tree, 'A');
  