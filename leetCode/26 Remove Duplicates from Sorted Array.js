var removeDuplicates = function(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        while(nums[i] === nums[i + 1]) nums.splice(i,1);
    }
    return nums.length;
};