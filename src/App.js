import React, { useState } from 'react'
import './App.css';

const App = () => {
  let offsetX, offsetY
  let startPointX, endPointX

  const [slice,setSlice] = useState("false")
  const [StartPointX,setStartPointX] = useState();
  const [EndPointX,setEndPointX] = useState();

  const move = (e) => {
    const cuttingArea = document.getElementById("cutting-area");

    document.getElementById("coordinate-x").innerText = e.clientX
    document.getElementById("coordinate-y").innerText = e.clientY

    if((e.clientX <= cuttingArea.getBoundingClientRect().left || e.clientX >= (cuttingArea.getBoundingClientRect().left+cuttingArea.clientWidth)) ||
      (e.clientY <= cuttingArea.getBoundingClientRect().top || e.clientY >= (cuttingArea.getBoundingClientRect().top+cuttingArea.clientHeight)))
        // if((e.clientY <= cuttingArea.getBoundingClientRect().top || e.clientY >= (cuttingArea.getBoundingClientRect().top+cuttingArea.clientHeight)))
    {      
      console.log(false)      
    }
    else
    {
      console.log(true)
      // el.removeEventListener('mousemove',move)
    }

    if(e.clientX === cuttingArea.getBoundingClientRect().left)
    {
      // startPointX = cuttingArea.getBoundingClientRect().left;
      // console.log("Start Point: " + startPointX);
      endPointX = cuttingArea.getBoundingClientRect().left+cuttingArea.clientWidth;
      console.log("End Point: " + endPointX);
      // setStartPointX(cuttingArea.getBoundingClientRect().left);
      // setEndPointX(cuttingArea.getBoundingClientRect().left+cuttingArea.clientWidth);
    }
    // else if(endPointX !== (cuttingArea.getBoundingClientRect().left+cuttingArea.clientWidth) && e.clientX === (cuttingArea.getBoundingClientRect().left+cuttingArea.clientWidth))
    // {
    //   // startPointX = cuttingArea.getBoundingClientRect().left+cuttingArea.clientWidth;
    //   // console.log(startPointX)
    //   endPointX = cuttingArea.getBoundingClientRect().left;
    //   console.log("End Point: " + endPointX)
    // }

    // if(startPointX !== undefined && startPointX === cuttingArea.getBoundingClientRect().left)
    // {
    //   endPointX = cuttingArea.getBoundingClientRect().left+cuttingArea.clientWidth 
    // }
    // else if(startPointX !== undefined && startPointX === (cuttingArea.getBoundingClientRect().left+cuttingArea.clientWidth))
    // {
    //   endPointX = cuttingArea.getBoundingClientRect().left
    // }

    if(endPointX === e.clientX)
    {
      document.getElementById("cutting-result").innerText = "true";
    }
  }  

  const add = () => {
    document.getElementById("chopping-board").addEventListener('mousemove',move)
    document.getElementById("cutting-area").addEventListener('mousemove',move)
    // const el = e.target
    // const cuttingArea = document.getElementById("cutting-area");

    // console.log("ClientX:" + e.clientX)
    // console.log("ClientY:" + e.clientY)   

    // console.log(cuttingArea.getBoundingClientRect().left);
    // console.log(cuttingArea.getBoundingClientRect().left+cuttingArea.clientWidth);
    // console.log(cuttingArea.getBoundingClientRect().top);    
    // console.log(cuttingArea.clientHeight);
    // console.log(cuttingArea.getBoundingClientRect().top+cuttingArea.clientHeight);

    // el.addEventListener('mousemove',move)
  }

  const remove = () => {
    document.getElementById("chopping-board").removeEventListener('mousemove',move);
    document.getElementById("cutting-area").removeEventListener('mousemove',move);
    // const el = e.target
    // el.removeEventListener('mousemove',move);
  }

  return (
    <>
      <div id="chopping-board" onMouseDown={add} onMouseUp={remove}>
        <div id="cutting-area" onMouseDown={add} onMouseUp={remove}></div>
      </div>
      <label>Coordinate:</label>
      <label>(X):</label>
      <label id="coordinate-x"></label>
      &nbsp;
      <label>(Y):</label>
      <label id="coordinate-y"></label><br/>
      {/* <label>Start Point X: {StartPointX}</label><br/>
      <label>End Point X: {EndPointX}</label><br/> */}
      <label>Sliced: <span id="cutting-result">false</span></label>
    </>
  );
}

export default App;
