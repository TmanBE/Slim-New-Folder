#This is just a random file to test how to put a file on git and github. I am not sure if this is going to work but I hope it does. I am just going to write some random code here to see if it works. I am going to write a simple function that adds two numbers together and returns the result.
#I am making a change to this file for modification purpose

#Practice
#creating tuples and using its method

thistuple = ("mango","apples","banana","guava","grapes")
#print(thistuple.count("apples"))
#print(thistuple.index([4]))

"""for x in range(len(thistuple)):
    print(thistuple[x])"""

my_tuple = (2,4,5,1,8,1)

thistuple = thistuple + my_tuple
#print(thistuple)

newtuple = list(my_tuple)
#print(newtuple)

newtuple[3] = 27

newtuple = tuple(newtuple)
#print(newtuple)

#creating a set
thisset = {23, 45, "kiwi", "maize","black"}
print(thisset)
thisset.add(52)
print(thisset)

for i in thisset:
    print(i)

newset = frozenset({"mango", "banana", "grapes", "orange", "guava"})
print(newset)