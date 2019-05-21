var maxArea = function(height) {
    max = 0;
    for (let i = 0; i < height.length - 1; i++) {
        for(let j = i+1; j < height.length; j++) {
            max = Math.max(Math.min(height[i], height[j]) * (j - i), max);
        }
    }
    return max;
};