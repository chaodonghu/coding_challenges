#  Given the root of a binary tree, return the length of the diameter of the tree.
#
#  The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.
#
#  The length of a path between two nodes is represented by the number of edges between them.
#
#
#
#  Example 1:
#
#
#  Input: root = [1,2,3,4,5]
#  Output: 3
#  Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].
#  Example 2:
#
#  Input: root = [1,2]
#  Output: 1
#
# Definition for a binary tree node.
# function TreeNode(val, left, right) {
#     this.val = (val===undefined ? 0 : val)
#     this.left = (left===undefined ? null : left)
#     this.right = (right===undefined ? null : right)
# }
#
#
# @param {TreeNode} root
# @return {number}

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        diameter = 0

        def dfs(root):
            if not root:
                return 0

            # assign a variable to the local but not outer scope
            nonlocal diameter

            # recursively find the longest path in both the left and right child
            left = dfs(root.left)
            right = dfs(root.right)

            # update the diameter if the left path plus the right path is larger
            diameter = max(diameter, left + right)

            # return the longest path between the right and the left and add 1 for the path connecting its node and its parent
            return 1 + max(left, right)

        dfs(root)

        return diameter

# Time: O(N)
# Space: O(N)
