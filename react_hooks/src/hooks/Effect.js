import React, { useEffect, useState } from "react";

export default function Effect() {
  // variable
  const [num, setNum] = useState(0);
  const [lNum, setLastNum] = useState(0);

  // fnction
  const sayHello = () => {
    console.log("hi???..");
  };

  // hooks
  useEffect(() => {
    sayHello();
  }, [num]);

  return (
    <div>
      <h1> useEffect </h1>
      <button onClick={() => setNum(num + 1)}> {num} </button>
      <button onClick={() => setLastNum(lNum + 1)}> {lNum} </button>
    </div>
  );
}

// useEffect: 아래의 역할을 모두 수행하는 리액트 훅.
// componentWillUnmount / componentDidMount / ComponentWillUpdate
