/**
 * Merge two sorted linked lists and return it as a new sorted list. 
 * The new list should be made by splicing together the nodes of the first two lists.
 * 
 * example:
 * Input: 1 -> 2 -> 4, 1 -> 3 -> 4
 * output: 1 -> 1 -> 2 -> 3 -> 4 -> 4
 */

// FUNCTION DEFINITION
// Definition for singly-linked list 
function ListNode (val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * 
 * @param {ListNode} l1 
 * @param {ListNode} l2 
 */
// approach 1: recursion
var mergeTwoLists = function (l1, l2) {
  if(!l1 || !l2) return l1 || l2
  if(l1.val < l2.val){
      l1.next = mergeTwoLists(l1.next, l2)
      return l1
  }
  l2.next = mergeTwoLists(l1, l2.next)
  return l2
};

module.exports = { ListNode, mergeTwoLists };