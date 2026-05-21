#Set

my_variable = {1,23,87,45,1,9,45,90,34,56,78,12,9} #This will create a set with unique elements, duplicates will be removed
#print(my_variable)
#print(type(my_variable)) #This will print <class 'set'> because it is a set 

#Tuples

my_tuple = (1,23,87,45,90,34,56,78,12,"tolu","boy","girl",0.12,0.34,0.56,0.78,0.90)
#print(my_tuple)

#Unpacking a tuple, i can access the elements of the tuple by unpacking it into individual variables
name, age, city, country = ("Tolu", 25, "Lagos", "Nigeria")

my_style = ("Franchise")
my_style1 = ("Franchise",)

#print(type(my_style)) #This will print <class 'str'> because it is not a tuple
#print(type(my_style1)) #This will print <class 'tuple'> because it is a tuple with one element

#print(my_tuple[0]) #Accessing the first element of the tuple
#print(my_tuple[1]) #Accessing the second element of the tuple
#print(my_tuple[2]) #Accessing the third element of the tuple

#print(type(my_tuple))

#print(my_tuple[5])
#print(my_tuple.count(0.34))
#print(0.41 in my_tuple) #Check if 0.41 is in the tuple

#Dictionaries


#List
#They are changeable, ordered, and allow duplicate elements. They are defined using square brackets [].

my_list = [1,23,87,45,"system",0.32,90,34,56,{1,43,23,90,1,12,43,80,54,87},78,12]

#print(my_list[-2]) #This will print the set {1, 43, 23, 90, 12, 80, 54, 87} which is the second last element of the list
#print(len(my_list)) #This will print the length of the list which is 12
#print(my_list[9])
#print(my_list[6:10]) #This will print the elements from index 6 to index 9 (not inclusive of index 10)
#print(my_list.index("system"))

my_list[4] = "tolu" #This will change the element at index 4 from "system" to "tolu"
#print(my_list)

my_list[9] = "franchise" #This will change the element at index 9 from {1, 43, 23, 90, 12, 80, 54, 87} to "franchise"
#print(my_list)

my_list.append((15,)) #This will add the tuple (15,) to the end of the list
#print(my_list)

my_list.insert(4, "system") #This will insert the string "system" at index 4, shifting the other elements to the right
#print(my_list)

my_list.remove("tolu") #This will remove the first occurrence of the string "tolu" from the list
#print(my_list)

my_list.pop(5) #This will remove the element at index 5, which is 0.32, and return it
my_list.pop() #This will remove the last element of the list, which is (15,), and return it

#my_list.sort() #This will sort the list in ascending order, but it will raise an error because the list contains different data types (integers, strings, sets, and tuples) that cannot be compared to each other for sorting
#print(my_list)

#my_list.reverse() #This will reverse the order of the list
#print(my_list)

#my_list.clear() #This will remove all elements from the list, making it an empty list

new_list = [2,13,87,42,56,21,3,9,7,12,1]
#print(sum(new_list)) #This will print the sum of all the elements in the new_list, which is 229

new_list.sort()
#print(new_list) #This will print the sorted new_list in ascending order: [1, 2, 3, 7, 9, 12, 13, 21, 42, 56, 87]

#print(max(new_list)) #This will print the maximum value in the new_list, which is 87
#print(min(new_list)) #This will print the minimum value in the new_list, which is 1

#Assignment 2
#Create new list and use five methods to manipulate the apart from the ones used above

my_list.copy() #This will create a shallow copy of the list
my_list.count("system") #This will count the number of occurrences of the string "system" in the list
my_list.extend([1,2,3]) #This will add the elements 1, 2, and 3 to the end of the list
my_list.__add__([4,5,6]) #This will concatenate the list with another list [4, 5, 6] and return a new list
#print(my_list) #This will print the original list, which is unchanged by the __add__ method

#print(my_list.__len__()) #This will return the length of the list, which is

#print(new_list)

new_list.extend([14,90,76,53])
print(new_list)
