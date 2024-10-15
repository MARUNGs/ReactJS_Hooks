import React, { useEffect, useRef } from "react";

const useClick = (onClick) => {
  const element = useRef()
  useEffect(() => {

    // 오류가 났다!
    // useEffect는 함수가 실행되기만 하면 되는데 return값을 받으면 안 된다.
    // 따라서 return false -> return 으로 수정할 것.
    if(typeof onClick !== 'function') {
      return
    }

    const { current } = element

    if (current) {
      // componentDidMount, componentDidUpdate 일 때 호출되는 evnet
      current.addEventListener("click", onClick);
    }

    return () => {
      // componentWillUnMount일 때 호출되는 event
      current && current.removeEventListener('click', onClick``)
    }
  }, []);

  return typeof onClick !== 'function' ? undefined : element;
};

export default function Click() {
  // useRef : 렌더링에 필요하지 않은 값을 참조할 수 있는 리액트 훅.
  const title = useClick(); // mount

  const onClick = () => {
    console.log('onClick 입니다.')
  }

  return (
    <div>
      <h1> useRef </h1>
      <h1 ref={title} onClick={onClick}>Click Me!</h1>
    </div>
  );
}
