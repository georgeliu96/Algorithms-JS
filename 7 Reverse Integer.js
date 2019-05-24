var reverse = function(x) {
    if (x < 0) return - reverse(-x);
    const ans = parseInt(x.toString(10).split("").reverse().join(""));
    if (ans > 2 ** 31 - 1 || ans < (2 ** 31) * - 1) return 0;
    return ans;
};