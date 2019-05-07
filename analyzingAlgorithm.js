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
That is, we do not model caches or virtual memory. Several computational modesl attempt to account for 
memory-heirarchy effects, which are sometimes significant in real programs on real machines. 
For most of the time, we don't analyze the situation about memory-hierarchy. Models that include the 
memory hierarchy are quite a bit more complex that the RAM model, and so they can be difficult to work with. 
Moreover, RAM-model analyses are usually excellent predictors of performance on actual machines. 

Analyzing even a simple algorthim in the RAM model can be a challenge. The mathematical tools required 
may include combinatorics, probability theory, algebraic dexterity, and the ability to identify the most 
significant terms in a formula. Because the behavior of an algorihm may be different for each possible input, 
we need a means for summarizing that behavior in simple, easily understood formulas. 
*/

//input size
/*
For many problems, such as sorting or computing discrete Fourier transforms, the most natural measure 
is the number of items in the input - for example, the array size n for sorting. For many other problems,
such as multiplying two integers, the best measure of input size is the total number of bits needed to 
represent the input in the input with two numbers rather than one. 
For instance, if the input to an algorithm is a graph, the input size can be described by the numbers 
of vertices and edges in the graph. 
*/

//running time 
/*
The running time of an algorithm on a particular input is the number of primitive operations or "steps" executed. 
In is convenient to define the notion of step so taht it is as machine-independent as possible. 

*/














