export type Operator = "+" | "-" | "*" | "/";

export const dynamicOperation = (
  operand1: number,
  operand2: number,
  operator: Operator
) => {
  switch (operator) {
    case "*":
      return operand1 * operand2;
    case "/":
      return operand1 / operand2;
    case "-":
      return operand1 - operand2;
    default:
      return operand1 + operand2;
  }
};
