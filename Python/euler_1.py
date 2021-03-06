# Project Euler ~ Question 1
# http://projecteuler.net/problem=1
#
# If we list all the natural numbers below 10 that are multiples of 3 or 5,
# we get 3, 5, 6 and 9. The sum of these multiples is 23.
#
# Find the sum of all the multiples of 3 or 5 below 1000.

index = 3
sum = 0

while index < 1000:
    if index % 3 == 0 or index % 5 == 0:
        sum += index

    index += 1

print sum
