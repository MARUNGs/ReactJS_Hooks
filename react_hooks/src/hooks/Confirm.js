const useConfirm = (msg = '', onConfirm, onCancle) => {
  if(!onConfirm && typeof onConfirm !== 'function') return;
  if(onCancle && typeof onCancle !== 'function') return;

  const action = () => {
    window.confirm(msg) ? onConfirm() : onCancle()
  }

  return action
}

export default function Confirm() {
  const confirm = () => console.log('onConfirm');
  const cancle = () => console.log('onCancle');
  const confirmDelete = useConfirm('삭제하시겠습니까?', confirm, cancle)

  return (
    <button onClick={confirmDelete}>Delete</button>
  )
}