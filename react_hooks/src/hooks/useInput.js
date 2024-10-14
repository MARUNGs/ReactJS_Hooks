import "./App.css";

// import
import React, { useState } from "react";

/*
  [ custom useInput func() ]
  @param initVal 초기값 파라미터1
  @param validator 파라미터2

  여기서 사용한 validator 검증기능은 hook과는 연관없으나 이런 식을도 사용할 수 있음을 인지할 것.
*/
const useInput = (initVal, validator) => {
  const [value, setValue] = useState(initVal);

  // function change
  const onChange = (e) => {
    const {
      target: { value },
    } = e;

    // 검증기능 추가
    let validFlag = true;
    typeof validator === "function" && (validFlag = validator(value));
    validFlag && setValue(value);
  };

  return { value, onChange };
};

export default function App() {
  // useInput 사용
  const maxLen = (value) => value.length <= 10;
  const name = useInput("hey...", maxLen);

  return (
    <div className="App">
      <h1>hihihihi</h1>
      <input placeholder="Write Your name" {...name} />
    </div>
  );
}
