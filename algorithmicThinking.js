//algorithmic thinking 
//source: MIT 6.006 Fall 2011 

/*
Algorithmic thinking is all about efficient procedures for solving problems on large inputs. 

some fair exmaple of large inputs are 
US highway system 
human genome which has billions of letters in its alphabet 
social network life Facebook and Twitter 

We mostly concern about:
- efficient procedures for solving large scale problems 
- scalability 
*/

//peak finder 
/*
one-dimensional version 
Here is an array of numbers represented from a to i. 
numbers: a, b, c, d, e, f, g, h, i 
indices: 1, 2, 3, 4, 5, 6, 7, 8, 9

Position 2 is a peak if and only if b >= a and b >= c. Position 9 is a peak if i >=h. 
Problem: find a peak if it exists. 
*/


//straightforward algorithm --> start from left 
/*
worst-case complexity: scaning through all the elements --> theta n 

What if we start in the middle? We would look at n/2 elements. 
Would we have to ever look at more than n/2 elements if we start in the middle,
and choose a direction based on which neighboring element is larger than the middle element? 
*/

/*
Can we do better? 
binary search --> recursive algorithm --> divide and conquer 

if a[n/2] < a[n/2 - 1] then only look at left half 1 ... (n/2 - 1). 
else if a[n/2] < a[n/2 + 1] then (n/2 + 1) ... n has the peak 
else n/2 position is a peak. 

T(n) = T(n/2) + theta(1)
     = theta(1) + theta(1) + ... + theta(1) --> (lg(n) times) 
     = theta(lg(n))

base case: T(1) = theta(1) --> theta(1) means the time required to compare a[n/2] to neighbors. 


*/


//two-dimension version 
/*
Within Matrix n rows by m columns, a is a 2D-peak iff a >= b, a >=d, a >= c, a >=e
*/

/*
greedy ascent algorithm 
go as to what default traversal directions are. 

cons: you may end up touching a large amount of elements on the matrix. 
worst-case: theta(nm) complexity 
            if m = n, theta(n^2) 
*/

//attemp #1： extend 1D divide and conquer to 2d 
/*
pick middle column j = m/2, 
find a 1D-peak at i, j
use (i, j) as a start point on row i to find 1D-peak on row i 
--> it's incorrect. 


prblem: 2D peak may not exist on row i. 
*/

//attempt #2 
/*
pick a middle column j = m/2 
find a global max on the column j at (i, j)
compare (i, j-1), (i, j), (i, j+1) 
pick left column if (i, j - 1) > (i, j)
similarly for the right 
(i, j) is a 2D-peak if neither condition holds 
solve the new problem with half the number of columns 
When you have a single column, find global max and you're done. 
if(i, j) >= (i, j-1), (i, j+1) => (i, j) 

solve the new problem with half the number of columns 
base case: When you have a single column, find the global max, then done. 

Complexity of attempt #2 
If T(n, m) denotes work required to solve problem with n rows and m columns 
T(n, m) = T(n. m/2) + theta(n) --> to find global max on a column --> n rows 
T(n, m) = theta(n) + ... + theta(n) --> (lgm)
        = theta(nlgm)
        = thata(nlgn) (if m = n)

Question: what if we replaced global max with 1D-peak in attemp #2? Would that work? 
*/

























