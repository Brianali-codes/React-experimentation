import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p className="text-xl font-bold text-center">
        React Experimentation.
      </p>
      <br /><br /><br /><br />
      <div>
          <p>Count is {count}</p>
          <br /><br />
          <div className='flex flex-row justify-center items-center gap-5'>
            <button className='bg-cyan-500 p-3' onClick={()=> setCount(count + 1)}>Increment</button>
            <button className='bg-cyan-500 p-3' onClick={()=> setCount(count - 1)}>Decrement</button>
          </div>
            

          

      </div>
      
    </>
  )
}

export default App
