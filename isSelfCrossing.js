// https://leetcode.com/problems/self-crossing/
// HARD problem

// You are given an array x of n positive numbers. 
// You start at point (0,0) and moves x[0] metres to the north, 
// then x[1] metres to the west, x[2] metres to the south, 
// x[3] metres to the east and so on. In other words, after 
// each move your direction changes counter-clockwise.

// Write a one-pass algorithm with O(1) extra space to determine, if your path crosses itself, or not.

function isSelfCrossing(arr) {
    // if there's less than 4 lines, no possible collison
    if(arr.length < 4) return false;

    // if there is an "outward" spiral, have to keep track of the 5th/(6th?) to last length
    let base = 0;

    for(let i = 0; i <= arr.length - 4; i++) {
        // checks for collision WITH inclusion of base
        if (arr[i] - arr[i+2] >= 0 && arr[i+1] - arr[i+3] <= base) return true; 
        // if the spiral is an inward spiral, we can set this to 0
        else if (arr[i+1] - arr[i+3] > base) base = 0;
        // otherwise, we need to keep track of the latest length 
        else base = arr[i];
    }
    return false; 
}