class Solution {
    public boolean isHappy(int n) {
        HashSet <Integer> hs = new HashSet<Integer>();
        
        while(hs.add(n)) {
            int sum = 0;
            do {
                sum += (n % 10) * (n % 10);
                n /= 10;
            } while (n != 0);
            n = sum; 
        }
        
        return n == 1;
    }
}