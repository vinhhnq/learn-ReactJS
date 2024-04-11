import React, {useState} from 'react';

function Colorbox(props) {
  const [isSent, setIsSent] = useState(false);
  const [messenger, setMessenger] = useState('Hi!')
  if (isSent){
    return <h1>Hello World..</h1>
  }

  return (
      <form onSubmit={(e) =>{
        e.preventDefault();
        setIsSent(true);
        setMessenger(messenger);
      }}>
        <textarea placeholder="messenger"
          value={messenger}
          onChange={e => setMessenger(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
      
  );
}

export default Colorbox;
