import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset, incrementByAmount } from './counterSlice'

const Counter = () => {
  const [incrementByAmt, setIncrementByAmt] = useState()
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()
  const addValue = Number(incrementByAmt) || 0
  const resetAll = () => {
    setIncrementByAmt(0)
    dispatch(reset())
  }
  const handleChange = (e) => setIncrementByAmt(e.target.value)
  
  return (
    <section>
      <h1>{count}</h1>
      <div className='button-group'>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={resetAll}>Reset</button>
      </div>
      <div className='button-group'>
        <input
          type='text'
          name='incrementByAmount'
          id='incrementByAmount'
          value={incrementByAmt}
          placeholder='Increment by number'
          onChange={handleChange}
        />
        <button onClick={() => dispatch(incrementByAmount(addValue))}>
          Add
        </button>
      </div>
    </section>
  )
}

export default Counter
