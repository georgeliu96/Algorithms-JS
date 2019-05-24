var addTwoNumbers = function(l1, l2) {
    let sumVal = l1.val + l2.val;
    const ans = new ListNode(sumVal % 10);
    let curr = ans;
    let c1 = l1.next;
    let c2 = l2.next; 
    while(c1 && c2) {
        curr.next = new ListNode((Math.floor(sumVal / 10) + c1.val + c2.val) % 10);
        sumVal = (Math.floor(sumVal / 10) + c1.val + c2.val);
        c1 = c1.next;
        c2 = c2.next;
        curr = curr.next; 
    }
    while (c1) {
        curr.next = new ListNode((c1.val + Math.floor(sumVal / 10)) % 10);
        sumVal = c1.val + Math.floor(sumVal/10);
        c1 = c1.next;
        curr = curr.next;
    }
    while (c2) {
        curr.next = new ListNode((c2.val + Math.floor(sumVal/10)) % 10);
        sumVal = c2.val + Math.floor(sumVal/10);
        c2 = c2.next; 
        curr = curr.next;
    }
    if (Math.floor(sumVal/ 10)) {
        curr.next = new ListNode(1);
    }
    
    return ans;
};