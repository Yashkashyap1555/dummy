// import First from "../component/first"

const Test = (props) =>{
    console.log(props)
    const {data, setData} = props
    const count = () => {
        setData(data + 1)
    }
    return(
        <div>
        {/* Hello  */}
        {/* <First /> */}
        <button onClick={count}>click me</button>
        </div>
    )
}
export default Test