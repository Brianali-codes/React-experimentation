import { useState } from 'react'
import './App.css'
import { useRef } from 'react'


function App() {
  const myRef = useRef();
  const [count, setCount] = useState(0)
  const [degree, setDegree] = useState(0)

  return (
    <>
      <p className="text-xl font-bold text-center">
        React Experimentation.
      </p>
      <br /><br /><br />
      <div className='bg-gray-300 p-5 rounded-2xl'>
          <p className='font-bold text-center'>Counter Program.</p>
          <br />
          <p>Count is {count}</p>
          <br /><br />
          <div className='flex flex-row justify-center items-center gap-5'>
            <button className='bg-cyan-500 p-3 rounded-xl' onClick={()=> setCount(count + 1)}>Increment</button>
            <button className='bg-cyan-500 p-3 rounded-xl' onClick={()=> setCount(count - 1)}>Decrement</button>
          </div>
      </div>
      <br /><br />
      <div className='bg-gray-300 p-5 rounded-2xl'>
        <p className='font-bold text-center'>Converter Programme ° to K (Degrees celcius To Kelvin)</p>
        <br />
        <p>{degree}</p>
        <br />


          <input type="text" placeholder='Input Value in Degrees or Kelvin' ref={myRef} className='bg-gray-200 p-3 rounded-lg'/>
          <br /><br /><br />
        <div className='flex flex-row justify-center items-center gap-5'>
          
            <button className='bg-cyan-500 p-3 rounded-xl' onClick={()=> setDegree(degree + Number(myRef.current.value) + 274.15)}>Convert To Kelvin</button>
            <button className='bg-cyan-500 p-3 rounded-xl'>Convert To Degree</button>
          </div>
      </div>
      
    </>
  )
}

export default App
