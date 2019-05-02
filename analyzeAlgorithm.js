/*
Analyzing an algorithm has come to mean predicting the resources that the algorthm requires.
Occasionally, resources such as memory, communication bandwidth, or computer hardware are of 
primary concern, but most often it is computational time that we want to measure.

Before we can analyze an algorithm, we must have a model of the impmementation technology
that we will use, including a model for the resources of that technology and their cost.

In general, we shall assume a generic one-processor, random-access machine (RAM) model of 
computation as our implementation technology and understand that our algorithms will be 
implemented as computer programs. 
In the RAM model, instructions are executed one after another, with no concurrrent operations. 

The RAM model contains instructions commonly found in real computers:
arithmetic (such as add, susbtract, multiplym, divide, remainder, floor, ceiling),
data movement(load, store, copy), and control (conditional and unconditional branch, 
subroutine call and return). Each such instruction takes a constant amount of time. 

The data types in the RAM model are integer and floating point (for storing real numbers).
We also assume a limit on the size of each word of data. For example, whe nworking with inputs 
of size n, we typically assume that integers are represented by clgn bits for some constant c >= 1.
We require c >= 1 so that each word can hold the value of n, enabling us to index the individual input elements, 
and we restrict c to be a constant so that the word size doesn't grow arbitarily.

Real computers contain instructions not listed above, and such instructions represent a gray area in the RAM model. 

In the RAM mode, we don't attempt to model the memory hierarchy that is common in contemporary computers. 
That is, we do not model caches or virtual memory. 

*/
