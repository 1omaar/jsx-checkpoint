import React from 'react';
import './App.css';
import myImage from './Innovation-strategique.jpg'
import myVid from './myvideo.mp4'
function App() {
  return (
    <>
    <div style={{border:"solid 1px black",maxWidth:'100vw'}} className='image-position'>
      <h1 className="title red">Your name here</h1>
      <br/>
      <img className='image-design' src={myImage} alt="brain"/>
      <br/>
      <img className='image-design' src='./images.jpg' alt="barinn"/>
    </div>
    <video style={{width:320,height:240,margin:'0 40%'}} controls>
      <source src={myVid} type='video/mp4'></source>
    </video>
    </>
  );
}

export default App;
