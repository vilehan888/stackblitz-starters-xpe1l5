import {useState} from 'react';
export function Like() {
  const [isLiked, setIsLiked]  = useState(false);
  function AlterarLike() {
    setIsLiked(!isLiked)
  }
  return (
    <div>
      
      <button onClick={AlterarLike}>
      {isLiked ? <span>👍</span> : <span>👎 </span>}
      {isLiked ? 'UnLike' : 'Like'}
      </button>
    </div>
  );
}
