import React from 'react';
function Greet(props) {
  return (
    <div>
      <h1>
        hello, {props.name} a.k.a {props.heroName}
      </h1>
      {props.children}
    </div>
  );
}

export default Greet;
