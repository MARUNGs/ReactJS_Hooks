import React, { useEffect } from "react";

const useBeforeLeave = (onBefore) => {
  const handler = (e) => {
    e.clientY <= 0 && onBefore()
  }

  useEffect(() => {
    if(typeof onBefore !== 'function') return

    document.addEventListener('mouseleave', handler)
    return () => document.removeEventListener('mouseleave', handler)
  }, [])
}

export default function PageLeave() {
  const begForLife = () => console.log('가지마');
  useBeforeLeave(begForLife)

  return (
    <div>
      <h1>Page Leave</h1>
    </div>
  )
}