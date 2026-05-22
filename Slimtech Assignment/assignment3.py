#Assignment 3
#Create a tuple containing the 26 letters of the english alphabet and print out 5 different fruits using the indices of the alphabets

#Creating and printing my_tuple variable
my_tuple = ("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z")
print(my_tuple)

#Printing out five(5) different fruits using the indexes

#1.Orange variable declaration
oranges = "".join([my_tuple[14],my_tuple[17],my_tuple[0],my_tuple[13],my_tuple[6],my_tuple[4],my_tuple[18]])
print(oranges.upper())

#2.Apple variable declaration
apples = "".join([my_tuple[0],my_tuple[15],my_tuple[15],my_tuple[11],my_tuple[4],my_tuple[18]])
print(apples.upper())

#3.Banana variable declaration
bananas = "".join([my_tuple[1],my_tuple[0],my_tuple[13],my_tuple[0],my_tuple[13],my_tuple[0],my_tuple[18]])
print(bananas.upper())

#4.Cucumber variable declaration
cucumber = "".join([my_tuple[2],my_tuple[20],my_tuple[2],my_tuple[20],my_tuple[12],my_tuple[1],my_tuple[4],my_tuple[17]])
print(cucumber.upper())

#5.Grape variable declaration
grape = "".join([my_tuple[6],my_tuple[17],my_tuple[0],my_tuple[15],my_tuple[4]])
print(grape.upper())


#Second Assignment
#Create a list of five number that when you print out the sum gives you 205, the maximum number in your list can only be 115 and the minimum number in your list can only be 3

#Creation of the list variable

my_list = [3, 4, 10, 15, 22, 5, 18, 7, 6, 115]

#printing sum of the list
print(sum(my_list))

#printing maximum number in the list
print(max(my_list))

#printing the minimum number in the list
print(min(my_list))