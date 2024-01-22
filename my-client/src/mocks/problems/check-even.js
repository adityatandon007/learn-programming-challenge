const starterCodeCheckEven = `function checkEven(num){
  // Write your code here
};`;

export const checkEven = {
  id: "check-even",
  title: "1. Check Even",
  problemStatement: `<p>
  Given a number <code>num</code> check whether it is <em>even or not</em>.
</p>
<p>You can return <code>true</code> if it is even otherwise return <code>false</code></p>`,
  examples: [
    {
      id: 1,
      inputText: "num = 4",
      outputText: "true",
      explanation: "Because 4 is even",
    },
    {
      id: 2,
      inputText: "num = 13",
      outputText: "false",
      explanation: "Because 13 is not even",
    },
  ],
  constraints: `<li><code>1 ≤ num ≤ 1000</code>
</li>
<li><strong>Only one valid answer exists.</strong>
</li>`,
  starterCode: starterCodeCheckEven,
  order: 1,
};
