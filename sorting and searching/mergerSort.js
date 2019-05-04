//merger sort 
//divide-and-conquer 

/*
divide: divide the n=element sequence to be sorted into two subsequences of n/2 elements each 
conquer: sort the two subsequences recurisively using merge sort 
combine: merge the two sorted subsequences to produce the sorted answer
*/

/*
MERGE-SORT A[1, ..., n]
  if n = 1, done (nothing to sort)
  otherwise, recursively sort A[1, ..., n/2] and A[n/2 + 1, ..., n]
  merge the two sorted sub-arrays 
*/

//time complexity 
/*
Time = theta(n) to merge a total of n elements (linear time) 
*/

/*
The recursion "bottoms out" when the sequence to be sorted has length 1, in which case there 
is no work to be done, since every sequence of length 1 is already in sorted order. 

The key operation of the merge sort algorithm is the merging of two sorted sequences in the "combine" step. 
We merge by calling an auxiliary procedure MERGE(A, p, q, r), where A is an array and p, q, and r are indices 
into the array such that p <= q < r.
The procedure assumes that the subarrays A[p, ..., q] and A[q + 1, ..., r] are in sorted order. 
It merges them to form a single sorted subarray that replaces the current subarray A[p, ..., r]. 

MERGE(A, p, q, r)
  n1 = q - p + 1
  n2 = r - q
  let L[1, ..., n1 + 1] and R[1, ..., n2 + 1] be new arrays 
  for i = 1 to n1
    L[i] = A[p + i - 1]
  for j = 1 to n2 
    R[j] = A[q + j]
  L[n1 + 1] = sentinel
  R[n2 + 1] = sentinel 
  i = 1
  j = 1
  for k = p to r
    if L[i] <= R[j]
      A[k] = L[i]
      i = i + 1
    else A[k] = R[j]
      j = j + 1 

MERGE-SORT(A, p, r)
  if q < r
    MERGE-SORT(A, p, q)
    MERGE-SORT(A, p + 1, r)
    MERGE-SORT(A, p, q, r) 
*/



