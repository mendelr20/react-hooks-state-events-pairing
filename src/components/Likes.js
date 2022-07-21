import react, { useState } from "react"
function Likes( {data} ) {
    
    const [up, setUp] = useState(data.upvotes)
    const [down, setDown] = useState(data.downvotes)

    function upButton(){
        setUp(up + 1)
    }

    function downButton(){
        setDown(down + 1)
    }

    return (
        <div>
            <button onClick={upButton} >{up} 👍</button>
            <button onClick={downButton} >{down} 👎</button>
        </div>
    )
}

export default Likes