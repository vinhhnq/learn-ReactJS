import React, {useState} from 'react';

function Counting(props) {
  const [count, setCount] = useState(0)

  const handlecounting = () => {
    setCount(count +1)
  }
  return (
    <div>
      <h1>{count}</h1>

      <button onClick={handlecounting}>Increase</button>
    </div>
  );}


export default Counting;
