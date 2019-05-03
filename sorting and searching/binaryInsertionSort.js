//binary insertion sort

/*
BINARY-INSERTION-SORT(A,) 
  for j <- 2 to n
    insert key A[j] into the (alrady sorted) sub-array A[1 ... j-1]/
    use binary search to find the right position 
*/

/*
binary search takes theta(lgn) time.
However, shifting the elements after insertion will still take theta(n) time. 

complexity:
theta(nlgn) comparisons (n^2) swaps 
*/
