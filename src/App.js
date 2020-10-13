import React from 'react';
import logo from './logo.svg';
import './App.css';
import myImage from './Innovation-strategique.jpg'
import myVid from './myvideo.mp4'
function App() {
  return (
    <>
    <div style={{border:"solid 1px black",maxWidth:'100vw'}}>
      <h1 className="title red">Your name here</h1>
      <br/>
      <img src={myImage} alt="brain"/>
      <br/>
      <img src='./images.jpg' alt="barinn"/>
    </div>
    <video style={{width:320,height:240}} controls>
      <source src={myVid} type='video/mp4'></source>
    </video>
    </>
  );
}

export default App;
