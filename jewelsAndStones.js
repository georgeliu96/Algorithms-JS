// https://leetcode.com/problems/jewels-and-stones/
// EASY problem

// You're given strings J representing the types of stones that are jewels, 
// and S representing the stones you have.  Each character in S is a type of stone you have.  
// You want to know how many of the stones you have are also jewels.

// The letters in J are guaranteed distinct, and all characters in J and S are letters. 
// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: J = "aA", S = "aAAbbbb"
// Output: 3


// Example 2:

// Input: J = "z", S = "ZZ"
// Output: 0


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