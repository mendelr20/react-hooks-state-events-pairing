import Likes from "./Likes"
import Comments from "./Comments"

function Info( {data} ) {
    
    return (
        <div>
           <h1>{data.title}</h1>
           <p>{data.views} Views | Uploaded {data.createdAt}</p>
           <Likes data={data}/>
           <br></br>
           <Comments data={data}/>
        </div>
    )
}

export default Info