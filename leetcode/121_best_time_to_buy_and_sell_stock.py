class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        profit = 0
        localMin = prices[0]

        # loop through the prices starting at the second element
        # since our localMin is the first element
        for num in prices[1:]:
            localMin = min(localMin, num)

            profit = max(num - localMin, profit)

        return profit


# Time: O(N), we need to loop through all elements in the prices list
# Space: O(1), we store profit and localMin as constants
