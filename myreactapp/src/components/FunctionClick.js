import React from 'react';

function FunctionClick(props) {
  const clickHandle = () => {
    return <h1>hello world</h1>
  }

  return (
    <div>
      <button onClick={clickHandle}>Click</button>
    </div>
  );
}

export default FunctionClick;
