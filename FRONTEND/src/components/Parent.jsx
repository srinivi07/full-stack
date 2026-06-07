import React from 'react'
import Child from './Child'

const Parent = () => {
  return (

    <div>
        <Child name="nivi" age={18} 
        marks={[61,42,83,74,95]} 
        person={{name:"nivi",dept:["AI&DS","CT"]}}/>
        </div>
  )
}

export default Parent