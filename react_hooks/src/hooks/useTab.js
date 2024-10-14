import React, { useState } from "react";

const content = [
  {
    tab: "Section 1. ",
    content: "Content of Section 1",
  },
  {
    tab: "Section 2. ",
    content: "Content of Section 2",
  },
];

const useTabs = (initTab, allTabs) => {
  // 왜 자꾸 useState가 에러가 날까? >>> useState는 항상 블록 내 최상단에서만 선언헤야한다.
  const [currentIndex, setCurrentIndex] = useState(initTab);

  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }

  // 기본적으로 currentItem은 allTabs[currentIndex]가 될 것이다.
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

export default function useTab() {
  const { currentItem, changeItem } = useTabs(1, content);

  return (
    <div>
      <h1> useTab </h1>

      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}

      <div>{currentItem.content}</div>
    </div>
  );
}
