# Project Euler ~ Problem 5
# http://projecteuler.net/problem=5
#
# 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
#
# What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

num = 0
found = 0
index = 3

while found == 0:
    num += 20

    # Loops through 3 - 20 and finds x mod loop number.  If loop number is 20 then number is found
    while num % index == 0 and index <= 20:
        if index == 20:
            found = 1 # if loop is entered then
        index += 1
    index = 3
    
print num 
                
