const starterCodeFindFactorial = `function findFactorial(num){
  // Write your code here
};`;

export const findFactorial = {
  id: "find-factorial",
  title: "4. Find Factorial",
  problemStatement: `<p>
  Given a number <code>num</code> find its factorial.
</p>
<p>Factorial of a non-negative number <code>num</code> is the multiplication of all numbers smaller than or equal to n.</p>`,
  examples: [
    {
      id: 1,
      inputText: "num = 4",
      outputText: "24",
      explanation: "Factorial of 4 is 4*3*2*1 which is 24",
    },
    {
      id: 2,
      inputText: "num = 6",
      outputText: "720",
      explanation: "Factorial of 6 is 6*5*4*3*2*1 which is 720",
    },
  ],
  constraints: `<li><code>1 ≤ num ≤ 20</code>
</li> 
<li><strong>Only one valid answer exists.</strong>
</li>`,
  starterCode: starterCodeFindFactorial,
  order: 4,
};
