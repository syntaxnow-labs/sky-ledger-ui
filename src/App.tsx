import { useState } from 'react'
import './App.css';
import {Button} from "./components/ui/button";

function App() {
  const [count, setCount] = useState(123)

  return (
    <>
       <div className="App bg-sky-50  border-pink-300">
      {/* Add these classes for testing */}
      <h1 className="text-3xl font-bold underline text-center p-4">
        Hello world!
      </h1>
      {/* ... other components */}
      <div>{count}</div>
      <Button />
    </div>
    </>
  )
}

export default App;
