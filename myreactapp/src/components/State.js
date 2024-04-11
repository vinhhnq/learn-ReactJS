import React, {useState} from 'react';

function State(props) {
  const [color, setcolor] = useState('white');
  const handleBlack = () =>{
    setcolor('black')
  }

  const handlewhite = () => {
    setcolor('white')
  }
  return (
    <div>
      {color}
      <button onClick={handleBlack}>Change to black</button>
      <button onClick={handlewhite}>Change to white</button>
    </div>


  );
}

export default State;
