class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        # instantiate pointers at the end of the p1 and p2 arrays
        p1 = m - 1
        p2 = n - 1

        # we have 3 pointers
        # go through nums1 array from the end to the beginning in reverse
        for i in range(m + n - 1, -1, -1):
            # once our p2 pointer reaches the end, break out of the loop
            if p2 < 0:
                break

            # if we are still in bounds and not reached the end of the p1 array
            # and the number in the first array is greater than the second array
            # replace the current number in the nums1 array with the one at p1
            if p1 >= 0 and nums1[p1] > nums2[p2]:
                nums1[i] = nums1[p1]
                p1 -= 1
            else:
                # the number is less, therefore replace the number with the one at p2
                nums1[i] = nums2[p2]
                p2 -= 1

        return nums1

    # Time: O(n + m) where n and m are the lengths of nums1 and nums2 array
    # Space: O(1) because we are modifying the array in place
