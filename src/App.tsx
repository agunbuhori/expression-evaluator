import React, { FC, useLayoutEffect, useState } from "react";
import { Button, Input, Select } from "./components/common";
import Logo from "./components/molecules/Logo";
import { dynamicOperation, Operator } from "./utils/math";

interface Screen1Props {
  onAddNumber: (value: number) => void;
}
const Screen1: FC<Screen1Props> = ({ onAddNumber }) => {
  const [value, setValue] = useState(0);
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center space-y-16">
      <Logo />
      <div className="max-w-3xl w-full flex md:space-x-2 flex-col md:flex-row px-8 space-y-2 md:space-y-0">
        <Input
          label="Please enter a number"
          className="flex-1"
          type="number"
          onChange={(e) => setValue(+e.target.value)}
        />
        <Button
          label="Add number"
          className="h-16 md:h-auto md:flex-1"
          onClick={() => onAddNumber(value)}
        />
      </div>
    </div>
  );
};

interface Screen2Props {
  firstOperand: number;
}
const Screen2: FC<Screen2Props> = ({ firstOperand }) => {
  const [operator, setOperator] = useState<Operator>("+");
  const [secondOperand, setSecondOperand] = useState<number>();
  const [result, setResult] = useState(firstOperand);

  const getResult = () => {
    if (!secondOperand) {
      return;
    }
    setResult(dynamicOperation(firstOperand, secondOperand, operator));
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center space-y-16">
      <div className="flex-1 p-4 max-w-3xl flex flex-col space-y-4 justify-center items-center">
        <div className="flex space-x-2">
          <div className="w-20 h-24 bg-gray-100 flex items-center justify-center rounded">
            <span className="text-lg font-semibold">{firstOperand}</span>
          </div>
          <div className="w-20 h-24 bg-gray-100 flex items-center justify-center rounded">
            <span className="text-lg font-semibold">{secondOperand}</span>
          </div>
          <div className="w-20 h-24 bg-gray-100 flex items-center justify-center rounded">
            <span className="text-lg font-semibold">{operator}</span>
          </div>
        </div>
        <h1 className="text-6xl font-helvetica">=</h1>
        <h1 className="text-6xl font-helvetica text-emerald-500">{result}</h1>
      </div>
      <div className="w-full max-w-3xl p-4">
        <div className="flex space-x-2 mb-4">
          <Select
            label="Operator"
            className="flex-1"
            value={operator}
            onChange={(e) => setOperator(e.target.value as Operator)}
          >
            {["+", "-", "/", "*"].map((opr) => (
              <option value={opr} key={opr}>
                {opr}
              </option>
            ))}
          </Select>
          <Input
            label="Operand"
            type="number"
            className="flex-1"
            value={secondOperand}
            onChange={(e) => setSecondOperand(+e.target.value)}
          />
        </div>
        <Button label="Add Operation" className="h-16" onClick={getResult} />
      </div>
    </div>
  );
};

function App() {
  const [screen, setScreen] = useState(1);
  const [operand, setOperand] = useState(0);

  useLayoutEffect(() => {
    document.title = "Expression Evaluator";
  });

  const addNumber1 = (n: number) => {
    if (!n) {
      return false;
    }
    setOperand(n);
    setScreen(2);
  };

  if (screen === 1) {
    return <Screen1 onAddNumber={addNumber1} />;
  } else {
    return <Screen2 firstOperand={operand} />;
  }
}

export default App;
