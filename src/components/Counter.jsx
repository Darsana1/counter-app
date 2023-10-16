import React, { useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, incrementByAmount } from '../redux/counterSlice'
import { increment } from '../redux/counterSlice'

import { reset } from '../redux/counterSlice'

function Counter() {
   const [amount,setAmount] = useState("")
    const dispatch = useDispatch()
    const count = useSelector((state)=>state.counter.count)
    const handleIncrement =()=>{
     
      if(amount==""){
        alert("please provide amount")
      }
      else{
        dispatch(incrementByAmount(Number(amount)))
      }
    }
  return (
    <div style={{height:"70vh"}} className='w-100 d-flex justify-content-center align-items-center'>
<div className="d-flex justify-content-center align-items-center border rounded p-5 w-25 flex-column">
    <h1 style={{fontSize:"100px"}}>{count}</h1>
    <div className='d-flex justify-content-between w-100 mt-5'>
    <button  className="btn btn-warning me-2" onClick={()=>dispatch(decrement())}>Decrement</button>
    <button   className="btn btn-danger me-2" onClick={()=>dispatch(reset())}>Reset</button>
    
    <button  className="btn btn-success me-2" onClick={()=>dispatch(increment())} >Increment</button>
    
    </div>
    <div className="d-flex mt-5">
    <input className="form-control" type="text" placeholder="Enter amount to be increment" onChange={e=>setAmount(e.target.value)} />
    <button className="btn btn-primary ms-3" onClick={handleIncrement} >Increment By Amount</button>
    </div>
</div>

    </div>
  )
}

export default Counter