// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.

var change = function(amount, coins, memo = {}) {
    const key = amount + "-" + coins
    if (key in memo) return memo[key];
    if (amount === 0) return 1;
    
    const lastCoin = coins[coins.length - 1];
    
    let numWays = 0;
    for (let i = 0; i * lastCoin <= amount; i++) {
        numWays += change(amount - (i * lastCoin), coins.slice(0, - 1), memo)
    }
    memo[key] = numWays;
    return memo[key];
};