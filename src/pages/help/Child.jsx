import React, {memo} from 'react'

const Child = ({inc}) => {
  console.log("child render");
  const [count, setCount] = React.useState(0)
  
  return (
    <div>
      <h2 onClick={inc}>child </h2>
    </div>
  )
}

export default memo(Child)