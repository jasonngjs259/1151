import React, { useState } from 'react'
import './App.css';

const App = () => {
  let offsetX, offsetY
  let startPointX, startPointY, endPointX, endPointY

  const [slice,setSlice] = useState("false")

  const move = (e) => {
    const el = e.target
    const cuttingArea = document.getElementById("cutting-area");
    el.style.left = `${e.pageX - offsetX}px`
    el.style.top = `${e.pageY - offsetY}px`
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
    }

    if(e.clientX === cuttingArea.getBoundingClientRect().left)
    {
      startPointX = cuttingArea.getBoundingClientRect().left;
      console.log("Start point: " + startPointX);
      endPointX = cuttingArea.getBoundingClientRect().left+cuttingArea.clientWidth;
      console.log("End point: " + endPointX);

    }
    else if(e.clientX === (cuttingArea.getBoundingClientRect().left+cuttingArea.clientWidth))
    {
      startPointX = cuttingArea.getBoundingClientRect().left+cuttingArea.clientWidth;
      console.log("Start point: " + startPointX);
      endPointX = cuttingArea.getBoundingClientRect().left;
      console.log("End point: " + endPointX);
    }

    // if(startPointX !== undefined && startPointX === cuttingArea.getBoundingClientRect().left)
    // {
    //   endPointX = cuttingArea.getBoundingClientRect().left+cuttingArea.clientWidth 
    // }
    // else if(startPointX !== undefined && startPointX === (cuttingArea.getBoundingClientRect().left+cuttingArea.clientWidth))
    // {
    //   endPointX = cuttingArea.getBoundingClientRect().left
    // }

    if((endPointX !== undefined && endPointX === e.clientX) || (endPointY !== undefined && endPointY === e.clientY))
    {
      setSlice("true")
    }
    else
    {
      setSlice("false")
    }
  }  

  const add = (e) => {
    const el = e.target
    const cuttingArea = document.getElementById("cutting-area");

    console.log("ClientX:" + e.clientX)
    console.log("ClientY:" + e.clientY)   

    console.log(cuttingArea.getBoundingClientRect().left);
    console.log(cuttingArea.getBoundingClientRect().left+cuttingArea.clientWidth);
    console.log(cuttingArea.getBoundingClientRect().top);    
    console.log(cuttingArea.clientHeight);
    console.log(cuttingArea.getBoundingClientRect().top+cuttingArea.clientHeight);

    el.addEventListener('mousemove',move)
  }

  const remove = (e) => {
    const el = e.target
    console.log("ClientX:" + e.clientX)
    console.log("ClientY:" + e.clientY)
    el.removeEventListener('mousemove',move)
  }

  return (
    <>
      <div id="chopping-board" onMouseDown={add} onMouseUp={remove}>
        <div id="cutting-area"></div>
      </div>
      <label>Coordinate:</label>
      <label>(X):</label>
      <label id="coordinate-x"></label>
      &nbsp;
      <label>(Y):</label>
      <label id="coordinate-y"></label><br/>
      <label>Sliced: {slice}</label>
    </>
  );
}

export default App;
