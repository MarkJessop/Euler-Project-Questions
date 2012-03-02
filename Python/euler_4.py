# Project Euler ~ Problem 4
# http://projecteuler.net/problem=4
#
# A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 99.
#
# Find the largest palindrome made from the product of two 3-digit numbers.

import math

num1 = 100
num2 = 100
product = 0
reverse = 0
found = 0

while num1 <= 999:
    while num2 <= 999:
        product = num1 * num2
        tempNum = product

        # Reverse Number if tempNum is divisible by 11 because all palindromes are divisible by 11
        if tempNum % 11 == 0:
            while tempNum > 0:
                digit = tempNum % 10
                reverse = reverse * 10 + digit
                tempNum = math.floor(tempNum / 10)

            # Check if it is a palindrome
            if product == reverse and product != 0:

                # palindrome found, replace highest with new highest number
                if found < product:
                    found = product

        num2 += 1
        reverse = 0

    num1 += 1
    num2 = 100

print found
    
                
