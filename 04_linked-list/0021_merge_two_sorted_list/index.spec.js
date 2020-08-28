
const { ListNode, mergeTwoLists } = require('./index')

// create linked list: l1
const node1 = new ListNode(4);
const node2 = new ListNode(2, node1);
const l1 = new ListNode(1, node2);
// console.log(JSON.stringify(l1))

// create linked list: l2
const node3 = new ListNode(4);
const node4 = new ListNode(3, node3);
const l2 = new ListNode(1, node4);
// console.log(JSON.stringify(l2))

// create expected linked list: ll
const node5 = new ListNode(4);
const node6 = new ListNode(4, node5);
const node7 = new ListNode(3, node6);
const node8 = new ListNode(2, node7);
const node9 = new ListNode(1, node8);
const ll = new ListNode(1, node9);
// console.log(JSON.stringify(ll))

test('merge two sorted linked list to get one sorted linked list', () => {
  expect(JSON.stringify(mergeTwoLists(l1, l2))).toEqual(JSON.stringify(ll))
})