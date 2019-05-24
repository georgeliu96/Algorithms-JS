var groupAnagrams = function(strs) {
    const chars = strs.map(el => el.split("").sort((a,b) => (a > b) ? 1 : -1).join(""));
    const hash = {};
    for (let i = 0; i < strs.length; i++) {
        (hash[chars[i]]) ? hash[chars[i]].push(strs[i]) : hash[chars[i]] = [strs[i]];
    }
    return Object.values(hash);
};