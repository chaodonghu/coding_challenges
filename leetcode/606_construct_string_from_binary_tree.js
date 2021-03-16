/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function (t) {
  if (!t) return "";
  // For some reason, end node will show t.left === null, t.tight ===null  instead of undefined
  const left =
    (t.left || t.right) && t.left === null
      ? `()`
      : t.left
      ? `(${tree2str(t.left)})`
      : "";
  const right = t.right ? `(${tree2str(t.right)})` : ``;
  return `${t.val}${left}${right}`;
};
