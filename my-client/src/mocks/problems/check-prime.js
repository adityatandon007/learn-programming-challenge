const starterCodeCheckPrime = `function checkPrime(num){
  // Write your code here
};`;

export const checkPrime = {
  id: "check-prime",
  title: "2. Check Prime",
  problemStatement: `<p>
  Given a number <code>num</code> check whether it is <em>prime or not</em>.
</p>
<p>You can return <code>true</code> if it is prime otherwise return <code>false</code></p>`,
  examples: [
    {
      id: 1,
      inputText: "num = 7",
      outputText: "true",
      explanation: "Because 7 is a prime number",
    },
    {
      id: 2,
      inputText: "num = 24",
      outputText: "false",
      explanation: "Because 24 is not a prime number",
    },
    {
      id: 3,
      inputText: "num = 2",
      outputText: "true",
      explanation: "Because 2 is a prime number",
    },
  ],
  constraints: `<li><code>1 ≤ num ≤ 1000</code>
</li>
<li><strong>Only one valid answer exists.</strong>
</li>`,
  starterCode: starterCodeCheckPrime,
  order: 2,
};
