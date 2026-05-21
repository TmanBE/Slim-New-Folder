#Assignment 2
#Create new list and use five methods to manipulate the apart from the ones used above

#ceation of a new list
my_new_list = [1,2,3,4,5,3,"development",39,43,"python",4,56,21,12]

#1. using the extend method to add elements to the list
my_new_list.extend((6, 7, 8))
print(my_new_list)

#2. using the copy method to create a copy of the list
new_copy = my_new_list.copy()
print(new_copy)

#3. using the count method to count elements in the list
my_new_list.count(4)
print(my_new_list.count(4))

#4. using the index method to find the index of an element in the list
my_new_list.index(43)
print(my_new_list.index(43))

#5. using the upper method to convert a string element in the list to uppercase
my_new_list[6] = my_new_list[6].upper() 
print(my_new_list)