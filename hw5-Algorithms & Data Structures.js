// 1.Valid Anagram: https://leetcode.com/problems/valid-anagram/
var isAnagram = function(s,t) {
       let sArr=s.split('');
       let tArr=t.split('');
       sArr.sort();
       let newS=sArr.join('');
       tArr.sort();
       let newT=tArr.join('');
       return newS===newT;
};

// 2.Contains Duplicate: https://leetcode.com/problems/contains-duplicate/
var containsDuplicate = function(nums) {
    nums.sort();
    for(let k=0;k<nums.length-1;k++){
        if(nums[k]==nums[k+1])
            return true;
    } return false;
};

// 3.Maximum Product of Three Numbers:
// https://leetcode.com/problems/maximum-product-of-three-numbers/
var maximumProduct = function(nums) {
    nums.sort();
    let result1=nums[0]*nums[1]*nums[nums.length-1];
    let result2=nums[nums.length-1]*nums[nums.length-2]*nums[nums.length-3];
    let result= Math.max(result1, result2);
    return result;
};
// ikinci usul
var maximumProduct = function(nums) {
    nums.sort();
    if(nums[nums.length-1]<=0){
     return nums[nums.length-1]*nums[nums.length-2]*nums[nums.length-3];
    }
    let theLast=nums[nums.length-1];
    if(nums[0]*nums[1]>=nums[nums.length-2]*nums[nums.length-3]){
        theLast*=nums[0]*nums[1]
    }
    else {
        theLast*=nums[nums.length-2]*nums[nums.length-3];
    }
    return theLast;
};
/////////////*********** her biri eyni yerde sehv verir ******///////////////

// 4.Guess Number Higher or Lower:
// https://leetcode.com/problems/guess-number-higher-or-lower/
var guessNumber = function (n) {
    if (guess(n) === 0) return n
    let low = 1, high = n;
    while (n > 0) {
        const mid = (parseInt(high + low) / 2);
        const current = guess(mid);
        if (current === 0) { return mid }
        if (current === -1) { high = mid; }
        if (current === 1) { low = mid; }
    }
};

// 5.First and Last Position of Element:
// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
var searchRange = function(nums, target) {
   nums = nums.sort((a, b) => (a-b));
    let result = [];
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            result.push(i);
        }
    }
    return (result.length == 0) ? [-1, -1] : result;
};
//////////////************ kecmediyi case-ler var *************/////////////

// 6.First Bad Version: https://leetcode.com/problems/first-bad-version/
var solution = function(isBadVersion) {
    return function(n) {
        let low = 1, high = n
        while(low < high) {
            const mid = low + Math.floor((high-low)/2)
            if(isBadVersion(mid)) {
                high = mid
            } else {
                low = mid + 1
            }
        }
        return low
    };
};

// 7.SqrtX: https://leetcode.com/problems/sqrtx/
var mySqrt = function(x) {
    let low = 1;
    let high = x;
    if(x < 2) return x;
    while(low < high) {
        const mid = Math.floor((low + high) / 2)
        if(mid*mid === x) return mid
        else if(mid*mid >x) high = mid
        else low = mid+1
    }
    return low - 1
};

// 8.Valid Parentheses: https://leetcode.com/problems/valid-parentheses/
var isValid = function(s) {
    const leftSymbol=[];
    for(let i=0;i<s.length;i++){
        if(s[i]==='(' || s[i]==='{' || s[i]==='['){
            leftSymbol.push(s[i]);
        }
        else if(s[i]===')' && leftSymbol.length!==0 && leftSymbol[leftSymbol.length - 1]==='('){
            leftSymbol.pop();
        }
        else if(s[i]==='}' && leftSymbol.length!==0 && leftSymbol[leftSymbol.length-1]==='{'){
            leftSymbol.pop();
        }
        else if(s[i]===']' && leftSymbol.length!==0 && leftSymbol[leftSymbol.length-1]==='['){
            leftSymbol.pop();
        }
        else {
            return false;
        }
    }
    return leftSymbol.length === 0;
};

// 9.Backspace String Compare: https://leetcode.com/problems/backspace-string-compare/
var backspaceCompare = function(s, t) {
    let sArray=[];
    let tArray=[];
    for(let i=0;i<s.length;i++){
        if(s[i]=="#"){
            sArray.pop();
        }
        else {
            sArray.push(s[i]);
        }
    }
    for(let i=0;i<t.length;i++){
        if(t[i]=="#"){
            tArray.pop();
        }
        else {
            tArray.push(t[i]);
        }
    }
    sArray=sArray.join("");
    tArray=tArray.join("");
    return sArray==tArray;
};

// 10.Evaluate Postfix Expression:
// https://leetcode.com/problems/evaluate-reverse-polish-notation/
var evalRPN = function(tokens) {
    const stack=[];
    for(let token of tokens){
        switch(token){
            case '+':{
                const result=stack.pop()+stack.pop();
                stack.push(result);
                break;
            }
            case '-':{
                const top=stack.pop();
                const secondTop=stack.pop();
                const result=secondTop-top;
                stack.push(result);
                break;
            }
            case '*':{
                const result=stack.pop()*stack.pop();
                stack.push(result);
                break;
            }
            case '/':{
                const top=stack.pop();
                const secondTop=stack.pop();
                const result=Math.trunc(secondTop/top);
                stack.push(result);
                break;
            }
            default:stack.push(+token);
        }
    }
    return stack.pop();
};

// 11.Invert Binary Tree: https://leetcode.com/problems/invert-binary-tree/
var invertTree = function(root) {
    if (root) {
    var temp = root.left;
    root.left = root.right;
    root.right = temp;

    invertTree(root.left);
    invertTree(root.right);
  }

  return root;
};

// 12.Symmetric Tree: https://leetcode.com/problems/symmetric-tree/
var isSymmetric = function(root) {
  if(root === null)
    return true;
  return isSymetricA(root.left, root.right);
};

var isSymetricA = function(root1, root2) {
  if(root1 === null)
    return root2 === null;

  if(root2 === null || root1.val !== root2.val) {
    return false;
  }

  return isSymetricA(root1.left, root2.right) && isSymetricA(root1.right, root2.left);
}

// 13.Pre-order Traversal: https://leetcode.com/problems/binary-tree-preorder-traversal/

// 14.In-order Traversal: https://leetcode.com/problems/binary-tree-inorder-traversal/

// 15.Post-order Traversal: https://leetcode.com/problems/binary-tree-postorder-traversal/
