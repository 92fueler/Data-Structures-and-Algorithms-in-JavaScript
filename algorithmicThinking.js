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
*/
