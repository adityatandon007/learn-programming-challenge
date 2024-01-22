import { checkEven } from "./check-even";
import { checkPrime } from "./check-prime";
import { checkPalindrome } from "./check-palindrome";
import { findFactorial } from "./find-factorial";
import { twoSum } from "./two-sum";

export const problemsMap = {
  "check-even": checkEven,
  "check-prime": checkPrime,
  "check-palindrome": checkPalindrome,
  "find-factorial": findFactorial,
  "two-sum": twoSum,
};
export const problems = [
  {
    id: "check-even",
    title: "Check Even",
    submitted: false,
    order: 1,
  },
  {
    id: "check-prime",
    title: "Check Prime",
    submitted: false,
    order: 2,
  },
  {
    id: "check-palindrome",
    title: "Check Palindrome",
    submitted: false,
    order: 3,
  },
  {
    id: "find-factorial",
    title: "Find Factorial",
    submitted: false,
    order: 4,
  },
  {
    id: "two-sum",
    title: "Two Sum",
    submitted: false,
    order: 5,
  },
];
