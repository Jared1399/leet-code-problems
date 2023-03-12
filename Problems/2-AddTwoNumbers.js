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

l1 = [2,4,3]
l2 = [5,6,4]
//expected output [7,0,8]

var addTwoNumbers = function(l1, l2) {

    restultArray =[]
    
    totalL1 = 0
    totalL2 = 0
    
    multiplier = 1
    for(let i =0; i < l1.length; i++){
        totalL1 += l1[i]*multiplier
        multiplier *= 10
    }

    
    multiplier = 1
    for(let i =0; i < l1.length; i++){
        totalL2 += l2[i]*multiplier
        multiplier *= 10
    }

    totalSum = totalL1+totalL2

    

};

console.log(addTwoNumbers(l1,l2))