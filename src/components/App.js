import '../styles/App.css';
import FilePicker from './FilePicker';
import { useState } from 'react';

function App() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [fileName, setFileName] = useState("");
  const server_path = 'http://localhost:3000/';

  function deleteVideo(){
    fetch('http://localhost:3000/delete_video/' + fileName,
        {
            method: 'GET',
        }).then(
          () => {setIsVideoLoaded(false)}
        ).catch(function(error){
            console.log(error)
        });
  }

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
        <iframe width="710" height="400" preload="auto" autoPlay="autoplay" src={video_url}
					title="handled video" frameBorder="0" 
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
				</iframe>
        <button onClick={() => deleteVideo()}>close</button>
        </div>
    );
  }
}

export default App;