# Given an array of integers, return indices of the two numbers such that they add up to a specific target.
#
# You may assume that each input would have exactly one solution, and you may not use the same element twice.
#
# Example:
#
# Given nums = [2, 7, 11, 15], target = 9,
#
# Because nums[0] + nums[1] = 2 + 7 = 9,
# return [0, 1].

# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}
def two_sum(nums, target)
  # instantiate dictionary
  dict = {}
  # loop through nums array with element and index
  nums.each_with_index do |n, i|
    # if the dictionary contains the complement then return the complement and current index
    if dict[target - n]
      return [dict[target - n], i]
    else
      # if there is no complement store it in our dictionary
      dict[n] = i
    end
  end
end
