import { useState } from "react"
import Test from "../pages/test"

const First = () => {
    const [data, setData] = useState(0)
    // console.log(data)
    // const count = () => {
    //     setData(data + 1)
    // }
    
    return(
        <div>
       <h2>Hello</h2>
       <h1>monu bhaiya</h1>
       {data}
       {/* <div>
       <button onClick={count}>click me</button>  
       </div> */}
       <Test data = {data} setData = {setData}/>
        </div>
    )
}
export default First