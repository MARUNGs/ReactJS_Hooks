import React, { useEffect, useState } from "react";

function useTitle(initTitle) {
  const [title, setTitle] = useState(initTitle);

  function updateTitle() {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerHTML = title;
  }

  useEffect(updateTitle, [title]);

  return setTitle;
}

export default function Title() {
  const titleUpdate = useTitle("Loading ...");
  setTimeout(() => {
    titleUpdate("Home");
  }, 5000);

  return (
    <div>
      <h1> useTitle </h1>
    </div>
  );
}
