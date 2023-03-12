/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


let head = new ListNode(2);
head.next = new ListNode(4);
head.next.next = new ListNode(3);

let head2 = new ListNode(5);
head2.next = new ListNode(6);
head2.next.next = new ListNode(4);

l1 = head
l2 = head2
//expected outoput [7,0,8]
var addTwoNumbers = function(l1, l2) {

    restultArray =[]
    
    totalL1 = 0
    totalL2 = 0

    multiplier = 1 
    while (l1 != null) {

        totalL1 += l1.val*multiplier
        l1= l1.next;
        multiplier *= 10
    }
    console.log(totalL1)

    multiplier = 1
    while (l2 != null) {

        totalL2 += l2.val*multiplier
        l2= l2.next;
        multiplier *= 10
        // console.log(totalL2)
    }

    total = totalL1+totalL2+""

    let head = new ListNode(null);
    let node = head; 

    for (let i = total.length-1; i >= 0; i--) {
        node.next = new ListNode(parseInt(total[i])); 
        node = node.next;
    }

    let newHead = head.next;
    head.next = null; 
  
    return newHead; 

};
console.log(addTwoNumbers(l1,l2))