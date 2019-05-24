var removeDuplicates = function(nums) {
    // splice is slow
    // for (let i = 0; i < nums.length - 1; i++) {
    //     while(nums[i] === nums[i + 1]) nums.splice(i,1);
    // }
    // return nums.length;
    
    //this is much faster
    let i = 0;
    let j = 1;
    while(j < nums.length) {
        if(nums[i] === nums[j]) {
            j++;
        }else {
            i++;
            nums[i] = nums[j];
            j++;
        }
    }
    return i + 1;
};