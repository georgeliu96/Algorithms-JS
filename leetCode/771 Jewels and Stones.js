// TERRIBLE SOLUTION
// Time: O(m * n)
// Space: O (m + n)
var numJewelsInStones = function(J, S) {
    const jewels = J.split("");
    const stones = S.split("");
    
    let ans = 0;
    
    stones.forEach(stone => {
        for (let i = 0; i < jewels.length; i++) {
            if (stone === jewels[i]) {
                ans += 1; 
                break;
            } 
        }
    })
    
    return ans;
};

// One liner 
// Time: Should also be O(m * n) ???
    // filter is linear and so is indexOf
// Space: O(1) ????
    // aren't saving any variables 
    
const numJewelsInStones = (J, S) => S.split('').filter(char => J.indexOf(char) !== -1).length;