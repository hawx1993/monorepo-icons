import { useState } from 'react';
import { UserSearchNavBydfiIcon, P2PNavBydfiIcon } from '@byd-next/icons';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <UserSearchNavBydfiIcon
          size={32}
          style={{ color: 'red', fontSize: '32px' }}
        >
          <p>sadsa</p>
        </UserSearchNavBydfiIcon>
        <P2PNavBydfiIcon style={{ color: 'red' }} />
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
