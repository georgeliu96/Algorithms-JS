var commonChars = function(A) {
    const chars = [];
    const ans = [];
    A.forEach(word => {
        chars.push(word.split("").sort((a,b) => (a > b) ? 1 : -1));
    })
    chars.sort((a,b) => a.length - b.length);
    while(chars[0].length) {
        let same = true;
        for (let i = 1; i < chars.length; i++) {
            if (!chars[i].length) {
                return ans;
            }
            if(chars[0][0] !== chars[i][0]) {
                same = false;
            }
        }
        if (same) {
            ans.push(chars[0][0]);
            for (let i = 0; i < chars.length; i++) {
                chars[i].shift();
            }
        }else{
            let ltr = "A";
            let idxs = [];
            for (let j = 0; j < chars.length; j++) {
                if (chars[j][0] > ltr) {
                    ltr = chars[j][0];
                    idxs = [];
                    for(let k = 0; k < j; k++) {
                        idxs.push(k);
                    }
                }else if (chars[j][0] !== ltr) {
                    idxs.push(j);
                }
            }
            let l = 0;
            while(idxs.length) {
                if (l === idxs[0]) {
                    chars[l].shift();
                    idxs.shift();
                }
                l++;
            }
        }
    }
    return ans;
};