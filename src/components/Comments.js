import react, {useState} from "react";


function Comments( {data} ) {
    
    const [trueFalse, setTrueFalse] = useState(true)
    const [buttonText, setButtonText] = useState('Hide Comments');
    const commentsInfo = data.comments

    function click(){
        if (buttonText === "Show Comments") {
            setButtonText("Hide Comments");
            setTrueFalse(true)
        } else {
            setButtonText("Show Comments");
            setTrueFalse(false)
        }
    }

    const commentsMap = commentsInfo.map((e) => {
        console.log(e)
        return (
            <div>
                <h1>{e.user}</h1>
                <p>{e.comment}</p>
            </div>
        )
    })

    return (
        <div>
            <button onClick={click}>{buttonText}</button>
            <br></br>
            <hr></hr>
            {trueFalse ? commentsMap : null }
        </div>
    )
}

export default Comments