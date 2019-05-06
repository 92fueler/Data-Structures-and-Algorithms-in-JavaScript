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
  for example: phone book, organize an MP3 library, maintain a telephone directory 
- problems that become easy once items are in sorted order 
  for example: find a median, or find closest pairs; binary search, identify statistical outliers 
- non-obvious applications 
  for example: data compression: sorting finds duplicates 
               computer graphs: rendering scenes front to back 

*/
/*
binary serach: 
A[0:n] --> looking for a specific item 
it uses lagorithmic time 

not obvious sorting problem:
data compression: people use sorting as a subroutine in data compression. 

computer graphics uses sorting. Most of the time, when you render scenes in computer graphics, you have many layers corresponding
to the scenes. It turns out that, in computer graphics, most of the time you're actually rendering front to back  because,
when you have a big opaque object in front, you want to render that first, so you don't have to worry about everything that's occluded 
by this big opaque object. And that makes things more efficient. And so you keep things sorted front to back, most of the time,
in computer graphics rendering. 
But some of the time, if you're worried about transparency, you have to render things back to front. So typically, you have sorted
lists corresponding to the different objects in both orders - both  increasing order and decreasing order. 

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

