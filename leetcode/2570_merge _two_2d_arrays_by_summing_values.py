class Solution:
    def mergeArrays(
        self, nums1: List[List[int]], nums2: List[List[int]]
    ) -> List[List[int]]:
        array_map = {}

        # merge both arrays together and then add them to the map
        for key, val in nums1 + nums2:
            array_map[key] = array_map.get(key, 0) + val

        # sort the array and convert the array_map to an array
        return sorted([key, val] for key, val in array_map.items())

