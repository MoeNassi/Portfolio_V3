from random import *
import os

u_pwd = input("Enter a Pass: ")
pwd = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j',
	   'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
		',', '.', '/', ';', '\'', '\"', '[', ']', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '=',
	   '+', '-', '~', '`']

pw = ""
while (pw != u_pwd) :
	pw = ""
	for letter in range(len(u_pwd)) :
		guess_pwd = pwd[randint(0, 17)]
		pw = str(guess_pwd) + str(pw)
		print (pw)
		print ("Cracking Password Please wait ...")
		os.system("clear")
print ("Your Pass is : ", pw)
