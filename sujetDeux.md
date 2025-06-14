# Degenerative AI
AI, once designed to optimize planetary systems, has become degenerative, flooding networks with parasitic data and threatening to plunge humanity into digital chaos.

## Your mission:
**secretly assemble an electromagnetic pulse device capable of neutralizing it, using the simplest electronic resources to evade its total digital surveillance!**

**First step**: finding the electrical wires. You enter the storage room, but to avoid raising too much suspicion, you want to take as little wire as possible.

The wire comes in the form of a ribbon: ***a spool of length X will give you a wire of length X in each color***, which you can then separate and cut into smaller pieces if needed.

## Data
**Input**
***Line 1***: an integer N describing the number of wires to solder in the circuit diagram.

***Next N lines***: an integer L representing the length of a wire in the diagram, followed by its color c as a string of 1 to 20 lowercase letters.

**Output**
The length of ribbon you need to order to assemble the circuit while respecting the wiring diagram.

## Example
For the input:

7
11 yellow
8 blue
3 red
2 green
4 blue
5 red
2 red
The minimum ribbon length you need to order is:

12
Explanation: to complete the wiring, you will need a total of 11cm of yellow wire, 12cm of blue wire, 2cm of green wire, and 10cm of red wire. Therefore, the spool must contain 12cm of wire, as you wouldn't have enough blue wire otherwise.

Constraints
N is between 1 and 1000.
L is between 1 and 1000.
There will be a maximum of 20 different colors.