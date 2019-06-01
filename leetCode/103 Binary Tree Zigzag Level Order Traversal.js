var zigzagLevelOrder = function(root, level = 0, arr = []) {
    if (root === null) {return [];}
    (arr[level]) ? ((level % 2 === 0) ? arr[level].push(root.val) : arr[level].unshift(root.val)) : (arr[level] = [root.val])
    zigzagLevelOrder(root.left, level + 1, arr);
    zigzagLevelOrder(root.right, level + 1, arr);
    return arr;
};