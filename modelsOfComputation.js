//model of computation. 
//sourceL MIT 6.006 Fall 2011 

//what is an algorithm?
/*
- mathematical abstraction of computer program 
- computational procedure to solve a problem 
*/

//model of computation specifies:
/*
- what operations an algorithm is allowed 
- cost (time, space, ...) of each operation 
- cost of algorithm = sum of operation costs 
*/


//1. RAM 
/*
(1) random access machine (RAM)
  - random access memory (RAM) modeled by a big array 
  - theta(1) registers (each 1 word) 
  - in theta(1) time, cana 
    # load word @ri into register rj 
    # compute (+, -, *, /, &, |, ^) on registers 
    # store register rj into memory @ri 
  - what's word? w >= lg(memorySize) bits 
    # assume basic objects(eg. int) fit in word 
    # unit 4 in the course deals with big numbers 
  - realistic and powerful --> implement abstractions 
*/

//2. pointer machine 
/*
- dynamically allocated objects (in Python, it's tuple. A tuple is a sequence of immutable Python objects.
Tuples are sequences, just like lists. The differences between tuples and lists are, 
the tuples cannot be changed unlike lists and tuples use parentheses, whereas lists use square brackets.)
- object has o(1) fields 
- field = word (eg. int) or pointer to object/null (a.k.a reference)
- weaker than (can be implemented on )RAM 
*/
