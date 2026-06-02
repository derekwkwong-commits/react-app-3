// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }

// export default App

import Message from './Message';
import ListGroup from './components/ListGroup';
import Button from './components/Button';
import Alert from './components/Alert';
import { useState } from 'react';
import Navbar from './components/Navbar';

useState

function App() {
  const [alertVisibility, setAlertVisibility] = useState(false);

  return (
    <>
      <Navbar></Navbar>
      {alertVisibility && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Message />
      <ListGroup />
      <Button color='primary' onClick={() => setAlertVisibility(true)}>My Button</Button>
      <Button color='secondary' onClick={() => alert('Secondary Button clicked!')}>My Button</Button>
    </>
  )
}

export default App;