# You must implement the count_low_high() function. Its parameter is a list of numbers.
#
# If a number is greater than 50 or divisible by 3, it will count as a high. If these conditions are not met, the number is considered a low.
#
# At the end of the function, you must return a list that contains the number of lows and highs, in that order.
#
# In case the list is empty, you may return None.
#
# Sample Input #
# num_list = [20, 9, 51, 81, 50, 42, 77]
# Sample Output #
# [2, 5] # 2 lows and 5 highs

def count_low_high(num_list):
    high_list = list(filter(lambda n: n > 50 or n % 3 == 0, num_list))
    low_list = list(filter(lambda n: n <= 50 and not n % 3 == 0, num_list))
    return [len(low_list), len(high_list)]
