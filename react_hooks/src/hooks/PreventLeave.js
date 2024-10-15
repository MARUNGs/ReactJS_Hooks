const usePreventLeave = () => {
  const listener = (e) => {
    // <a> 태그 또는 submit 태그를 누를 때 window가 새로고침되는 현상이 있는데 
    // 이러한 동작을 막아주는 기능
    e.preventDefault()
    e.returnValue = ''
  }

  // beforeunload: window가 닫히기 전에 listener 함수를 실행시키는 이벤트
  const enablePrevent = () => window.addEventListener('beforeunload' , listener)
  const disablePrevent = () => window.addEventListener('beforeunload', listener)

  return {enablePrevent, disablePrevent}
}

export default function PreventLeave() {
  const {enablePrevent, disablePrevent} = usePreventLeave()

  return (
    <div>
      <h1>PreventLeave</h1>

      <button onClick={enablePrevent}>protect</button>
      <button onClick={disablePrevent}>unProtect</button>
    </div>
  )
}