import video from "../data/video.js";
import YouTube from "./YouTube.js";
import Info from "./Info.js";


function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <YouTube/>
      <Info data={video}/>
    </div>
  );
}

export default App;
