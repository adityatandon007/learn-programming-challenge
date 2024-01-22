const starterCodeCheckPalindrome = `function checkPalindrome(str){
  // Write your code here
};`;

export const checkPalindrome = {
  id: "check-palindrome",
  title: "3. Check Palindrome",
  problemStatement: `<p>
  Given a string <code>str</code> check whether it is <em>palindrome or not</em>.
</p>
<p>
A string is said to be palindrome if it reads the <em>same backward as forward</em>. 
</p>
<p>You can return <code>true</code> if it is palindrome otherwise return <code>false</code></p>`,
  examples: [
    {
      id: 1,
      inputText: "str = madam",
      outputText: "true",
      explanation: "Because 'madam' is palindrome",
    },
    {
      id: 2,
      inputText: "str = abcbca",
      outputText: "false",
      explanation: "Because 'abcbca' is not even",
    },
  ],
  constraints: `<li><code>1 ≤ length of str ≤ 10000</code>
</li>
<li><strong>Only one valid answer exists.</strong>
</li>`,
  starterCode: starterCodeCheckPalindrome,
  order: 3,
};
