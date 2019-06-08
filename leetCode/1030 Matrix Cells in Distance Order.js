var allCellsDistOrder = function(R, C, r0, c0) {
    let ans = [];
    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {
            ans.push([R - i - 1, C - j - 1])
        }
    }
    ans.sort((el1, el2) => (
        (Math.abs(el1[0] - r0) + Math.abs(el1[1] - c0)) - (Math.abs(el2[0] - r0) + Math.abs(el2[1] - c0))
    ))
    return ans;
};