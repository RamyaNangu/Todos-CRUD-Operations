import React from 'react'

const Item = (props) => {
    const {index,todo,onDelete,onEdit} = props
  return (
    <div className='flex justify-between w-52'>
      <h1 className=''>{todo}</h1>
      <div>
        <button onClick={()=>onEdit(index)} className='mx-2'>✏️</button>
        <button onClick={()=>onDelete(index)}>❌</button>
      </div>
    </div>
  )
}

export default Item
