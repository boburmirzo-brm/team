import React, {memo, useMemo, useCallback} from 'react'
import Child from './Child'

let salaries = [100,250,60,800,150]

const Help = () => {
  const [count, setCount] = React.useState(0)
  console.log("help render");

  
  const getTotal = useMemo(() => {
    console.log("getTotal render");
    return salaries.reduce((sum, item) => sum+item, 0)
  }, [])

  const increment = useCallback(()=> {
    setCount(p => p + 1)
  }, [])
  
  return (
    <div>
      <h2>Help</h2>
      <h3>Total: {getTotal}</h3>
      <Child title="salom" text={"text"} inc={increment}/>
      <button onClick={increment}>increment {count}</button>
    </div>
  )
}

export default memo(Help) // HOF