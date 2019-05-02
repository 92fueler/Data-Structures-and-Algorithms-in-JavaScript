//algorithmic thinking 

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

/*
straightforward algorithm --> start from left 
worst-case complexity: scaning through all the elements --> theta n 
*/

/*
binary search 
recursive algorithm --> divide and conquer 

if a[n/2] < a[n/2 - 1] then only look at left half 1 ... (n/2 - 1). 
else if a[n/2] < a[n/2 + 1] then (n/2 + 1) ... n has the peak 
else n/2 position is a peak. 

T(n) = T(n/2) + theta(1)
base case: T(1) = theta(1)
the work algorithm does on the input of size n 

*/


//two-dimension version 
/*
greedy ascent algorithm 
go as to what default traversal directions are. 

cons: you may end up touching a large amount of elements on the matrix. 
worst-case: theta(nm) complexity 
            if m = n, theta(n^2) 

attemp #1
pick middle column j = m/2, 
find a 1D-peak at (i, j) as a start to find a 1D-peak on row j 
--> it's incorrect. 

prblem: 2D peak may not exist on row i. 

attempt #2 
pick a middle column j = m/2 
find a global max on the column j at (i, j)
compare (i, j-1), (i, j), (i, j+1) 
pick left column if (i, j) > (i, j), similarly for the right 

if(i, j) >= (i, j-1), (i, j+1) => (i, j) 

solve the new problem with half the number of columns 
base case: When you have a single column, find the global max, then done. 

*/

























