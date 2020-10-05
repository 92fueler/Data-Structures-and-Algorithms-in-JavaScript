const ListNode = require('../../models/singly-linked-list-node');
const { mergeTwoLists } = require('./index')

// test case 1:
// create linked list: l1
const node11 = new ListNode(4);
const node12 = new ListNode(2, node11);
const l11 = new ListNode(1, node12);
// console.log(JSON.stringify(l1))

// create linked list: l2
const node21 = new ListNode(4);
const node22 = new ListNode(3, node21);
const l12 = new ListNode(1, node22);
// console.log(JSON.stringify(l2))

// create expected linked list: ll
const nodeExp1 = new ListNode(4);
const nodeExp2 = new ListNode(4, nodeExp1);
const nodeExp3 = new ListNode(3, nodeExp2);
const nodeExp4 = new ListNode(2, nodeExp3);
const nodeExp5 = new ListNode(1, nodeExp4);
const ll1 = new ListNode(1, nodeExp5);
// console.log(JSON.stringify(ll))

test('merge two sorted linked list to get one sorted linked list', () => {
  expect(JSON.stringify(mergeTwoLists(l11, l12))).toEqual(JSON.stringify(ll1))
})

// test case 2 
const l21 = new ListNode();
const l22 = new ListNode();
const ll2 = new ListNode();

test('merge two sorted linked list to get one sorted linked list', () => {
  expect(JSON.stringify(mergeTwoLists(l21, l22))).toEqual(JSON.stringify(ll2))
})