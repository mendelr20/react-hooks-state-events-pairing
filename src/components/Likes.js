import react, { useState } from "react"
function Likes( {data} ) {
    
    const [up, setUp] = useState(9210)
    const [down, setDown] = useState(185)
    function upButton(){
        setUp()
    }

    function downButton(){
        setDown()
    }

    return (
        <div>
            <button onCLick={upButton} >{up} 👍</button>
            <button onClick={downButton} >{down} 👎</button>
        </div>
    )
}

export default Likes