# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

# Input: preorder = [1,2,4,5,3,6,7], postorder = [4,5,2,6,7,3,1]
# Output: [1, 2, 3, 4, 5, 6, 7]


class Solution:
    def constructFromPrePost(
        self, preorder: List[int], postorder: List[int]
    ) -> Optional[TreeNode]:
        if not preorder or not postorder:
            return None

        # preorder - ROOT -> LEFT -> RIGHT
        # postorder - LEFT -> RIGHT -> ROOT
        # the root is always the first element in preorder or the last element in the postorder
        # initiate our root
        root = TreeNode(preorder[0])
        # handle the base case where our tree is just a root
        if len(preorder) == 1:
            return root

        # the left subtree is always going to be the second index of the preorder tree
        left_subroot = preorder[1]
        # find that left_subroot index in the post order tree to determine it's size
        # we can use left_subroot here since all the elements in the tree are unique
        left_subroot_index = postorder.index(left_subroot)

        # form our left subtree by slicing the left_subroot_index, calling our function recursively
        # the preorder tree will be all the elements from 1 (since we have the root and the left subroot) to left_subroot_index + 2
        # the postorder tree will be all the elements from 0 to left_subroot_index + 1
        root.left = self.constructFromPrePost(
            preorder[1 : left_subroot_index + 2], postorder[: left_subroot_index + 1]
        )

        # Right subtree nodes are the remaining ones
        # the preorder tree will be all the elements from left_subroot_index + 2 to the end
        # the postorder tree will be all the elements from the left_subroot_index + 1 to the second to last element since the last element is the root
        root.right = self.constructFromPrePost(
            preorder[left_subroot_index + 2 :], postorder[left_subroot_index + 1 : -1]
        )

        return root

# Time complexity: O(N^2) where N is the number of nodes in the tree
# Space complexity: O(N) where N is the number of nodes in the tree