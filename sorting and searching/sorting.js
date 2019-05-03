//sorting
//source: MIT 6.006 Fall 2011 

/*
- sorting:
  1. insertion sort
  2. merger sort 
- solving recurrence 
*/

/*
input: array A[1, ..., n] of numbers 
output: permutation B[1, ..., n] of A such that B[1] <= B[2] <= ... <= B[n]
e.g. A = [7, 2, 5, 5, 9.6] --> B = [2, 5, 5, 7, 9.6]
How do we do it efficiently? 
*/

//why sorting?
/*
- obvious applications 
  for example: organize an MP3 library, maintain a telephone directory 
- problems that become easy once items are in sorted order 
  for example: find a median, or find closest pairs; binary search, identify statistical outliers 
- non-obvious applications 
  for example: data compression: sorting finds duplicates 
               computer graphs: rendering scenes front to back 

*/
/*
binary serach: 
A[0:n] --> looking for a specific item 

not obvious sorting problem:
data compression
other sorting problems for example: cocktail sort, bitonic sort 
*/

//insertion sort 

/*
insertion-sort(A, n) 


comparions >> swaps 

binary insertion sort: 
binary search in insertion sort gives you a less time 

*/

//merge sort 
/*
 divide and conquer --> keep spliting 
 
*/

