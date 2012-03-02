# Project Euler ~ Problem 3
# http://projecteuler.net/problem=3
#
# The prime factors of 13195 are 5, 7, 13 and 29.
#
# What is the largest prime factor of the number 600851475143 ?


highestNum = 0
factorNum = 600851475143
index = 2

while factorNum > index:
    if factorNum % index == 0:
        factorNum = factorNum / index
    else:
        index += 1

print index
