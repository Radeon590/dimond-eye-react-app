import '../styles/App.css';
import FilePicker from './FilePicker';
import { useState, useEffect } from 'react';

function App() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [fileName, setFileName] = useState("");
  const server_path = 'http://localhost:3000/';

  if(!isVideoLoaded){
    return (
    <div className="App">
      <FilePicker setIsVideoLoaded={setIsVideoLoaded} setFileName={setFileName}/>
    </div>
  );
  }
  else{
    const video_url = server_path + 'video_stream/' + fileName
    return(
      <div className='App'>
        <iframe width="710" height="400" preload="auto" autoplay="autoplay" src={video_url}
					title="handled video" frameborder="0" 
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
				</iframe>
        <button onClick={() => setIsVideoLoaded(false)}>close</button>
        </div>
    );
  }
}

export default App;